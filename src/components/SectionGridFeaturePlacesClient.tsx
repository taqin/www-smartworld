"use client";

import React, { FC, ReactNode, useEffect, useState } from "react";
import { StayDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "./StayCard";
import StayCard2 from "./StayCard2";

// API client for fetching listings
async function fetchFeaturedListings(limit: number = 8): Promise<StayDataType[]> {
  try {
    const response = await fetch(`/api/listings?limit=${limit}&featured=true`);
    if (!response.ok) {
      throw new Error('Failed to fetch listings');
    }
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'Failed to fetch listings');
    }

    // Transform API response to StayDataType format
    return data.data.map((listing: any): StayDataType => ({
      id: listing.id,
      title: listing.title,
      href: `/listing/${listing.id}` as any,
      address: listing.location?.address || listing.address,
      price: `$${listing.price?.amount || listing.basePrice}`,
      maxGuests: listing.accommodation?.maxGuests || listing.maxGuests,
      bedrooms: listing.accommodation?.bedrooms || listing.bedrooms || 0,
      bathrooms: listing.accommodation?.bathrooms || listing.bathrooms || 0,
      featuredImage: listing.media?.featuredImage || listing.featuredImage || '',
      
      // Transform gallery
      galleryImgs: listing.media?.gallery?.map((img: any) => img.url) || 
                   (listing.gallery && Array.isArray(listing.gallery) 
                     ? listing.gallery.map((img: any) => img.url || img)
                     : [listing.featuredImage || '']),
      
      // Create listing category object
      listingCategory: {
        id: listing.basic?.category || listing.category || 'stay',
        name: listing.basic?.category || listing.category || 'Stay',
        href: `/category/${listing.basic?.category || listing.category}` as any,
        taxonomy: 'category' as const,
        count: 0,
        thumbnail: listing.media?.featuredImage || listing.featuredImage || '',
        listingType: 'stay' as const,
      },
      
      // Author/Host information
      author: {
        id: listing.host?.id || listing.hostId || '',
        firstName: listing.host?.firstName || listing.host?.name?.split(' ')[0] || '',
        lastName: listing.host?.lastName || listing.host?.name?.split(' ').slice(1).join(' ') || '',
        displayName: listing.host?.name || listing.hostName || '',
        email: '',
        avatar: listing.host?.avatar || listing.hostAvatar || '',
        bgImage: '',
        count: 0,
        desc: '',
        href: `/host/${listing.host?.id || listing.hostId}` as any,
        jobName: 'Host',
      },
      
      // Review data
      reviewStart: listing.reviews?.averageRating || listing.averageRating || 0,
      reviewCount: listing.reviews?.totalReviews || listing.totalReviews || 0,
      
      // Additional fields
      commentCount: listing.reviews?.totalReviews || listing.totalReviews || 0,
      viewdCount: listing.additionalInfo?.views || listing.views || 0,
      date: listing.additionalInfo?.createdDate || listing.createdAt || new Date().toISOString(),
      like: false,
      saleOff: null,
      isAds: listing.additionalInfo?.featured || listing.isFeatured || false,
      
      // Map coordinates
      map: {
        lat: listing.basic?.location?.coordinates?.lat || 0,
        lng: listing.basic?.location?.coordinates?.lng || 0,
      },
    }));

  } catch (error) {
    console.error('Error fetching featured listings:', error);
    return [];
  }
}

export interface SectionGridFeaturePlacesClientProps {
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: "card1" | "card2";
  limit?: number;
  showFeaturedOnly?: boolean;
}

const SectionGridFeaturePlacesClient: FC<SectionGridFeaturePlacesClientProps> = ({
  gridClass = "",
  heading = "Featured places to stay",
  subHeading = "Popular places to stay that SmartWorld recommends for you",
  headingIsCenter,
  tabs = ["New York", "Tokyo", "Paris", "London"],
  cardType = "card2",
  limit = 8,
  showFeaturedOnly = false,
}) => {
  const [stayListings, setStayListings] = useState<StayDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadListings = async () => {
      try {
        setLoading(true);
        setError(null);
        const listings = await fetchFeaturedListings(limit);
        setStayListings(listings);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load listings');
      } finally {
        setLoading(false);
      }
    };

    loadListings();
  }, [limit]);

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

  const renderContent = () => {
    if (loading) {
      return (
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Loading skeleton */}
          {[...Array(limit)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-300 dark:bg-gray-700 aspect-w-4 aspect-h-3 rounded-2xl mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-16">
          <p className="text-red-500 dark:text-red-400 mb-4">
            {error}
          </p>
          <ButtonPrimary 
            onClick={() => window.location.reload()}
            className="inline-flex"
          >
            Try Again
          </ButtonPrimary>
        </div>
      );
    }

    if (stayListings.length === 0) {
      return (
        <div className="text-center py-16">
          <p className="text-neutral-500 dark:text-neutral-400">
            No featured listings available at the moment.
          </p>
        </div>
      );
    }

    return (
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {stayListings.map((stay) => renderCard(stay))}
      </div>
    );
  };

  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <HeaderFilter
        tabActive={"New York"}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
        headingIsCenter={headingIsCenter}
      />
      
      {renderContent()}
      
      {!loading && !error && stayListings.length > 0 && (
        <div className="flex mt-16 justify-center items-center">
          <ButtonPrimary href="/listing-stay">Show me more</ButtonPrimary>
        </div>
      )}
    </div>
  );
};

export default SectionGridFeaturePlacesClient;
