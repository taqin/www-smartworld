import { NextRequest, NextResponse } from 'next/server';

// Types (can be moved to shared types file)
interface ListingQuery {
  type?: 'stay' | 'experience' | 'car' | 'real-estate';
  location?: string;
  guests?: number;
  dateFrom?: string;
  dateTo?: string;
  priceMin?: number;
  priceMax?: number;
  amenities?: string[];
  page?: number;
  limit?: number;
}

interface ListingResponse {
  success: boolean;
  data: any[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
  filters?: {
    locations: string[];
    priceRange: { min: number; max: number };
    amenities: string[];
  };
}

// GET /api/listings - Search and filter listings
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const query: ListingQuery = {
      type: searchParams.get('type') as any || undefined,
      location: searchParams.get('location') || undefined,
      guests: searchParams.get('guests') ? parseInt(searchParams.get('guests')!) : undefined,
      dateFrom: searchParams.get('dateFrom') || undefined,
      dateTo: searchParams.get('dateTo') || undefined,
      priceMin: searchParams.get('priceMin') ? parseInt(searchParams.get('priceMin')!) : undefined,
      priceMax: searchParams.get('priceMax') ? parseInt(searchParams.get('priceMax')!) : undefined,
      amenities: searchParams.get('amenities')?.split(',') || [],
      page: searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1,
      limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 20,
    };

    // TODO: Replace with actual database query
    // This is mock data matching your existing structure
    const mockListings = [
      {
        id: "stay-1",
        title: "Beach House in Collingwood",
        type: "stay",
        featuredImage: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg",
        price: 119,
        location: {
          address: "Tokyo, Japan",
          coordinates: { lat: 35.6762, lng: 139.6503 }
        },
        rating: 4.8,
        reviewCount: 23,
        maxGuests: 6,
        bedrooms: 2,
        bathrooms: 3,
        amenities: ["wifi", "parking", "pool", "kitchen"],
        availability: {
          available: true,
          instantBook: true
        },
        host: {
          id: "host-123",
          name: "Kevin Francis",
          isVerified: true
        }
      }
      // Add more mock data...
    ];

    // Apply filters (in real implementation, this would be SQL/MongoDB queries)
    let filteredListings = mockListings;

    if (query.type) {
      filteredListings = filteredListings.filter(listing => listing.type === query.type);
    }

    if (query.location) {
      filteredListings = filteredListings.filter(listing => 
        listing.location.address.toLowerCase().includes(query.location!.toLowerCase())
      );
    }

    if (query.guests) {
      filteredListings = filteredListings.filter(listing => 
        listing.maxGuests >= query.guests!
      );
    }

    if (query.priceMin || query.priceMax) {
      filteredListings = filteredListings.filter(listing => {
        if (query.priceMin && listing.price < query.priceMin) return false;
        if (query.priceMax && listing.price > query.priceMax) return false;
        return true;
      });
    }

    // Pagination
    const page = query.page || 1;
    const limit = query.limit || 20;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedListings = filteredListings.slice(startIndex, endIndex);

    const response: ListingResponse = {
      success: true,
      data: paginatedListings,
      pagination: {
        page,
        limit,
        total: filteredListings.length,
        pages: Math.ceil(filteredListings.length / limit)
      },
      filters: {
        locations: ["Tokyo, Japan", "Kyoto, Japan", "Osaka, Japan"],
        priceRange: { min: 50, max: 500 },
        amenities: ["wifi", "parking", "pool", "kitchen", "ac", "tv"]
      }
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Error fetching listings:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch listings' },
      { status: 500 }
    );
  }
}

// POST /api/listings - Create new listing (for hosts)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // TODO: Add authentication middleware
    // TODO: Validate request body
    // TODO: Save to database
    
    const newListing = {
      id: `listing-${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
      status: 'pending_review'
    };

    return NextResponse.json({
      success: true,
      data: newListing,
      message: 'Listing created successfully'
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating listing:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create listing' },
      { status: 500 }
    );
  }
}
