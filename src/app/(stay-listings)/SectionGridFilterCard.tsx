"use client";

import React, { FC, useEffect, useState } from "react";
import { StayDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import StayCard2 from "@/components/StayCard2";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: StayDataType[];
}

interface Listing {
  id: string;
  url: string;
  title: string;
  type: string;
  featuredImage: string;
  gallery: any[];
  price: {
    amount: number;
    currency: string;
    unit: string;
  };
  location: {
    address: string;
    fullAddress: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  rating: number;
  reviewCount: number;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: any[];
  availability: {
    available: boolean;
    instantBook: boolean;
  };
  host: {
    id: string;
    name: string;
    avatar: string;
    isVerified: boolean;
  };
  isFeatured: boolean;
  views: number;
  createdAt: string;
}

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
}) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('/api/listings?type=stay&limit=12');
        const data = await response.json();
        
        if (data.success) {
          setListings(data.data);
        }
      } catch (error) {
        console.error('Error fetching listings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  // Transform API data to StayDataType format for StayCard2
  const transformedListings = listings.map(listing => ({
    id: listing.id,
    author: {
      id: listing.host.id,
      firstName: listing.host.name.split(' ')[0],
      lastName: listing.host.name.split(' ')[1] || '',
      displayName: listing.host.name,
      avatar: listing.host.avatar,
      count: 1,
      desc: 'Host',
      jobName: 'Host',
      href: `/author/${listing.host.id}`,
      starRating: listing.rating,
    },
    date: listing.createdAt,
    href: `/listing/slug/${listing.url}`,
    title: listing.title,
    featuredImage: listing.featuredImage,
    commentCount: listing.reviewCount,
    viewCount: listing.views,
    address: listing.location.address,
    reviewStart: listing.rating,
    reviewCount: listing.reviewCount,
    like: false,
    galleryImgs: listing.gallery.map((img: any) => img.url),
    price: `$${listing.price.amount}`,
    listingCategory: {
      id: listing.type,
      name: listing.type,
      href: `/listing-stay?type=${listing.type}`,
      count: 1,
      taxonomy: 'category' as const,
      listingType: 'stay' as const,
    },
    maxGuests: listing.maxGuests,
    bedrooms: listing.bedrooms,
    bathrooms: listing.bathrooms,
    saleOff: listing.isFeatured ? "-15% Featured" : undefined,
    isAds: false,
    map: {
      lat: listing.location.coordinates.lat,
      lng: listing.location.coordinates.lng,
    },
  }));

  if (loading) {
    return (
      <div className={`nc-SectionGridFilterCard ${className}`}>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading listings...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <Heading2 />

      <div className="mb-8 lg:mb-11">
        <TabFilters />
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {transformedListings.map((stay) => (
          <StayCard2 key={stay.id} data={stay} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
