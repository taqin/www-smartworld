import { NextRequest, NextResponse } from 'next/server';

interface SearchRequest {
  query?: string;
  type?: 'stay' | 'experience' | 'car' | 'real-estate';
  location?: string;
  coordinates?: {
    lat: number;
    lng: number;
    radius?: number; // in km
  };
  dates?: {
    checkIn: string;
    checkOut: string;
  };
  guests?: {
    adults: number;
    children: number;
    infants: number;
  };
  filters?: {
    priceRange?: { min: number; max: number };
    amenities?: string[];
    propertyType?: string[];
    instantBook?: boolean;
    rating?: number;
    hostLanguages?: string[];
    accessibility?: string[];
  };
  sort?: 'price_low' | 'price_high' | 'rating' | 'distance' | 'newest' | 'popularity';
  page?: number;
  limit?: number;
}

interface SearchResponse {
  success: boolean;
  data: {
    listings: any[];
    suggestions?: string[];
    popularDestinations?: Array<{
      name: string;
      count: number;
      image: string;
    }>;
    filters: {
      priceRange: { min: number; max: number };
      amenities: Array<{ id: string; name: string; count: number }>;
      propertyTypes: Array<{ type: string; count: number }>;
      locations: Array<{ name: string; count: number }>;
    };
  };
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
  searchInfo: {
    query?: string;
    location?: string;
    resultsFor: string;
    searchTime: number; // milliseconds
  };
}

