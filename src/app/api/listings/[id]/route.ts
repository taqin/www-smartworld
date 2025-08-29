import { NextRequest, NextResponse } from 'next/server';

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

    // TODO: Replace with actual database query
    // Mock data that matches your listing detail page requirements
    const mockListing: ListingDetail = {
      listingId: id,
      listingType: 'stay',
      basic: {
        title: "Beach House in Collingwood",
        badge: "Wooden house",
        description: "Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities. Complimentary WiFi is provided.",
        extendedDescription: "There is a private bathroom with bidet in all units, along with a hairdryer and free toiletries. The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service and a car rental service are available at the accommodation, while cycling can be enjoyed nearby.",
        location: {
          address: "Tokyo, Japan",
          fullAddress: "San Diego, CA, United States of America (SAN-San Diego Intl.)",
          coordinates: { lat: 35.6762, lng: 139.6503 },
          mapEmbedUrl: "https://www.google.com/maps/embed/v1/place?key=AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY&q=Tokyo,Japan"
        },
        category: "Wooden house",
        isLiked: false,
        isSaved: false
      },
      media: {
        featuredImage: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg",
        gallery: [
          {
            id: 0,
            url: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg",
            alt: "Main bedroom view",
            caption: "Spacious master bedroom with ocean view"
          },
          {
            id: 1,
            url: "https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg",
            alt: "Living room",
            caption: "Comfortable living area"
          }
        ]
      },
      pricing: {
        basePrice: 119,
        currency: "USD",
        priceUnit: "night",
        rates: {
          weekdayRate: 199,
          weekendRate: 219,
          monthlyDiscountPercent: 8.34
        },
        fees: {
          serviceFee: 0,
          cleaningFee: 25,
          taxes: 15
        },
        minimumNights: 1,
        maximumNights: 90
      },
      accommodation: {
        maxGuests: 6,
        bedrooms: 2,
        beds: 6,
        bathrooms: 3,
        propertyType: "House",
        amenities: [
          { id: "wifi", name: "Free WiFi", icon: "la-wifi", category: "connectivity" },
          { id: "parking", name: "Free parking", icon: "la-car", category: "accessibility" },
          { id: "pool", name: "Swimming pool", icon: "la-swimming-pool", category: "recreation" },
          { id: "kitchen", name: "Kitchen", icon: "la-utensils", category: "cooking" },
          { id: "ac", name: "Air conditioning", icon: "la-snowflake", category: "climate" },
          { id: "tv", name: "TV", icon: "la-tv", category: "entertainment" }
        ],
        totalAmenities: 32
      },
      host: {
        id: "host-123",
        name: "Kevin Francis",
        firstName: "Kevin",
        lastName: "Francis",
        avatar: "https://example.com/avatar.jpg",
        isVerified: true,
        joinedDate: "March 2016",
        profileUrl: "/author",
        responseRate: 100,
        responseTime: "within a few hours",
        totalListings: 12,
        rating: 4.8,
        bio: "Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities..."
      },
      reviews: {
        totalReviews: 23,
        averageRating: 4.8,
        ratingBreakdown: { "5": 18, "4": 3, "3": 1, "2": 1, "1": 0 },
        reviewCategories: {
          cleanliness: 4.9,
          accuracy: 4.8,
          checkIn: 4.9,
          communication: 4.9,
          location: 4.8,
          value: 4.7
        },
        recentReviews: [
          {
            id: "review-1",
            guestName: "Sarah Johnson",
            rating: 5,
            date: "2024-01-15",
            comment: "Amazing stay! The house was exactly as described and Kevin was a wonderful host."
          }
        ]
      },
      availability: {
        calendar: {
          availableDates: ["2024-02-01", "2024-02-02", "2024-02-03"],
          blockedDates: ["2024-02-04", "2024-02-05"],
          minimumStay: 1,
          maximumStay: 90,
          checkInTime: "08:00 - 12:00",
          checkOutTime: "14:00 - 16:00"
        },
        instantBook: true
      },
      policies: {
        cancellation: {
          type: "flexible",
          description: "Refund 50% of the booking value when customers cancel the room within 48 hours after successful booking and 14 days before the check-in time."
        },
        houseRules: {
          checkIn: "08:00 am - 12:00 am",
          checkOut: "02:00 pm - 04:00 pm",
          specialRules: [
            "Ban and I will work together to keep the landscape and environment green and clean by not littering, not using stimulants and respecting people around.",
            "Do not sing karaoke past 11:30"
          ],
          smokingAllowed: false,
          petsAllowed: false,
          partiesAllowed: false
        }
      }
    };

    // In real implementation, check if listing exists
    if (!mockListing) {
      return NextResponse.json(
        { success: false, error: 'Listing not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: mockListing
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
