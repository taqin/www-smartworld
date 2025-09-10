"use client";

import React, { FC, Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowRightIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import CommentListing from "@/components/CommentListing";
import FiveStartIconForRate from "@/components/FiveStartIconForRate";
import StartRating from "@/components/StartRating";
import Avatar from "@/shared/Avatar";
import Badge from "@/shared/Badge";
import ButtonCircle from "@/shared/ButtonCircle";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import ButtonClose from "@/shared/ButtonClose";
import Input from "@/shared/Input";
import LikeSaveBtns from "@/components/LikeSaveBtns";
import BookingForm from "@/components/BookingForm";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import StayDatesRangeInput from "../StayDatesRangeInput";
import GuestsInput from "../GuestsInput";
import SectionDateRange from "../../SectionDateRange";
import { Route } from "next";

interface ListingData {
  listingId: string;
  listingType: string;
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
    totalCalculation: {
      subtotal: number;
      serviceFee: number;
      total: number;
      breakdown: string;
    };
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
    languages: string[];
    isIdentityVerified: boolean;
    isSuperhost: boolean;
  };
  reviews: {
    totalReviews: number;
    averageRating: number;
    ratingBreakdown: Record<string, number>;
    reviewCategories: Record<string, number>;
    recentReviews: Array<{
      id: string;
      guestName: string;
      guestAvatar: string;
      rating: number;
      date: string;
      comment: string;
    }>;
    canReview: boolean;
    userReview: any;
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
    advanceBooking: number;
    preparationTime: number;
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
      additionalRules: string[];
    };
    safetyFeatures: string[];
  };
  booking: {
    availableForBooking: boolean;
    instantBookable: boolean;
    requiresApproval: boolean;
    bookingUrl: string;
    contactHost: string;
    guestRequirements: {
      governmentId: boolean;
      confirmEmail: boolean;
      confirmPhone: boolean;
    };
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl: string;
    ogImage: string;
  };
  additionalInfo: {
    lastUpdated: string;
    createdDate: string;
    status: string;
    featured: boolean;
    trending: boolean;
    newListing: boolean;
    views: number;
    saves: number;
    shares: number;
  };
}

export interface ListingStayDetailClientProps {
  listingData: ListingData;
}

