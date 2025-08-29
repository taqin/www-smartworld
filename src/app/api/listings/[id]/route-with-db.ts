import { NextRequest, NextResponse } from 'next/server';
import { eq, and } from 'drizzle-orm';
import { db, listings, users, reviews, availability } from '@/lib/db/connection';

// GET /api/listings/[id] - Get specific listing details with real database
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Fetch listing with host information
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
        isFeatured: listings.isFeatured,
        isTrending: listings.isTrending,
        views: listings.views,
        saves: listings.saves,
        shares: listings.shares,
        totalReviews: listings.totalReviews,
        averageRating: listings.averageRating,
        createdAt: listings.createdAt,
        updatedAt: listings.updatedAt,
        
        // Host fields
        hostId: users.id,
        hostName: users.name,
        hostFirstName: users.firstName,
        hostLastName: users.lastName,
        hostAvatar: users.avatar,
        hostIsVerified: users.isVerified,
        hostJoinedDate: users.joinedDate,
        hostBio: users.bio,
        hostLanguages: users.languages,
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

    // Fetch availability for next 90 days
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 90);

    const availabilityData = await db
      .select({
        date: availability.date,
        isAvailable: availability.isAvailable,
        price: availability.price,
        minimumStay: availability.minimumStay,
      })
      .from(availability)
      .where(
        and(
          eq(availability.listingId, id),
          eq(availability.isAvailable, true)
        )
      )
      .limit(90);

    // Transform the data to match your frontend schema
    const transformedListing = {
      listingId: listingData.id,
      listingType: listingData.listingType,
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
            lng: listingData.longitude || 0,
          },
          mapEmbedUrl: listingData.mapEmbedUrl || '',
        },
        category: listingData.category || '',
        isLiked: false, // Would need to check user favorites
        isSaved: false, // Would need to check user favorites
      },
      media: {
        featuredImage: listingData.featuredImage || '',
        gallery: listingData.gallery || [],
      },
      pricing: {
        basePrice: parseFloat(listingData.basePrice),
        currency: listingData.currency,
        priceUnit: listingData.priceUnit,
        rates: {
          weekdayRate: parseFloat(listingData.weekdayRate || '0'),
          weekendRate: parseFloat(listingData.weekendRate || '0'),
          monthlyDiscountPercent: listingData.monthlyDiscountPercent || 0,
        },
        fees: {
          serviceFee: parseFloat(listingData.serviceFee || '0'),
          cleaningFee: parseFloat(listingData.cleaningFee || '0'),
          taxes: listingData.taxesPercent || 0,
        },
        minimumNights: listingData.minimumNights || 1,
        maximumNights: listingData.maximumNights || 90,
      },
      accommodation: {
        maxGuests: listingData.maxGuests,
        bedrooms: listingData.bedrooms || 0,
        beds: listingData.beds || 0,
        bathrooms: listingData.bathrooms || 0,
        propertyType: listingData.propertyType || '',
        amenities: listingData.amenities || [],
        totalAmenities: (listingData.amenities || []).length,
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
        bio: listingData.hostBio || '',
      },
      reviews: {
        totalReviews: listingData.totalReviews || 0,
        averageRating: listingData.averageRating || 0,
        ratingBreakdown: {}, // Would need separate query to calculate
        reviewCategories: {}, // Would need separate query to calculate
        recentReviews: recentReviews.map(review => ({
          id: review.id,
          guestName: review.reviewerName || 'Anonymous',
          guestAvatar: review.reviewerAvatar || '',
          rating: review.rating,
          date: review.createdAt?.toISOString().split('T')[0] || '',
          comment: review.comment || '',
        })),
      },
      availability: {
        calendar: {
          availableDates: availabilityData.map(a => a.date?.toISOString().split('T')[0] || ''),
          blockedDates: [], // Would need separate query
          minimumStay: listingData.minimumNights || 1,
          maximumStay: listingData.maximumNights || 90,
          checkInTime: listingData.checkInTime || '',
          checkOutTime: listingData.checkOutTime || '',
        },
        instantBook: listingData.instantBook || false,
      },
      policies: {
        cancellation: {
          type: listingData.cancellationType || 'flexible',
          description: listingData.cancellationDescription || '',
        },
        houseRules: listingData.houseRules || {
          checkIn: listingData.checkInTime || '',
          checkOut: listingData.checkOutTime || '',
          specialRules: [],
          smokingAllowed: false,
          petsAllowed: false,
          partiesAllowed: false,
        },
      },
      seo: {
        metaTitle: `${listingData.title} - SmartWorld Travel`,
        metaDescription: listingData.description.substring(0, 160),
        keywords: [listingData.category, listingData.propertyType, listingData.address].filter(Boolean),
        canonicalUrl: `/listing/${id}`,
        ogImage: listingData.featuredImage || '',
      },
      additionalInfo: {
        lastUpdated: listingData.updatedAt?.toISOString() || '',
        createdDate: listingData.createdAt?.toISOString() || '',
        status: 'active',
        featured: listingData.isFeatured || false,
        trending: listingData.isTrending || false,
        newListing: false, // Could calculate based on createdAt
        views: listingData.views || 0,
        saves: listingData.saves || 0,
        shares: listingData.shares || 0,
      },
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
      data: transformedListing,
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
    
    // TODO: Add authentication middleware to get current user
    // TODO: Verify host ownership of the listing
    // TODO: Validate request body with Zod schema
    
    const updatedListing = await db
      .update(listings)
      .set({
        ...body,
        updatedAt: new Date(),
      })
      .where(eq(listings.id, id))
      .returning();

    if (!updatedListing.length) {
      return NextResponse.json(
        { success: false, error: 'Listing not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedListing[0],
      message: 'Listing updated successfully',
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
    
    // Soft delete by setting isActive to false
    const deletedListing = await db
      .update(listings)
      .set({
        isActive: false,
        updatedAt: new Date(),
      })
      .where(eq(listings.id, id))
      .returning();

    if (!deletedListing.length) {
      return NextResponse.json(
        { success: false, error: 'Listing not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Listing deleted successfully',
    });

  } catch (error) {
    console.error('Error deleting listing:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete listing' },
      { status: 500 }
    );
  }
}