// POST /api/search - Advanced search with filters
export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    const body: SearchRequest = await request.json();
    
    // TODO: Implement actual search logic with database
    // This could use Elasticsearch, PostgreSQL full-text search, or similar
    
    // Mock search results
    const mockListings = [
      {
        id: "stay-1",
        title: "Beach House in Collingwood",
        type: "stay",
        featuredImage: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg",
        gallery: [
          "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg",
          "https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg"
        ],
        price: {
          amount: 119,
          currency: "USD",
          unit: "night"
        },
        location: {
          address: "Tokyo, Japan",
          coordinates: { lat: 35.6762, lng: 139.6503 },
          distance: body.coordinates ? calculateDistance(
            body.coordinates.lat, 
            body.coordinates.lng, 
            35.6762, 
            139.6503
          ) : null
        },
        rating: 4.8,
        reviewCount: 23,
        accommodation: {
          maxGuests: 6,
          bedrooms: 2,
          beds: 6,
          bathrooms: 3,
          propertyType: "House"
        },
        amenities: ["wifi", "parking", "pool", "kitchen", "ac", "tv"],
        availability: {
          available: true,
          instantBook: true,
          availableDates: ["2024-02-01", "2024-02-02", "2024-02-03"]
        },
        host: {
          id: "host-123",
          name: "Kevin Francis",
          isVerified: true,
          responseRate: 100,
          isSuperhost: true
        },
        policies: {
          cancellation: "flexible",
          checkInTime: "08:00 - 12:00",
          checkOutTime: "14:00 - 16:00"
        }
      },
      // Add more mock listings...
    ];

    // Apply search filters
    let filteredListings = mockListings;

    // Text search
    if (body.query) {
      const searchQuery = body.query.toLowerCase();
      filteredListings = filteredListings.filter(listing =>
        listing.title.toLowerCase().includes(searchQuery) ||
        listing.location.address.toLowerCase().includes(searchQuery) ||
        listing.accommodation.propertyType.toLowerCase().includes(searchQuery)
      );
    }

    // Type filter
    if (body.type) {
      filteredListings = filteredListings.filter(listing => listing.type === body.type);
    }

    // Location search
    if (body.location) {
      const locationQuery = body.location.toLowerCase();
      filteredListings = filteredListings.filter(listing =>
        listing.location.address.toLowerCase().includes(locationQuery)
      );
    }

    // Coordinate-based search (nearby)
    if (body.coordinates && body.coordinates.radius) {
      filteredListings = filteredListings.filter(listing => {
        const distance = calculateDistance(
          body.coordinates!.lat,
          body.coordinates!.lng,
          listing.location.coordinates.lat,
          listing.location.coordinates.lng
        );
        return distance <= (body.coordinates!.radius || 50);
      });
    }

    // Guest capacity filter
    if (body.guests) {
      const totalGuests = body.guests.adults + body.guests.children + body.guests.infants;
      filteredListings = filteredListings.filter(listing =>
        listing.accommodation.maxGuests >= totalGuests
      );
    }

    // Date availability filter
    if (body.dates) {
      filteredListings = filteredListings.filter(listing => {
        // Check if all requested dates are available
        const requestedDates = getDateRange(body.dates!.checkIn, body.dates!.checkOut);
        return requestedDates.every(date => 
          listing.availability.availableDates.includes(date)
        );
      });
    }

    // Price range filter
    if (body.filters?.priceRange) {
      filteredListings = filteredListings.filter(listing => {
        const price = listing.price.amount;
        const { min, max } = body.filters!.priceRange!;
        return (!min || price >= min) && (!max || price <= max);
      });
    }

    // Amenities filter
    if (body.filters?.amenities && body.filters.amenities.length > 0) {
      filteredListings = filteredListings.filter(listing =>
        body.filters!.amenities!.every(amenity =>
          listing.amenities.includes(amenity)
        )
      );
    }

    // Instant book filter
    if (body.filters?.instantBook) {
      filteredListings = filteredListings.filter(listing =>
        listing.availability.instantBook
      );
    }

    // Rating filter
    if (body.filters?.rating) {
      filteredListings = filteredListings.filter(listing =>
        listing.rating >= body.filters!.rating!
      );
    }

    // Sorting
    if (body.sort) {
      filteredListings = sortListings(filteredListings, body.sort);
    }

    // Pagination
    const page = body.page || 1;
    const limit = body.limit || 20;
    const startIndex = (page - 1) * limit;
    const paginatedListings = filteredListings.slice(startIndex, startIndex + limit);

    const searchTime = Date.now() - startTime;

    const response: SearchResponse = {
      success: true,
      data: {
        listings: paginatedListings,
        suggestions: body.query ? generateSearchSuggestions(body.query) : undefined,
        popularDestinations: [
          { name: "Tokyo", count: 150, image: "https://example.com/tokyo.jpg" },
          { name: "Kyoto", count: 89, image: "https://example.com/kyoto.jpg" },
          { name: "Osaka", count: 67, image: "https://example.com/osaka.jpg" }
        ],
        filters: {
          priceRange: { min: 50, max: 500 },
          amenities: [
            { id: "wifi", name: "WiFi", count: 245 },
            { id: "parking", name: "Parking", count: 189 },
            { id: "pool", name: "Pool", count: 78 },
            { id: "kitchen", name: "Kitchen", count: 156 }
          ],
          propertyTypes: [
            { type: "House", count: 89 },
            { type: "Apartment", count: 156 },
            { type: "Villa", count: 34 }
          ],
          locations: [
            { name: "Tokyo", count: 150 },
            { name: "Kyoto", count: 89 },
            { name: "Osaka", count: 67 }
          ]
        }
      },
      pagination: {
        page,
        limit,
        total: filteredListings.length,
        pages: Math.ceil(filteredListings.length / limit)
      },
      searchInfo: {
        query: body.query,
        location: body.location,
        resultsFor: body.query || body.location || "All listings",
        searchTime
      }
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Error performing search:', error);
    return NextResponse.json(
      { success: false, error: 'Search failed' },
      { status: 500 }
    );
  }
}

// Helper functions
function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function getDateRange(startDate: string, endDate: string): string[] {
  const dates = [];
  const currentDate = new Date(startDate);
  const lastDate = new Date(endDate);
  
  while (currentDate < lastDate) {
    dates.push(currentDate.toISOString().split('T')[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return dates;
}

function sortListings(listings: any[], sortBy: string): any[] {
  switch (sortBy) {
    case 'price_low':
      return listings.sort((a, b) => a.price.amount - b.price.amount);
    case 'price_high':
      return listings.sort((a, b) => b.price.amount - a.price.amount);
    case 'rating':
      return listings.sort((a, b) => b.rating - a.rating);
    case 'distance':
      return listings.sort((a, b) => (a.location.distance || 0) - (b.location.distance || 0));
    default:
      return listings;
  }
}

function generateSearchSuggestions(query: string): string[] {
  // TODO: Implement smart search suggestions based on popular searches, locations, etc.
  return [
    `${query} apartments`,
    `${query} houses`,
    `${query} with pool`,
    `${query} city center`
  ];
}
