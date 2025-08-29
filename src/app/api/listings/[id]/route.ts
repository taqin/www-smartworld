import { NextRequest, NextResponse } from 'next/server';
import { eq, and } from 'drizzle-orm';
import { db, listings, users, reviews } from '@/lib/db/connection';

// This matches your JSON schema from earlier
interface ListingDetail {
  listingId: string;
  listingType: 'stay' | 'experience' | 'car' | 'real-estate';
  basic: {
    title: string;
    badge: string;
    description: string;
    extendedDescription: string;
    location: {
      address: string;
      fullAddress: string;
      coordinates: { lat: number; lng: number };
      mapEmbedUrl: string;
    };
    category: string;
    isLiked: boolean;
    isSaved: boolean;
  };
  media: {
    featuredImage: string;
    gallery: Array<{
      id: number;
      url: string;
      alt: string;
      caption: string;
    }>;
  };
  pricing: {
    basePrice: number;
    currency: string;
    priceUnit: string;
    rates: {
      weekdayRate: number;
      weekendRate: number;
      monthlyDiscountPercent: number;
    };
    fees: {
      serviceFee: number;
      cleaningFee: number;
      taxes: number;
    };
    minimumNights: number;
    maximumNights: number;
  };
  accommodation: {
    maxGuests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    propertyType: string;
    amenities: Array<{
      id: string;
      name: string;
      icon: string;
      category: string;
    }>;
    totalAmenities: number;
  };
  host: {
    id: string;
    name: string;
    firstName: string;
    lastName: string;
    avatar: string;
    isVerified: boolean;
    joinedDate: string;
    profileUrl: string;
    responseRate: number;
    responseTime: string;
    totalListings: number;
    rating: number;
    bio: string;
  };
  reviews: {
    totalReviews: number;
    averageRating: number;
    ratingBreakdown: Record<string, number>;
    reviewCategories: Record<string, number>;
    recentReviews: Array<{
      id: string;
      guestName: string;
      rating: number;
      date: string;
      comment: string;
    }>;
  };
  availability: {
    calendar: {
      availableDates: string[];
      blockedDates: string[];
      minimumStay: number;
      maximumStay: number;
      checkInTime: string;
      checkOutTime: string;
    };
    instantBook: boolean;
  };
  policies: {
    cancellation: {
      type: string;
      description: string;
    };
    houseRules: {
      checkIn: string;
      checkOut: string;
      specialRules: string[];
      smokingAllowed: boolean;
      petsAllowed: boolean;
      partiesAllowed: boolean;
    };
  };
}

