import { NextRequest, NextResponse } from 'next/server';
import { eq, and } from 'drizzle-orm';
import { db, listings, users, reviews } from '@/lib/db/connection';

interface ListingResponse {
  success: boolean;
  data?: any;
  error?: string;
}

// GET /api/listings/slug/[slug] - Get listing by URL slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json<ListingResponse>(
        { success: false, error: 'Slug parameter is required' },
        { status: 400 }
      );
    }

    // Fetch listing by slug with related data
    const listing = await db
      .select({
        // Basic listing info
        id: listings.id,
        title: listings.title,
        description: listings.description,
        extendedDescription: listings.extendedDescription,
        listingType: listings.listingType,
        category: listings.category,
        badge: listings.badge,
        url: listings.url,
        
        // Pricing
        basePrice: listings.basePrice,
        currency: listings.currency,
        priceUnit: listings.priceUnit,
        weekdayRate: listings.weekdayRate,
        weekendRate: listings.weekendRate,
        monthlyDiscountPercent: listings.monthlyDiscountPercent,
        serviceFee: listings.serviceFee,
        cleaningFee: listings.cleaningFee,
        taxesPercent: listings.taxesPercent,
        
        // Location
        address: listings.address,
        fullAddress: listings.fullAddress,
        latitude: listings.latitude,
        longitude: listings.longitude,
        mapEmbedUrl: listings.mapEmbedUrl,
        
        // Accommodation
        maxGuests: listings.maxGuests,
        bedrooms: listings.bedrooms,
        beds: listings.beds,
        bathrooms: listings.bathrooms,
        propertyType: listings.propertyType,
        
        // Media
        featuredImage: listings.featuredImage,
        gallery: listings.gallery,
        
        // Amenities
        amenities: listings.amenities,
        
        // Booking rules
        minimumNights: listings.minimumNights,
        maximumNights: listings.maximumNights,
        checkInTime: listings.checkInTime,
        checkOutTime: listings.checkOutTime,
        instantBook: listings.instantBook,
        cancellationType: listings.cancellationType,
        cancellationDescription: listings.cancellationDescription,
        houseRules: listings.houseRules,
        
        // Status
        isActive: listings.isActive,
        isFeatured: listings.isFeatured,
        isTrending: listings.isTrending,
        views: listings.views,
        saves: listings.saves,
        shares: listings.shares,
        totalReviews: listings.totalReviews,
        averageRating: listings.averageRating,
        
        // SEO
        metaTitle: listings.metaTitle,
        metaDescription: listings.metaDescription,
        keywords: listings.keywords,
        
        // Host info
        hostId: users.id,
        hostName: users.name,
        hostFirstName: users.firstName,
        hostLastName: users.lastName,
        hostAvatar: users.avatar,
        hostIsVerified: users.isVerified,
        hostResponseRate: users.responseRate,
        hostResponseTime: users.responseTime,
        hostIsSuperhost: users.isSuperhost,
        hostTotalListings: users.totalListings,
        
        // Timestamps
        createdAt: listings.createdAt,
        updatedAt: listings.updatedAt,
      })
      .from(listings)
      .leftJoin(users, eq(listings.hostId, users.id))
      .where(and(eq(listings.url, slug), eq(listings.isActive, true)))
      .limit(1);

    if (!listing || listing.length === 0) {
      return NextResponse.json<ListingResponse>(
        { success: false, error: 'Listing not found' },
        { status: 404 }
      );
    }

    const listingData = listing[0];

    // Format the response data
    const responseData = {
      id: listingData.id,
      title: listingData.title,
      description: listingData.description,
      extendedDescription: listingData.extendedDescription,
      listingType: listingData.listingType,
      category: listingData.category,
      badge: listingData.badge,
      url: listingData.url,
      
      pricing: {
        basePrice: parseFloat(listingData.basePrice),
        currency: listingData.currency,
        priceUnit: listingData.priceUnit,
        weekdayRate: listingData.weekdayRate ? parseFloat(listingData.weekdayRate) : null,
        weekendRate: listingData.weekendRate ? parseFloat(listingData.weekendRate) : null,
        monthlyDiscountPercent: listingData.monthlyDiscountPercent,
        serviceFee: parseFloat(listingData.serviceFee || '0'),
        cleaningFee: parseFloat(listingData.cleaningFee || '0'),
        taxesPercent: listingData.taxesPercent,
      },
      
      location: {
        address: listingData.address,
        fullAddress: listingData.fullAddress,
        coordinates: {
          lat: listingData.latitude || 0,
          lng: listingData.longitude || 0,
        },
        mapEmbedUrl: listingData.mapEmbedUrl,
      },
      
      accommodation: {
        maxGuests: listingData.maxGuests,
        bedrooms: listingData.bedrooms || 0,
        beds: listingData.beds || 0,
        bathrooms: listingData.bathrooms || 0,
        propertyType: listingData.propertyType,
      },
      
      media: {
        featuredImage: listingData.featuredImage || '',
        gallery: listingData.gallery || [],
      },
      
      amenities: listingData.amenities || [],
      
      bookingRules: {
        minimumNights: listingData.minimumNights,
        maximumNights: listingData.maximumNights,
        checkInTime: listingData.checkInTime,
        checkOutTime: listingData.checkOutTime,
        instantBook: listingData.instantBook,
        cancellationType: listingData.cancellationType,
        cancellationDescription: listingData.cancellationDescription,
        houseRules: listingData.houseRules,
      },
      
      stats: {
        isActive: listingData.isActive,
        isFeatured: listingData.isFeatured,
        isTrending: listingData.isTrending,
        views: listingData.views,
        saves: listingData.saves,
        shares: listingData.shares,
        totalReviews: listingData.totalReviews,
        averageRating: listingData.averageRating || 0,
      },
      
      seo: {
        metaTitle: listingData.metaTitle,
        metaDescription: listingData.metaDescription,
        keywords: listingData.keywords || [],
      },
      
      host: {
        id: listingData.hostId,
        name: listingData.hostName,
        firstName: listingData.hostFirstName,
        lastName: listingData.hostLastName,
        avatar: listingData.hostAvatar,
        isVerified: listingData.hostIsVerified,
        responseRate: listingData.hostResponseRate,
        responseTime: listingData.hostResponseTime,
        isSuperhost: listingData.hostIsSuperhost,
        totalListings: listingData.hostTotalListings,
      },
      
      createdAt: listingData.createdAt?.toISOString(),
      updatedAt: listingData.updatedAt?.toISOString(),
    };

    return NextResponse.json<ListingResponse>({
      success: true,
      data: responseData,
    });

  } catch (error) {
    console.error('Error fetching listing by slug:', error);
    return NextResponse.json<ListingResponse>(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}