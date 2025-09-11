import { notFound } from 'next/navigation';
import { eq, and } from 'drizzle-orm';
import { db, listings, users, reviews } from '@/lib/db/connection';
import ListingStayDetailClient from './ListingStayDetailClient';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const listing = await getListingData(id);
  
  if (!listing) {
    return {
      title: 'Listing Not Found',
    };
  }

  return {
    title: `${listing.title} - SmartWorld Travel`,
    description: listing.description.substring(0, 160),
    keywords: [listing.category, listing.propertyType, listing.address].filter(Boolean).join(', '),
    openGraph: {
      title: listing.title,
      description: listing.description,
      images: listing.featuredImage ? [{ url: listing.featuredImage }] : [],
    },
  };
}

// Fetch listing data from database
async function getListingData(id: string) {
  try {
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
        
        // Experience fields
        itinerary: listings.itinerary,
        travelOptions: listings.travelOptions,
        experienceDetails: listings.experienceDetails,
        
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
      .where(and(eq(listings.url, id), eq(listings.isActive, true)))
      .limit(1);

    if (!listing || listing.length === 0) {
      return null;
    }

    return listing[0];
  } catch (error) {
    console.error('Error fetching listing:', error);
    return null;
  }
}

// Fetch recent reviews
async function getListingReviews(listingId: string) {
  try {
    const recentReviews = await db
      .select({
        id: reviews.id,
        rating: reviews.overallRating,
        cleanlinessRating: reviews.cleanlinessRating,
        accuracyRating: reviews.accuracyRating,
        checkInRating: reviews.checkInRating,
        communicationRating: reviews.communicationRating,
        locationRating: reviews.locationRating,
        valueRating: reviews.valueRating,
        comment: reviews.comment,
        createdAt: reviews.createdAt,
        reviewerName: users.name,
        reviewerAvatar: users.avatar,
      })
      .from(reviews)
      .leftJoin(users, eq(reviews.reviewerId, users.id))
      .where(and(eq(reviews.listingId, listingId), eq(reviews.isPublic, true)))
      .orderBy(reviews.createdAt)
      .limit(10);

    return recentReviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

// Server Component - fetches data and renders client component
export default async function ListingStayDetailPage({ params }: PageProps) {
  const { id } = await params;
  const listingData = await getListingData(id);
  
  if (!listingData) {
    notFound();
  }
  
  const reviewsData = await getListingReviews(listingData.id);

  // Transform data to match the expected format
  const transformedData = {
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
      priceUnit: listingData.priceUnit || '',
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
      totalCalculation: {
        subtotal: parseFloat(listingData.basePrice) * 3, // Example: 3 nights
        serviceFee: parseFloat(listingData.serviceFee || '0'),
        total: parseFloat(listingData.basePrice) * 3 + parseFloat(listingData.serviceFee || '0'),
        breakdown: `RM${listingData.basePrice} x 3 nights`,
      },
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
      languages: listingData.hostLanguages || [],
      isIdentityVerified: listingData.hostIsVerified || false,
      isSuperhost: listingData.hostIsSuperhost || false,
    },
    reviews: {
      totalReviews: listingData.totalReviews || 0,
      averageRating: listingData.averageRating || 0,
      ratingBreakdown: calculateRatingBreakdown(reviewsData),
      reviewCategories: calculateReviewCategories(reviewsData),
      recentReviews: reviewsData.map(review => ({
        id: review.id,
        guestName: review.reviewerName || 'Anonymous',
        guestAvatar: review.reviewerAvatar || '',
        rating: review.rating,
        date: review.createdAt?.toISOString().split('T')[0] || '',
        comment: review.comment || '',
        hostReply: null, // Could be added later
      })),
      canReview: true,
      userReview: null,
    },
    availability: {
      calendar: {
        availableDates: [], // Would need separate query
        blockedDates: [],
        minimumStay: listingData.minimumNights || 1,
        maximumStay: listingData.maximumNights || 90,
        checkInTime: listingData.checkInTime || '',
        checkOutTime: listingData.checkOutTime || '',
      },
      instantBook: listingData.instantBook || false,
      advanceBooking: 365,
      preparationTime: 0,
    },
    policies: {
      cancellation: {
        type: listingData.cancellationType || 'flexible',
        description: listingData.cancellationDescription || '',
      },
      houseRules: {
        checkIn: listingData.checkInTime || '',
        checkOut: listingData.checkOutTime || '',
        specialRules: [],
        smokingAllowed: false,
        petsAllowed: false,
        partiesAllowed: false,
        additionalRules: [],
      },
      safetyFeatures: [
        'Smoke detector',
        'Carbon monoxide detector',
        'Fire extinguisher',
        'First aid kit',
      ],
    },
    booking: {
      availableForBooking: true,
      instantBookable: listingData.instantBook || false,
      requiresApproval: !listingData.instantBook,
      bookingUrl: '/checkout',
      contactHost: '/contact-host',
      guestRequirements: {
        governmentId: true,
        confirmEmail: true,
        confirmPhone: true,
      },
    },
    seo: {
      metaTitle: `${listingData.title} - SmartWorld Travel`,
      metaDescription: listingData.description.substring(0, 160),
      keywords: [listingData.category, listingData.propertyType, listingData.address].filter(Boolean) as string[],
      canonicalUrl: `/listing/${listingData.id}`,
      ogImage: listingData.featuredImage || '',
    },
    additionalInfo: {
      lastUpdated: listingData.updatedAt?.toISOString() || '',
      createdDate: listingData.createdAt?.toISOString() || '',
      status: 'active',
      featured: listingData.isFeatured || false,
      trending: listingData.isTrending || false,
      newListing: false,
      views: listingData.views || 0,
      saves: listingData.saves || 0,
      shares: listingData.shares || 0,
    },
    experience: {
      itinerary: listingData.itinerary || [],
      travelOptions: listingData.travelOptions || { budgetLevels: [], travelTypes: [] },
      experienceDetails: listingData.experienceDetails || {
        duration: '',
        durationHours: 0,
        difficulty: 'Easy',
        languages: [],
        meetingPoint: '',
        startTime: '',
      },
    },
  };

  // Increment view count (fire and forget)
  db.update(listings)
    .set({ 
      views: (listingData.views || 0) + 1,
      updatedAt: new Date()
    })
    .where(eq(listings.id, listingData.id))
    .catch(console.error);

  return <ListingStayDetailClient listingData={transformedData} />;
}

// Helper functions
function calculateRatingBreakdown(reviews: any[]) {
  const breakdown = { '5': 0, '4': 0, '3': 0, '2': 0, '1': 0 };
  reviews.forEach(review => {
    const rating = review.rating.toString();
    if (breakdown[rating as keyof typeof breakdown] !== undefined) {
      breakdown[rating as keyof typeof breakdown]++;
    }
  });
  return breakdown;
}

function calculateReviewCategories(reviews: any[]): Record<string, number> {
  if (reviews.length === 0) {
    return {
      cleanliness: 0,
      accuracy: 0,
      checkIn: 0,
      communication: 0,
      location: 0,
      value: 0,
    };
  }
  
  const totals = {
    cleanliness: 0,
    accuracy: 0,
    checkIn: 0,
    communication: 0,
    location: 0,
    value: 0,
  };

  let count = 0;
  reviews.forEach(review => {
    if (review.cleanlinessRating) {
      totals.cleanliness += review.cleanlinessRating;
      totals.accuracy += review.accuracyRating || 0;
      totals.checkIn += review.checkInRating || 0;
      totals.communication += review.communicationRating || 0;
      totals.location += review.locationRating || 0;
      totals.value += review.valueRating || 0;
      count++;
    }
  });

  if (count === 0) {
    return {
      cleanliness: 0,
      accuracy: 0,
      checkIn: 0,
      communication: 0,
      location: 0,
      value: 0,
    };
  }

  return {
    cleanliness: totals.cleanliness / count,
    accuracy: totals.accuracy / count,
    checkIn: totals.checkIn / count,
    communication: totals.communication / count,
    location: totals.location / count,
    value: totals.value / count,
  };
}
