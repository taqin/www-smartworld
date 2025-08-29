import { NextRequest, NextResponse } from 'next/server';
import { eq, and, or, gte, lte, between } from 'drizzle-orm';
import { db, listings, bookings } from '@/lib/db/connection';

interface AvailabilityQuery {
  from?: string;
  to?: string;
  guests?: number;
}

interface AvailabilityResponse {
  success: boolean;
  data?: {
    available: boolean;
    blockedDates: string[];
    availablePeriods: Array<{
      start: string;
      end: string;
    }>;
    minimumStay: number;
    maximumStay: number;
    instantBook: boolean;
    checkInTime: string;
    checkOutTime: string;
    message?: string;
  };
  error?: string;
}

// GET /api/listings/[id]/availability - Check availability for specific dates
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const { id } = params;

    const query: AvailabilityQuery = {
      from: searchParams.get('from') || undefined,
      to: searchParams.get('to') || undefined,
      guests: searchParams.get('guests') ? parseInt(searchParams.get('guests')!) : undefined,
    };

    // First, get the listing details
    const listing = await db
      .select({
        id: listings.id,
        title: listings.title,
        maxGuests: listings.maxGuests,
        minimumNights: listings.minimumNights,
        maximumNights: listings.maximumNights,
        instantBook: listings.instantBook,
        checkInTime: listings.checkInTime,
        checkOutTime: listings.checkOutTime,
        isActive: listings.isActive,
      })
      .from(listings)
      .where(eq(listings.id, id))
      .limit(1);

    if (!listing || listing.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Listing not found'
      } as AvailabilityResponse, { status: 404 });
    }

    const listingData = listing[0];

    // Check if listing is active
    if (!listingData.isActive) {
      return NextResponse.json({
        success: true,
        data: {
          available: false,
          blockedDates: [],
          availablePeriods: [],
          minimumStay: listingData.minimumNights || 1,
          maximumStay: listingData.maximumNights || 90,
          instantBook: listingData.instantBook || false,
          checkInTime: listingData.checkInTime || '',
          checkOutTime: listingData.checkOutTime || '',
          message: 'This listing is currently unavailable'
        }
      } as AvailabilityResponse);
    }

    // Check guest capacity
    if (query.guests && query.guests > listingData.maxGuests) {
      return NextResponse.json({
        success: true,
        data: {
          available: false,
          blockedDates: [],
          availablePeriods: [],
          minimumStay: listingData.minimumNights || 1,
          maximumStay: listingData.maximumNights || 90,
          instantBook: listingData.instantBook || false,
          checkInTime: listingData.checkInTime || '',
          checkOutTime: listingData.checkOutTime || '',
          message: `This property can accommodate up to ${listingData.maxGuests} guests`
        }
      } as AvailabilityResponse);
    }

    // If specific dates are requested, check availability
    if (query.from && query.to) {
      const checkInDate = new Date(query.from + 'T00:00:00');
      const checkOutDate = new Date(query.to + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Validate dates (compare date strings to avoid timezone issues)
      const todayStr = today.toISOString().split('T')[0];
      const checkInStr = checkInDate.toISOString().split('T')[0];
      
      if (checkInStr < todayStr) {
        return NextResponse.json({
          success: true,
          data: {
            available: false,
            blockedDates: [],
            availablePeriods: [],
            minimumStay: listingData.minimumNights || 1,
            maximumStay: listingData.maximumNights || 90,
            instantBook: listingData.instantBook || false,
            checkInTime: listingData.checkInTime || '',
            checkOutTime: listingData.checkOutTime || '',
            message: 'Check-in date cannot be in the past'
          }
        } as AvailabilityResponse);
      }

      if (checkOutDate <= checkInDate) {
        return NextResponse.json({
          success: true,
          data: {
            available: false,
            blockedDates: [],
            availablePeriods: [],
            minimumStay: listingData.minimumNights || 1,
            maximumStay: listingData.maximumNights || 90,
            instantBook: listingData.instantBook || false,
            checkInTime: listingData.checkInTime || '',
            checkOutTime: listingData.checkOutTime || '',
            message: 'Check-out date must be after check-in date'
          }
        } as AvailabilityResponse);
      }

      // Calculate nights
      const nights = Math.ceil(
        (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      // Check minimum/maximum stay requirements
      const minNights = listingData.minimumNights || 1;
      const maxNights = listingData.maximumNights || 90;

      if (nights < minNights) {
        return NextResponse.json({
          success: true,
          data: {
            available: false,
            blockedDates: [],
            availablePeriods: [],
            minimumStay: minNights,
            maximumStay: maxNights,
            instantBook: listingData.instantBook || false,
            checkInTime: listingData.checkInTime || '',
            checkOutTime: listingData.checkOutTime || '',
            message: `Minimum stay is ${minNights} night${minNights > 1 ? 's' : ''}`
          }
        } as AvailabilityResponse);
      }

      if (nights > maxNights) {
        return NextResponse.json({
          success: true,
          data: {
            available: false,
            blockedDates: [],
            availablePeriods: [],
            minimumStay: minNights,
            maximumStay: maxNights,
            instantBook: listingData.instantBook || false,
            checkInTime: listingData.checkInTime || '',
            checkOutTime: listingData.checkOutTime || '',
            message: `Maximum stay is ${maxNights} night${maxNights > 1 ? 's' : ''}`
          }
        } as AvailabilityResponse);
      }

      // Check for overlapping bookings
      const overlappingBookings = await db
        .select({
          id: bookings.id,
          checkIn: bookings.checkIn,
          checkOut: bookings.checkOut,
          status: bookings.status,
        })
        .from(bookings)
        .where(
          and(
            eq(bookings.listingId, id),
            or(
              eq(bookings.status, 'confirmed'),
              eq(bookings.status, 'pending')
            ),
            or(
              // New booking starts during existing booking
              and(
                gte(checkInDate, bookings.checkIn),
                lte(checkInDate, bookings.checkOut)
              ),
              // New booking ends during existing booking
              and(
                gte(checkOutDate, bookings.checkIn),
                lte(checkOutDate, bookings.checkOut)
              ),
              // New booking completely contains existing booking
              and(
                lte(checkInDate, bookings.checkIn),
                gte(checkOutDate, bookings.checkOut)
              )
            )
          )
        );

      if (overlappingBookings.length > 0) {
        return NextResponse.json({
          success: true,
          data: {
            available: false,
            blockedDates: overlappingBookings.map(booking => 
              `${booking.checkIn.toISOString().split('T')[0]} to ${booking.checkOut.toISOString().split('T')[0]}`
            ),
            availablePeriods: [],
            minimumStay: minNights,
            maximumStay: maxNights,
            instantBook: listingData.instantBook || false,
            checkInTime: listingData.checkInTime || '',
            checkOutTime: listingData.checkOutTime || '',
            message: 'These dates are not available'
          }
        } as AvailabilityResponse);
      }

      // Dates are available!
      return NextResponse.json({
        success: true,
        data: {
          available: true,
          blockedDates: [],
          availablePeriods: [{
            start: query.from,
            end: query.to
          }],
          minimumStay: minNights,
          maximumStay: maxNights,
          instantBook: listingData.instantBook || false,
          checkInTime: listingData.checkInTime || '',
          checkOutTime: listingData.checkOutTime || '',
          message: `Available for ${nights} night${nights > 1 ? 's' : ''}`
        }
      } as AvailabilityResponse);
    }

    // If no specific dates requested, return general availability info
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 12); // Check next 12 months

    const existingBookings = await db
      .select({
        checkIn: bookings.checkIn,
        checkOut: bookings.checkOut,
      })
      .from(bookings)
      .where(
        and(
          eq(bookings.listingId, id),
          or(
            eq(bookings.status, 'confirmed'),
            eq(bookings.status, 'pending')
          ),
          gte(bookings.checkOut, new Date())
        )
      );

    const blockedDates = existingBookings.map(booking => {
      const dates = [];
      const current = new Date(booking.checkIn);
      const end = new Date(booking.checkOut);
      
      while (current <= end) {
        dates.push(current.toISOString().split('T')[0]);
        current.setDate(current.getDate() + 1);
      }
      
      return dates;
    }).flat();

    return NextResponse.json({
      success: true,
      data: {
        available: true,
        blockedDates: [...new Set(blockedDates)], // Remove duplicates
        availablePeriods: [], // Would calculate available periods between bookings
        minimumStay: listingData.minimumNights || 1,
        maximumStay: listingData.maximumNights || 90,
        instantBook: listingData.instantBook || false,
        checkInTime: listingData.checkInTime || '',
        checkOutTime: listingData.checkOutTime || '',
      }
    } as AvailabilityResponse);

  } catch (error) {
    console.error('Error checking availability:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to check availability'
    } as AvailabilityResponse, { status: 500 });
  }
}