const ListingStayDetailClient: FC<ListingStayDetailClientProps> = ({ listingData }) => {
  let [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false);

  const thisPathname = usePathname();
  const router = useRouter();

  // Booking form state - moved to component level
  const [selectedDates, setSelectedDates] = useState<{startDate: Date | null, endDate: Date | null}>({
    startDate: null,
    endDate: null
  });
  const [selectedGuests, setSelectedGuests] = useState({
    guestAdults: 2,
    guestChildren: 0,
    guestInfants: 0
  });
  const [pricing, setPricing] = useState<{
    nights: number;
    subtotal: number;
    serviceFee: number;
    cleaningFee: number;
    taxes: number;
    total: number;
    breakdown: string;
  } | null>(null);
  const [pricingLoading, setPricingLoading] = useState(false);

  function closeModalAmenities() {
    setIsOpenModalAmenities(false);
  }

  // Function to calculate pricing
  const calculatePricing = async (startDate: Date | null, endDate: Date | null, guests: { guestAdults: number; guestChildren: number; guestInfants: number }) => {
    if (!startDate || !endDate) {
      setPricing(null);
      return;
    }

    setPricingLoading(true);
    try {
      const totalGuests = guests.guestAdults + guests.guestChildren + guests.guestInfants;
      const checkIn = startDate.toISOString().split('T')[0];
      const checkOut = endDate.toISOString().split('T')[0];
      
      const response = await fetch(
        `/api/listings/${listingData.listingId}/pricing?checkIn=${checkIn}&checkOut=${checkOut}&guests=${totalGuests}`
      );

      const result = await response.json();
      
      if (result.success) {
        setPricing(result.data);
      } else {
        console.error('Pricing calculation failed:', result.error);
        setPricing(null);
      }
    } catch (err) {
      console.error('Error calculating pricing:', err);
      setPricing(null);
    } finally {
      setPricingLoading(false);
    }
  };

  // Effect to recalculate pricing when dates or guests change
  useEffect(() => {
    calculatePricing(selectedDates.startDate, selectedDates.endDate, selectedGuests);
  }, [selectedDates.startDate, selectedDates.endDate, selectedGuests, listingData.listingId]);

  // Handlers for form input changes
  const handleDatesChange = (dates: { startDate: Date | null; endDate: Date | null }) => {
    setSelectedDates(dates);
  };

  const handleGuestsChange = (guests: { guestAdults: number; guestChildren: number; guestInfants: number }) => {
    setSelectedGuests(guests);
  };

  function openModalAmenities() {
    setIsOpenModalAmenities(true);
  }

  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route);
  };

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        {/* 1 */}
        <div className="flex justify-between items-center">
          <Badge name={listingData.basic.badge} />
          <LikeSaveBtns />
        </div>

        {/* 2 */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {listingData.basic.title}
        </h2>

        {/* 3 */}
        <div className="flex items-center space-x-4">
          <StartRating />
          <span>·</span>
          <span>
            <i className="las la-map-marker-alt"></i>
            <span className="ml-1">{listingData.basic.location.address}</span>
          </span>
        </div>

        {/* 4 */}
        <div className="flex items-center">
          <Avatar 
            hasChecked={listingData.host.isVerified} 
            sizeClass="h-10 w-10" 
            radius="rounded-full"
            imgUrl={listingData.host.avatar}
          />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
            Hosted by{" "}
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              {listingData.host.name}
            </span>
          </span>
        </div>

        {/* 5 */}
        <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

        {/* 6 */}
        <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex items-center space-x-3 ">
            <i className=" las la-user text-2xl "></i>
            <span className="">
              {listingData.accommodation.maxGuests} <span className="hidden sm:inline-block">guests</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bed text-2xl"></i>
            <span className=" ">
              {listingData.accommodation.beds} <span className="hidden sm:inline-block">beds</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bath text-2xl"></i>
            <span className=" ">
              {listingData.accommodation.bathrooms} <span className="hidden sm:inline-block">baths</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-door-open text-2xl"></i>
            <span className=" ">
              {listingData.accommodation.bedrooms} <span className="hidden sm:inline-block">bedrooms</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">Stay information</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="text-neutral-6000 dark:text-neutral-300">
          <span>{listingData.basic.description}</span>
          {listingData.basic.extendedDescription && (
            <>
              <br /><br />
              <span>{listingData.basic.extendedDescription}</span>
            </>
          )}
        </div>
      </div>
    );
  };

  const renderSection3 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Amenities </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {`About the property's amenities and services`}
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* 6 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
          {listingData.accommodation.amenities.slice(0, 12).map((item) => (
            <div key={item.id} className="flex items-center space-x-3">
              <i className={`text-3xl las ${item.icon}`}></i>
              <span className=" ">{item.name}</span>
            </div>
          ))}
        </div>

        {/* ----- */}
        {listingData.accommodation.amenities.length > 12 && (
          <>
            <div className="w-14 border-b border-neutral-200"></div>
            <div>
              <ButtonSecondary onClick={openModalAmenities}>
                View more {listingData.accommodation.amenities.length - 12} amenities
              </ButtonSecondary>
            </div>
          </>
        )}
        {renderMotalAmenities()}
      </div>
    );
  };

  const renderMotalAmenities = () => {
    return (
      <Transition appear show={isOpenModalAmenities} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModalAmenities}
        >
          <div className="min-h-screen px-4 text-center">
            <div className="fixed inset-0 bg-black bg-opacity-40" />

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div>
              <div className="inline-block py-8 h-screen w-full max-w-4xl">
                <div className="inline-flex pb-2 flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="headlessui-dialog-title-70"
                    >
                      Amenities
                    </h3>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalAmenities} />
                    </span>
                  </div>
                  <div className="px-8 overflow-auto text-neutral-700 dark:text-neutral-300 divide-y divide-neutral-200">
                    {listingData.accommodation.amenities.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center py-2.5 sm:py-4 lg:py-5 space-x-5 lg:space-x-8"
                      >
                        <i
                          className={`text-4xl text-neutral-6000 las ${item.icon}`}
                        ></i>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  };

  const renderSection4 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Room Rates </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Prices may increase on weekends or holidays
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* CONTENT */}
        <div className="flow-root">
          <div className="text-sm sm:text-base text-neutral-6000 dark:text-neutral-300 -mb-4">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex justify-between items-center space-x-4 rounded-lg">
              <span>Weekday Rate</span>
              <span>RM{listingData.pricing.rates.weekdayRate}</span>
            </div>
            <div className="p-4 flex justify-between items-center space-x-4 rounded-lg">
              <span>Weekend Rate</span>
              <span>RM{listingData.pricing.rates.weekendRate}</span>
            </div>
            {listingData.pricing.rates.monthlyDiscountPercent > 0 && (
              <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex justify-between items-center space-x-4 rounded-lg">
                <span>Monthly Discount</span>
                <span>-{listingData.pricing.rates.monthlyDiscountPercent}%</span>
              </div>
            )}
            <div className="p-4 flex justify-between items-center space-x-4 rounded-lg">
              <span>Minimum nights</span>
              <span>{listingData.pricing.minimumNights} night{listingData.pricing.minimumNights > 1 ? 's' : ''}</span>
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex justify-between items-center space-x-4 rounded-lg">
              <span>Maximum nights</span>
              <span>{listingData.pricing.maximumNights} nights</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSection5 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Host Information</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* host */}
        <div className="flex items-center space-x-4">
          <Avatar
            hasChecked={listingData.host.isVerified}
            hasCheckedClass="w-4 h-4 -top-0.5 right-0.5"
            sizeClass="h-14 w-14"
            radius="rounded-full"
            imgUrl={listingData.host.avatar}
          />
          <div>
            <a className="block text-xl font-medium" href={listingData.host.profileUrl}>
              {listingData.host.name}
            </a>
            <div className="mt-1.5 flex items-center text-sm text-neutral-500 dark:text-neutral-400">
              <StartRating />
              <span className="mx-2">·</span>
              <span>{listingData.host.totalListings} places</span>
            </div>
          </div>
        </div>

        {/* desc */}
        <span className="block text-neutral-6000 dark:text-neutral-300">
          {listingData.host.bio}
        </span>

        {/* info */}
        <div className="block text-neutral-500 dark:text-neutral-400 space-y-2.5">
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Joined in {listingData.host.joinedDate}</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span>Response rate - {listingData.host.responseRate}%</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Fast response - {listingData.host.responseTime}</span>
          </div>
        </div>

        {/* == */}
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div>
          <ButtonSecondary href={listingData.host.profileUrl}>See host profile</ButtonSecondary>
        </div>
      </div>
    );
  };

  const renderSection6 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Reviews ({listingData.reviews.totalReviews} reviews)</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* Content */}
        <div className="space-y-5">
          <FiveStartIconForRate iconClass="w-6 h-6" className="space-x-0.5" />
          <div className="relative">
            <Input
              fontClass=""
              sizeClass="h-16 px-4 py-3"
              rounded="rounded-3xl"
              placeholder="Share your thoughts ..."
            />
            <ButtonCircle
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              size=" w-12 h-12 "
            >
              <ArrowRightIcon className="w-5 h-5" />
            </ButtonCircle>
          </div>
        </div>

        {/* Recent reviews */}
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          {listingData.reviews.recentReviews.map((review, index) => (
            <div key={review.id} className="py-8">
              <div className="flex items-center space-x-4">
                <Avatar 
                  sizeClass="h-10 w-10" 
                  radius="rounded-full"
                  imgUrl={review.guestAvatar}
                />
                <div>
                  <div className="text-sm font-medium">{review.guestName}</div>
                  <div className="text-xs text-neutral-500">{review.date}</div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                {review.comment}
              </p>
            </div>
          ))}
          {listingData.reviews.totalReviews > listingData.reviews.recentReviews.length && (
            <div className="pt-8">
              <ButtonSecondary>
                View more {listingData.reviews.totalReviews - listingData.reviews.recentReviews.length} reviews
              </ButtonSecondary>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderSection7 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Location</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {listingData.basic.location.fullAddress}
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* MAP */}
        <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3 ring-1 ring-black/10 rounded-xl z-0">
          <div className="rounded-xl overflow-hidden z-0">
            {listingData.basic.location.mapEmbedUrl ? (
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={listingData.basic.location.mapEmbedUrl}
              ></iframe>
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-200 dark:bg-gray-700">
                <span className="text-gray-500">Map not available</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderSection8 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Things to know</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Cancellation policy</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            {listingData.policies.cancellation.description}
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Check-in time</h4>
          <div className="mt-3 text-neutral-500 dark:text-neutral-400 max-w-md text-sm sm:text-base">
            <div className="flex space-x-10 justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span>Check-in</span>
              <span>{listingData.policies.houseRules.checkIn}</span>
            </div>
            <div className="flex space-x-10 justify-between p-3">
              <span>Check-out</span>
              <span>{listingData.policies.houseRules.checkOut}</span>
            </div>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        {listingData.policies.houseRules.specialRules.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold">House Rules</h4>
            <div className="prose sm:prose">
              <ul className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2">
                {listingData.policies.houseRules.specialRules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderSidebar = () => {
    const handleBookingClick = () => {
      // Validate that dates are selected
      if (!selectedDates.startDate || !selectedDates.endDate) {
        alert('Please select check-in and check-out dates');
        return;
      }

      // Prepare booking data to pass to the booking page using actual form values
      const bookingData = {
        listingId: listingData.listingId,
        listingTitle: listingData.basic.title,
        listingImage: listingData.media.featuredImage,
        listingAddress: listingData.basic.location.address,
        checkIn: selectedDates.startDate.toISOString().split('T')[0],
        checkOut: selectedDates.endDate.toISOString().split('T')[0],
        guests: selectedGuests,
        basePrice: listingData.pricing.basePrice,
        currency: listingData.pricing.currency,
        priceUnit: listingData.pricing.priceUnit,
        instantBook: listingData.availability.instantBook,
        hostName: listingData.host.name,
        hostId: listingData.host.id
      };

      // Encode booking data and navigate to booking page
      const encodedData = encodeURIComponent(JSON.stringify(bookingData));
      window.location.href = `/booking?data=${encodedData}`;
    };

    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('en-MY', {
        style: 'currency',
        currency: 'MYR',
      }).format(amount);
    };

    return (
      <div className="listingSectionSidebar__wrap shadow-xl">
        {/* PRICE */}
        <div className="flex justify-between">
          <span className="text-3xl font-semibold">
            RM{listingData.pricing.basePrice}
            <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
              /{listingData.pricing.priceUnit}
            </span>
          </span>
          <StartRating />
        </div>

        {/* FORM */}
        <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl ">
          <StayDatesRangeInput 
            className="flex-1 z-[11]" 
            onChange={handleDatesChange}
            defaultStartDate={selectedDates.startDate}
            defaultEndDate={selectedDates.endDate}
          />
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          <GuestsInput 
            className="flex-1" 
            onChange={handleGuestsChange}
            defaultAdults={selectedGuests.guestAdults}
            defaultChildren={selectedGuests.guestChildren}
            defaultInfants={selectedGuests.guestInfants}
          />
        </form>

        {/* SUM */}
        <div className="flex flex-col space-y-4">
          {pricingLoading ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600 mx-auto"></div>
              <p className="text-sm text-neutral-500 mt-2">Calculating pricing...</p>
            </div>
          ) : pricing ? (
            <>
              <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                <span>{pricing.breakdown}</span>
                <span>{formatCurrency(pricing.subtotal)}</span>
              </div>
              {pricing.serviceFee > 0 && (
                <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                  <span>Service charge</span>
                  <span>{formatCurrency(pricing.serviceFee)}</span>
                </div>
              )}
              {pricing.cleaningFee > 0 && (
                <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                  <span>Cleaning fee</span>
                  <span>{formatCurrency(pricing.cleaningFee)}</span>
                </div>
              )}
              {pricing.taxes > 0 && (
                <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                  <span>Taxes</span>
                  <span>{formatCurrency(pricing.taxes)}</span>
                </div>
              )}
              <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatCurrency(pricing.total)}</span>
              </div>
            </>
          ) : selectedDates.startDate && selectedDates.endDate ? (
            <div className="text-center py-4">
              <p className="text-sm text-neutral-500">Unable to calculate pricing</p>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                <span>Select dates to see pricing</span>
                <span>--</span>
              </div>
              <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                <span>Service charge</span>
                <span>--</span>
              </div>
              <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>--</span>
              </div>
            </div>
          )}
        </div>

        {/* SUBMIT */}
        <ButtonPrimary 
          className="w-full"
          onClick={handleBookingClick}
          disabled={!selectedDates.startDate || !selectedDates.endDate || pricingLoading}
        >
          {listingData.availability.instantBook ? "Reserve" : "Request to Book"}
        </ButtonPrimary>
      </div>
    );
  };

  return (
    <div className="nc-ListingStayDetailPage mt-10">
      {/*  HEADER */}
      <header className="rounded-md sm:rounded-xl">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
            onClick={handleOpenModalImageGallery}
          >
            <Image
              fill
              className="object-cover rounded-md sm:rounded-xl"
              src={listingData.media.featuredImage}
              alt={listingData.basic.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {listingData.media.gallery.slice(0, 4).map((item, index) => (
            <div
              key={item.id}
              className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                index >= 3 ? "hidden sm:block" : ""
              }`}
            >
              <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                <Image
                  fill
                  className="object-cover rounded-md sm:rounded-xl "
                  src={item.url}
                  alt={item.alt}
                  sizes="400px"
                />
              </div>

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={handleOpenModalImageGallery}
              />
            </div>
          ))}

          <button
            className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 z-10"
            onClick={handleOpenModalImageGallery}
          >
            <Squares2X2Icon className="w-5 h-5" />
            <span className="ml-2 text-neutral-800 text-sm font-medium">
              Show all photos
            </span>
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className=" relative z-10 mt-11 flex flex-col lg:flex-row ">
        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          {renderSection1()}
          {renderSection2()}
          {renderSection3()}
          {renderSection4()}
          <SectionDateRange />
          {renderSection5()}
          {renderSection6()}
          {renderSection7()}
          {renderSection8()}
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block flex-grow mt-14 lg:mt-0">
          <div className="sticky top-28">{renderSidebar()}</div>
        </div>
      </main>
    </div>
  );
};

export default ListingStayDetailClient;
