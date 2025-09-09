import { NextRequest, NextResponse } from 'next/server';
import { eq, and, gte, lte, ilike, desc } from 'drizzle-orm';
import { db, listings, users } from '@/lib/db/connection';

// Types (can be moved to shared types file)
interface ListingQuery {
  type?: 'stay' | 'experience' | 'car' | 'real_estate';
  location?: string;
  guests?: number;
  dateFrom?: string;
  dateTo?: string;
  priceMin?: number;
  priceMax?: number;
  amenities?: string[];
  page?: number;
  limit?: number;
  featured?: boolean;
}

interface ListingResponse {
  success: boolean;
  data: any[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
    hasMore?: boolean;
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
      featured: searchParams.get('featured') === 'true',
    };

    // Build database query with filters
    const conditions = [eq(listings.isActive, true)];

    // Apply filters
    if (query.type) {
      conditions.push(eq(listings.listingType, query.type));
    }

    if (query.location) {
      conditions.push(ilike(listings.address, `%${query.location}%`));
    }

    if (query.guests) {
      conditions.push(gte(listings.maxGuests, query.guests));
    }

    if (query.priceMin) {
      conditions.push(gte(listings.basePrice, query.priceMin.toString()));
    }

    if (query.priceMax) {
      conditions.push(lte(listings.basePrice, query.priceMax.toString()));
    }

    if (query.featured) {
      conditions.push(eq(listings.isFeatured, true));
    }

    // Fetch listings from database
    const dbListings = await db
      .select({
        // Listing fields
        id: listings.id,
        title: listings.title,
        listingType: listings.listingType,
        featuredImage: listings.featuredImage,
        gallery: listings.gallery,
        basePrice: listings.basePrice,
        currency: listings.currency,
        address: listings.address,
        fullAddress: listings.fullAddress,
        latitude: listings.latitude,
        longitude: listings.longitude,
        maxGuests: listings.maxGuests,
        bedrooms: listings.bedrooms,
        bathrooms: listings.bathrooms,
        amenities: listings.amenities,
        averageRating: listings.averageRating,
        totalReviews: listings.totalReviews,
        instantBook: listings.instantBook,
        isFeatured: listings.isFeatured,
        views: listings.views,
        createdAt: listings.createdAt,
        
        // Host fields
        hostId: users.id,
        hostName: users.name,
        hostAvatar: users.avatar,
        hostIsVerified: users.isVerified,
      })
      .from(listings)
      .leftJoin(users, eq(listings.hostId, users.id))
      .where(and(...conditions))
      .orderBy(
        query.featured ? desc(listings.isFeatured) : desc(listings.createdAt),
        desc(listings.views)
      )
      .limit((query.limit || 20) + 1) // +1 to check if there are more results
      .offset(((query.page || 1) - 1) * (query.limit || 20));

    // Transform database results to API format
    const transformedListings = dbListings.slice(0, query.limit || 20).map(listing => ({
      id: listing.id,
      title: listing.title,
      type: listing.listingType,
      featuredImage: listing.featuredImage || '',
      gallery: listing.gallery || [],
      price: {
        amount: parseFloat(listing.basePrice),
        currency: listing.currency,
        unit: 'night'
      },
      location: {
        address: listing.address,
        fullAddress: listing.fullAddress || listing.address,
        coordinates: {
          lat: listing.latitude || 0,
          lng: listing.longitude || 0
        }
      },
      rating: listing.averageRating || 0,
      reviewCount: listing.totalReviews || 0,
      maxGuests: listing.maxGuests,
      bedrooms: listing.bedrooms || 0,
      bathrooms: listing.bathrooms || 0,
      amenities: listing.amenities || [],
      availability: {
        available: true, // Would need availability table query
        instantBook: listing.instantBook || false
      },
      host: {
        id: listing.hostId || '',
        name: listing.hostName || '',
        avatar: listing.hostAvatar || '',
        isVerified: listing.hostIsVerified || false
      },
      isFeatured: listing.isFeatured || false,
      views: listing.views || 0,
      createdAt: listing.createdAt?.toISOString() || ''
    }));

    // Pagination info
    const page = query.page || 1;
    const limit = query.limit || 20;
    const hasMore = dbListings.length > limit;
    const total = transformedListings.length; // This is approximate, would need COUNT query for exact

    const response: ListingResponse = {
      success: true,
      data: transformedListings,
      pagination: {
        page,
        limit,
        total: total,
        pages: Math.ceil(total / limit),
        hasMore: hasMore
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
