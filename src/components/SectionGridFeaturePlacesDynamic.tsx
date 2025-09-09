import React, { FC, ReactNode } from "react";
import { eq, and, desc } from "drizzle-orm";
import { db, listings, users } from "@/lib/db/connection";
import { StayDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "./StayCard";
import StayCard2 from "./StayCard2";

// Fetch featured listings from database
async function getFeaturedListings(limit: number = 8): Promise<StayDataType[]> {
  try {
    const featuredListings = await db
      .select({
        // Listing fields
        id: listings.id,
        title: listings.title,
        address: listings.address,
        basePrice: listings.basePrice,
        currency: listings.currency,
        maxGuests: listings.maxGuests,
        bedrooms: listings.bedrooms,
        bathrooms: listings.bathrooms,
        featuredImage: listings.featuredImage,
        gallery: listings.gallery,
        category: listings.category,
        averageRating: listings.averageRating,
        totalReviews: listings.totalReviews,
        isFeatured: listings.isFeatured,
        views: listings.views,
        createdAt: listings.createdAt,
        
        // Host fields
        hostName: users.name,
        hostId: users.id,
        hostAvatar: users.avatar,
        hostIsVerified: users.isVerified,
      })
      .from(listings)
      .leftJoin(users, eq(listings.hostId, users.id))
      .where(and(
        eq(listings.isActive, true),
        eq(listings.listingType, 'stay')
      ))
      .orderBy(desc(listings.isFeatured), desc(listings.views), desc(listings.createdAt))
      .limit(limit);

    // Transform database data to StayDataType format
    return featuredListings.map((listing): StayDataType => ({
      id: listing.id,
      title: listing.title,
      href: `/listing/${listing.id}` as any, // Dynamic URL
      address: listing.address,
      price: `$${listing.basePrice}`,
      maxGuests: listing.maxGuests,
      bedrooms: listing.bedrooms || 0,
      bathrooms: listing.bathrooms || 0,
      featuredImage: listing.featuredImage || '',
      
      // Transform gallery from database JSON to expected format
      galleryImgs: listing.gallery && Array.isArray(listing.gallery) 
        ? listing.gallery.map(img => img.url)
        : [listing.featuredImage || ''],
      
      // Create listing category object
      listingCategory: {
        id: listing.category || 'stay',
        name: listing.category || 'Stay',
        href: `/category/${listing.category}` as any,
        taxonomy: 'category' as const,
        count: 0, // Could be calculated if needed
        thumbnail: listing.featuredImage || '',
        listingType: 'stay' as const,
      },
      
      // Author/Host information
      author: {
        id: listing.hostId || '',
        firstName: listing.hostName?.split(' ')[0] || '',
        lastName: listing.hostName?.split(' ').slice(1).join(' ') || '',
        displayName: listing.hostName || '',
        email: '', // Not exposed for privacy
        avatar: listing.hostAvatar || '',
        bgImage: '',
        count: 0,
        desc: '',
        href: `/host/${listing.hostId}` as any,
        jobName: 'Host',
      },
      
      // Review data
      reviewStart: listing.averageRating || 0,
      reviewCount: listing.totalReviews || 0,
      
      // Additional fields
      commentCount: listing.totalReviews || 0,
      viewdCount: listing.views || 0,
      date: listing.createdAt?.toISOString() || new Date().toISOString(),
      like: false, // Would need user context to determine
      saleOff: null, // Could be calculated from pricing rules
      isAds: listing.isFeatured || false,
      
      // Map coordinates (if available)
      map: {
        lat: 0, // Would need to add to query if coordinates are needed
        lng: 0,
      },
    }));

  } catch (error) {
    console.error('Error fetching featured listings:', error);
    return [];
  }
}

//
export interface SectionGridFeaturePlacesDynamicProps {
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: "card1" | "card2";
  limit?: number;
  showFeaturedOnly?: boolean;
}

const SectionGridFeaturePlacesDynamic: FC<SectionGridFeaturePlacesDynamicProps> = async ({
  gridClass = "",
  heading = "Featured places to stay",
  subHeading = "Popular places to stay that SmartWorld recommends for you",
  headingIsCenter,
  tabs = ["New York", "Tokyo", "Paris", "London"],
  cardType = "card2",
  limit = 8,
  showFeaturedOnly = false,
}) => {
  // Fetch real listings from database
  const stayListings = await getFeaturedListings(limit);

  const renderCard = (stay: StayDataType) => {
    let CardName = StayCard;
    switch (cardType) {
      case "card1":
        CardName = StayCard;
        break;
      case "card2":
        CardName = StayCard2;
        break;
      default:
        CardName = StayCard;
    }

    return <CardName key={stay.id} data={stay} />;
  };

  // If no listings found, show empty state
  if (stayListings.length === 0) {
    return (
      <div className="nc-SectionGridFeaturePlaces relative mt-0">
        <HeaderFilter
          tabActive={"New York"}
          subHeading={subHeading}
          tabs={tabs}
          heading={heading}
        />
        <div className="text-center py-16">
          <p className="text-neutral-500 dark:text-neutral-400">
            No featured listings available at the moment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="nc-SectionGridFeaturePlaces relative mt-0">
      <HeaderFilter
        tabActive={"New York"}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
        headingIsCenter={headingIsCenter}
      />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {stayListings.map((stay) => renderCard(stay))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary href="/listing-stay">Show me more</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridFeaturePlacesDynamic;
