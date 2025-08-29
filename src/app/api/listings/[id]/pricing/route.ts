import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { db, listings } from '@/lib/db/connection';

interface PricingQuery {
  checkIn: string;
  checkOut: string;
  guests?: number;
  promoCode?: string;
}

interface PricingBreakdown {
  basePrice: number;
  nights: number;
  subtotal: number;
  weekdayNights: number;
  weekendNights: number;
  weekdayRate: number;
  weekendRate: number;
  serviceFee: number;
  cleaningFee: number;
  taxes: number;
  taxesPercent: number;
  monthlyDiscount: number;
  monthlyDiscountPercent: number;
  promoDiscount: number;
  total: number;
  currency: string;
  breakdown: string;
  pricePerNight: number;
}

interface PricingResponse {
  success: boolean;
  data?: PricingBreakdown;
  error?: string;
}

// Helper function to check if a date is weekend (Friday or Saturday)
function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 5 || day === 6; // Friday = 5, Saturday = 6
}

// Helper function to calculate nights breakdown
function calculateNightsBreakdown(checkIn: Date, checkOut: Date) {
  let weekdayNights = 0;
  let weekendNights = 0;
  
  const current = new Date(checkIn);
  while (current < checkOut) {
    if (isWeekend(current)) {
      weekendNights++;
    } else {
      weekdayNights++;
    }
    current.setDate(current.getDate() + 1);
  }
  
  return { weekdayNights, weekendNights };
}

// GET /api/listings/[id]/pricing - Calculate pricing for specific dates
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const { id } = params;

    const query: PricingQuery = {
      checkIn: searchParams.get('checkIn') || '',
      checkOut: searchParams.get('checkOut') || '',
      guests: searchParams.get('guests') ? parseInt(searchParams.get('guests')!) : undefined,
      promoCode: searchParams.get('promoCode') || undefined,
    };

    // Validate required parameters
    if (!query.checkIn || !query.checkOut) {
      return NextResponse.json({
        success: false,
        error: 'Check-in and check-out dates are required'
      } as PricingResponse, { status: 400 });
    }

    // Parse dates
    const checkInDate = new Date(query.checkIn);
    const checkOutDate = new Date(query.checkOut);

    // Validate dates
    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      return NextResponse.json({
        success: false,
        error: 'Invalid date format'
      } as PricingResponse, { status: 400 });
    }

    if (checkOutDate <= checkInDate) {
      return NextResponse.json({
        success: false,
        error: 'Check-out date must be after check-in date'
      } as PricingResponse, { status: 400 });
    }

    // Get listing pricing information
    const listing = await db
      .select({
        id: listings.id,
        title: listings.title,
        basePrice: listings.basePrice,
        currency: listings.currency,
        weekdayRate: listings.weekdayRate,
        weekendRate: listings.weekendRate,
        monthlyDiscountPercent: listings.monthlyDiscountPercent,
        serviceFee: listings.serviceFee,
        cleaningFee: listings.cleaningFee,
        taxesPercent: listings.taxesPercent,
        isActive: listings.isActive,
      })
      .from(listings)
      .where(eq(listings.id, id))
      .limit(1);

    if (!listing || listing.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Listing not found'
      } as PricingResponse, { status: 404 });
    }

    const listingData = listing[0];

    if (!listingData.isActive) {
      return NextResponse.json({
        success: false,
        error: 'This listing is currently unavailable'
      } as PricingResponse, { status: 400 });
    }

    // Calculate nights
    const totalNights = Math.ceil(
      (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Calculate weekday/weekend breakdown
    const { weekdayNights, weekendNights } = calculateNightsBreakdown(checkInDate, checkOutDate);

    // Get rates (use base price if specific rates not set)
    const basePrice = parseFloat(listingData.basePrice);
    const weekdayRate = parseFloat(listingData.weekdayRate || listingData.basePrice);
    const weekendRate = parseFloat(listingData.weekendRate || listingData.basePrice);

    // Calculate subtotal based on weekday/weekend rates
    const weekdaySubtotal = weekdayNights * weekdayRate;
    const weekendSubtotal = weekendNights * weekendRate;
    const subtotal = weekdaySubtotal + weekendSubtotal;

    // Calculate fees
    const serviceFee = parseFloat(listingData.serviceFee || '0');
    const cleaningFee = parseFloat(listingData.cleaningFee || '0');
    const taxesPercent = listingData.taxesPercent || 0;

    // Calculate monthly discount (if stay is 28+ nights)
    let monthlyDiscount = 0;
    let monthlyDiscountPercent = 0;
    if (totalNights >= 28 && listingData.monthlyDiscountPercent) {
      monthlyDiscountPercent = listingData.monthlyDiscountPercent;
      monthlyDiscount = subtotal * (monthlyDiscountPercent / 100);
    }

    // Apply promo code discount (placeholder - would integrate with promo system)
    let promoDiscount = 0;
    if (query.promoCode) {
      // TODO: Implement promo code validation and discount calculation
      // For now, just a placeholder
    }

    // Calculate subtotal after discounts
    const discountedSubtotal = subtotal - monthlyDiscount - promoDiscount;

    // Calculate taxes on the discounted subtotal + fees
    const taxableAmount = discountedSubtotal + serviceFee + cleaningFee;
    const taxes = taxableAmount * (taxesPercent / 100);

    // Calculate final total
    const total = discountedSubtotal + serviceFee + cleaningFee + taxes;

    // Create breakdown description
    let breakdownParts = [];
    
    if (weekdayNights > 0 && weekendNights > 0) {
      breakdownParts.push(`$${weekdayRate.toFixed(0)} x ${weekdayNights} weekday nights`);
      breakdownParts.push(`$${weekendRate.toFixed(0)} x ${weekendNights} weekend nights`);
    } else {
      const avgRate = subtotal / totalNights;
      breakdownParts.push(`$${avgRate.toFixed(0)} x ${totalNights} night${totalNights > 1 ? 's' : ''}`);
    }

    const breakdown = breakdownParts.join(' + ');
    const pricePerNight = total / totalNights;

    const pricingData: PricingBreakdown = {
      basePrice,
      nights: totalNights,
      subtotal,
      weekdayNights,
      weekendNights,
      weekdayRate,
      weekendRate,
      serviceFee,
      cleaningFee,
      taxes: Math.round(taxes * 100) / 100, // Round to 2 decimal places
      taxesPercent,
      monthlyDiscount,
      monthlyDiscountPercent,
      promoDiscount,
      total: Math.round(total * 100) / 100, // Round to 2 decimal places
      currency: listingData.currency,
      breakdown,
      pricePerNight: Math.round(pricePerNight * 100) / 100,
    };

    return NextResponse.json({
      success: true,
      data: pricingData
    } as PricingResponse);

  } catch (error) {
    console.error('Error calculating pricing:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to calculate pricing'
    } as PricingResponse, { status: 500 });
  }
}