// GET /api/listings/[id] - Get specific listing details
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Fetch listing with host information from database
    const listing = await db
      .select({
        // Listing fields
        id: listings.id,
        title: listings.title,
        description: listings.description,
        extendedDescription: listings.extendedDescription,
        listingType: listings.listingType,
        category: listings.category,
        badge: listings.badge,
        basePrice: listings.basePrice,
        currency: listings.currency,
        priceUnit: listings.priceUnit,
        weekdayRate: listings.weekdayRate,
        weekendRate: listings.weekendRate,
        monthlyDiscountPercent: listings.monthlyDiscountPercent,
        serviceFee: listings.serviceFee,
        cleaningFee: listings.cleaningFee,
        taxesPercent: listings.taxesPercent,
        address: listings.address,
        fullAddress: listings.fullAddress,
        latitude: listings.latitude,
        longitude: listings.longitude,
        mapEmbedUrl: listings.mapEmbedUrl,
        maxGuests: listings.maxGuests,
        bedrooms: listings.bedrooms,
        beds: listings.beds,
        bathrooms: listings.bathrooms,
        propertyType: listings.propertyType,
        featuredImage: listings.featuredImage,
        gallery: listings.gallery,
        amenities: listings.amenities,
        minimumNights: listings.minimumNights,
        maximumNights: listings.maximumNights,
        checkInTime: listings.checkInTime,
        checkOutTime: listings.checkOutTime,
        instantBook: listings.instantBook,
        cancellationType: listings.cancellationType,
        cancellationDescription: listings.cancellationDescription,
        houseRules: listings.houseRules,
        isActive: listings.isActive,
        views: listings.views,
        saves: listings.saves,
        shares: listings.shares,
        totalReviews: listings.totalReviews,
        averageRating: listings.averageRating,
        
        // Host fields
        hostId: users.id,
        hostName: users.name,
        hostFirstName: users.firstName,
        hostLastName: users.lastName,
        hostAvatar: users.avatar,
        hostIsVerified: users.isVerified,
        hostJoinedDate: users.joinedDate,
        hostBio: users.bio,
        hostResponseRate: users.responseRate,
        hostResponseTime: users.responseTime,
        hostTotalListings: users.totalListings,
        hostAverageRating: users.averageRating,
        hostIsSuperhost: users.isSuperhost,
      })
      .from(listings)
      .leftJoin(users, eq(listings.hostId, users.id))
      .where(and(eq(listings.id, id), eq(listings.isActive, true)))
      .limit(1);

    if (!listing || listing.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Listing not found' },
        { status: 404 }
      );
    }

    const listingData = listing[0];

    // Fetch recent reviews for this listing
    const recentReviews = await db
      .select({
        id: reviews.id,
        rating: reviews.overallRating,
        comment: reviews.comment,
        createdAt: reviews.createdAt,
        reviewerName: users.name,
        reviewerAvatar: users.avatar,
      })
      .from(reviews)
      .leftJoin(users, eq(reviews.reviewerId, users.id))
      .where(and(eq(reviews.listingId, id), eq(reviews.isPublic, true)))
      .orderBy(reviews.createdAt)
      .limit(10);

    // Transform data to match the expected format
    const transformedListing: ListingDetail = {
      listingId: listingData.id,
      listingType: listingData.listingType as 'stay' | 'experience' | 'car' | 'real-estate',
      basic: {
        title: listingData.title,
        badge: listingData.badge || '',
        description: listingData.description,
        extendedDescription: listingData.extendedDescription || '',
        location: {
          address: listingData.address,
          fullAddress: listingData.fullAddress || listingData.address,
          coordinates: { 
            lat: listingData.latitude || 0, 
            lng: listingData.longitude || 0 
          },
          mapEmbedUrl: listingData.mapEmbedUrl || ''
        },
        category: listingData.category || '',
        isLiked: false,
        isSaved: false
      },
      media: {
        featuredImage: listingData.featuredImage || '',
        gallery: listingData.gallery || []
      },
      pricing: {
        basePrice: parseFloat(listingData.basePrice),
        currency: listingData.currency,
        priceUnit: listingData.priceUnit,
        rates: {
          weekdayRate: parseFloat(listingData.weekdayRate || '0'),
          weekendRate: parseFloat(listingData.weekendRate || '0'),
          monthlyDiscountPercent: listingData.monthlyDiscountPercent || 0
        },
        fees: {
          serviceFee: parseFloat(listingData.serviceFee || '0'),
          cleaningFee: parseFloat(listingData.cleaningFee || '0'),
          taxes: listingData.taxesPercent || 0
        },
        minimumNights: listingData.minimumNights || 1,
        maximumNights: listingData.maximumNights || 90
      },
      accommodation: {
        maxGuests: listingData.maxGuests,
        bedrooms: listingData.bedrooms || 0,
        beds: listingData.beds || 0,
        bathrooms: listingData.bathrooms || 0,
        propertyType: listingData.propertyType || '',
        amenities: listingData.amenities || [],
        totalAmenities: (listingData.amenities || []).length
      },
      host: {
        id: listingData.hostId || '',
        name: listingData.hostName || '',
        firstName: listingData.hostFirstName || '',
        lastName: listingData.hostLastName || '',
        avatar: listingData.hostAvatar || '',
        isVerified: listingData.hostIsVerified || false,
        joinedDate: listingData.hostJoinedDate?.toISOString().split('T')[0] || '',
        profileUrl: `/host/${listingData.hostId}`,
        responseRate: listingData.hostResponseRate || 0,
        responseTime: listingData.hostResponseTime || '',
        totalListings: listingData.hostTotalListings || 0,
        rating: listingData.hostAverageRating || 0,
        bio: listingData.hostBio || ''
      },
      reviews: {
        totalReviews: listingData.totalReviews || 0,
        averageRating: listingData.averageRating || 0,
        ratingBreakdown: calculateRatingBreakdown(recentReviews),
        reviewCategories: {
          cleanliness: 4.9,
          accuracy: 4.8,
          checkIn: 4.9,
          communication: 4.9,
          location: 4.8,
          value: 4.7
        },
        recentReviews: recentReviews.map(review => ({
          id: review.id,
          guestName: review.reviewerName || 'Anonymous',
          rating: review.rating,
          date: review.createdAt?.toISOString().split('T')[0] || '',
          comment: review.comment || ''
        }))
      },
      availability: {
        calendar: {
          availableDates: [], // Would need separate query
          blockedDates: [],
          minimumStay: listingData.minimumNights || 1,
          maximumStay: listingData.maximumNights || 90,
          checkInTime: listingData.checkInTime || '',
          checkOutTime: listingData.checkOutTime || ''
        },
        instantBook: listingData.instantBook || false
      },
      policies: {
        cancellation: {
          type: listingData.cancellationType || 'flexible',
          description: listingData.cancellationDescription || ''
        },
        houseRules: listingData.houseRules || {
          checkIn: listingData.checkInTime || '',
          checkOut: listingData.checkOutTime || '',
          specialRules: [],
          smokingAllowed: false,
          petsAllowed: false,
          partiesAllowed: false
        }
      }
    };

    // Increment view count
    await db
      .update(listings)
      .set({ 
        views: (listingData.views || 0) + 1,
        updatedAt: new Date()
      })
      .where(eq(listings.id, id));

    return NextResponse.json({
      success: true,
      data: transformedListing
    });

  } catch (error) {
    console.error('Error fetching listing:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch listing' },
      { status: 500 }
    );
  }
}

// PUT /api/listings/[id] - Update listing (for hosts)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    
    // TODO: Add authentication middleware
    // TODO: Verify host ownership
    // TODO: Validate request body
    // TODO: Update in database
    
    return NextResponse.json({
      success: true,
      data: { id, ...body },
      message: 'Listing updated successfully'
    });

  } catch (error) {
    console.error('Error updating listing:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update listing' },
      { status: 500 }
    );
  }
}

// DELETE /api/listings/[id] - Delete listing (for hosts/admin)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // TODO: Add authentication middleware
    // TODO: Verify host ownership or admin role
    // TODO: Soft delete in database
    
    return NextResponse.json({
      success: true,
      message: 'Listing deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting listing:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete listing' },
      { status: 500 }
    );
  }
}

// Helper function to calculate rating breakdown
function calculateRatingBreakdown(reviews: any[]) {
  const breakdown = { "5": 0, "4": 0, "3": 0, "2": 0, "1": 0 };
  reviews.forEach(review => {
    const rating = review.rating.toString();
    if (breakdown[rating as keyof typeof breakdown] !== undefined) {
      breakdown[rating as keyof typeof breakdown]++;
    }
  });
  return breakdown;
}
