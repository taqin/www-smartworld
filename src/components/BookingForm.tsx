"use client";

import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CalendarDaysIcon, UserGroupIcon, CurrencyDollarIcon, XMarkIcon } from '@heroicons/react/24/outline';
import ButtonPrimary from '@/shared/ButtonPrimary';
import ButtonSecondary from '@/shared/ButtonSecondary';
import ButtonClose from '@/shared/ButtonClose';
import Input from '@/shared/Input';
import StayDatesRangeInput from '@/app/(listing-detail)/listing/StayDatesRangeInput';
import GuestsInput from '@/app/(listing-detail)/listing/GuestsInput';

interface BookingFormProps {
  listingId: string;
  listingData: {
    basic: {
      title: string;
      location: {
        address: string;
      };
    };
    pricing: {
      basePrice: number;
      currency: string;
      minimumNights: number;
      maximumNights: number;
    };
    accommodation: {
      maxGuests: number;
    };
    availability: {
      instantBook: boolean;
    };
    booking: {
      availableForBooking: boolean;
      bookingUrl: string;
    };
    media: {
      featuredImage: string;
    };
  };
  renderAsButton?: boolean;
}

interface GuestCounts {
  guestAdults: number;
  guestChildren: number;
  guestInfants: number;
}

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

interface PricingData {
  subtotal: number;
  serviceFee: number;
  cleaningFee: number;
  taxes: number;
  total: number;
  nights: number;
  breakdown: string;
  pricePerNight: number;
}

interface AvailabilityData {
  available: boolean;
  message?: string;
  minimumStay: number;
  maximumStay: number;
  instantBook: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({ listingId, listingData, renderAsButton = false }) => {
  // Form state
  const [dateRange, setDateRange] = useState<DateRange>({ startDate: null, endDate: null });
  const [guests, setGuests] = useState<GuestCounts>({
    guestAdults: 1,
    guestChildren: 0,
    guestInfants: 0,
  });
  const [guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [specialRequests, setSpecialRequests] = useState('');
  
  // API response state
  const [availability, setAvailability] = useState<AvailabilityData | null>(null);
  const [pricing, setPricing] = useState<PricingData | null>(null);
  
  // UI state
  const [step, setStep] = useState<'dates' | 'guests' | 'details' | 'confirm'>('dates');
  const [loading, setLoading] = useState(false);
  const [availabilityLoading, setAvailabilityLoading] = useState(false);
  const [pricingLoading, setPricingLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Check availability when dates change
  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      checkAvailability();
    }
  }, [dateRange]);

  // Calculate pricing when dates or guests change
  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate && availability?.available) {
      calculatePricing();
    }
  }, [dateRange, guests, availability]);

  const checkAvailability = async () => {
    if (!dateRange.startDate || !dateRange.endDate) return;

    setAvailabilityLoading(true);
    setError(null);

    try {
      const totalGuests = guests.guestAdults + guests.guestChildren + guests.guestInfants;
      const response = await fetch(
        `/api/listings/${listingId}/availability?from=${dateRange.startDate.toISOString().split('T')[0]}&to=${dateRange.endDate.toISOString().split('T')[0]}&guests=${totalGuests}`
      );

      const data = await response.json();
      
      if (data.success) {
        setAvailability(data.data);
        if (!data.data.available) {
          setError(data.data.message || 'These dates are not available');
        }
      } else {
        setError(data.error || 'Failed to check availability');
      }
    } catch (err) {
      setError('Failed to check availability');
    } finally {
      setAvailabilityLoading(false);
    }
  };

  const calculatePricing = async () => {
    if (!dateRange.startDate || !dateRange.endDate || !availability?.available) return;

    setPricingLoading(true);

    try {
      const totalGuests = guests.guestAdults + guests.guestChildren + guests.guestInfants;
      const response = await fetch(
        `/api/listings/${listingId}/pricing?checkIn=${dateRange.startDate.toISOString().split('T')[0]}&checkOut=${dateRange.endDate.toISOString().split('T')[0]}&guests=${totalGuests}`
      );

      const data = await response.json();
      
      if (data.success) {
        setPricing(data.data);
      } else {
        setError(data.error || 'Failed to calculate pricing');
      }
    } catch (err) {
      setError('Failed to calculate pricing');
    } finally {
      setPricingLoading(false);
    }
  };

  const handleBooking = async () => {
    if (!dateRange.startDate || !dateRange.endDate || !pricing || !availability) return;

    setLoading(true);
    setError(null);

    try {
      const bookingData = {
        listingId,
        guestId: 'guest-temp-id', // Would come from authentication
        checkIn: dateRange.startDate.toISOString().split('T')[0],
        checkOut: dateRange.endDate.toISOString().split('T')[0],
        guests: {
          adults: guests.guestAdults,
          children: guests.guestChildren,
          infants: guests.guestInfants,
        },
        pricing: {
          basePrice: pricing.pricePerNight,
          nights: pricing.nights,
          subtotal: pricing.subtotal,
          serviceFee: pricing.serviceFee,
          cleaningFee: pricing.cleaningFee,
          taxes: pricing.taxes,
          total: pricing.total,
        },
        guestInfo,
        paymentMethod: 'credit_card', // Would be selected in payment step
        specialRequests: specialRequests || undefined,
      };

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (data.success) {
        setBookingSuccess(true);
        setBookingId(data.data.id);
      } else {
        setError(data.error || 'Failed to create booking');
      }
    } catch (err) {
      setError('Failed to create booking');
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const totalGuests = guests.guestAdults + guests.guestChildren + guests.guestInfants;

  const renderFormContent = () => {
    if (bookingSuccess) {
      return (
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
            Booking Confirmed!
          </h3>
          <p className="text-green-700 dark:text-green-300 text-sm mb-4">
            Your booking ID is: <strong>{bookingId}</strong>
          </p>
          <p className="text-green-600 dark:text-green-400 text-sm mb-4">
            Check your email for confirmation details and next steps.
          </p>
          <ButtonSecondary 
            className="w-full"
            onClick={() => {
              setShowModal(false);
              setBookingSuccess(false);
              setStep('dates');
            }}
          >
            Close
          </ButtonSecondary>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {/* Error Display */}
        {error && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
          </div>
        )}

        {/* Step 1: Date Selection */}
        {step === 'dates' && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">
                Select dates
              </label>
              <StayDatesRangeInput
                className="nc-hero-field-padding"
                onChange={(dates) => {
                  setDateRange({
                    startDate: dates.startDate,
                    endDate: dates.endDate,
                  });
                }}
              />
            </div>

            {availabilityLoading && (
              <div className="text-center py-2">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600 mx-auto"></div>
                <p className="text-sm text-neutral-500 mt-2">Checking availability...</p>
              </div>
            )}

            {availability && !availability.available && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                <p className="text-red-700 dark:text-red-300 text-sm">{availability.message}</p>
              </div>
            )}

            {availability?.available && dateRange.startDate && dateRange.endDate && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                <p className="text-green-700 dark:text-green-300 text-sm">
                  ✓ Available for {Math.ceil((dateRange.endDate.getTime() - dateRange.startDate.getTime()) / (1000 * 60 * 60 * 24))} nights
                </p>
              </div>
            )}

            <ButtonPrimary
              className="w-full"
              disabled={!availability?.available || !dateRange.startDate || !dateRange.endDate}
              onClick={() => setStep('guests')}
            >
              Continue
            </ButtonPrimary>
          </div>
        )}

        {/* Step 2: Guest Selection */}
        {step === 'guests' && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">
                Guests (max {listingData.accommodation.maxGuests})
              </label>
              <GuestsInput
                className="nc-hero-field-padding"
                defaultAdults={guests.guestAdults}
                defaultChildren={guests.guestChildren}
                defaultInfants={guests.guestInfants}
                onChange={(data) => setGuests(data)}
              />
            </div>

            {totalGuests > listingData.accommodation.maxGuests && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                <p className="text-red-700 dark:text-red-300 text-sm">
                  This property can accommodate up to {listingData.accommodation.maxGuests} guests
                </p>
              </div>
            )}

            <div className="flex space-x-3">
              <ButtonSecondary
                className="flex-1"
                onClick={() => setStep('dates')}
              >
                Back
              </ButtonSecondary>
              <ButtonPrimary
                className="flex-1"
                disabled={totalGuests > listingData.accommodation.maxGuests || totalGuests === 0}
                onClick={() => setStep('details')}
              >
                Continue
              </ButtonPrimary>
            </div>
          </div>
        )}

        {/* Step 3: Guest Details */}
        {step === 'details' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Guest Information</h3>
            <div className="grid grid-cols-2 gap-3">
              <Input
                placeholder="First name"
                value={guestInfo.firstName}
                onChange={(e) => setGuestInfo(prev => ({ ...prev, firstName: e.target.value }))}
                required
              />
              <Input
                placeholder="Last name"
                value={guestInfo.lastName}
                onChange={(e) => setGuestInfo(prev => ({ ...prev, lastName: e.target.value }))}
                required
              />
            </div>
            <Input
              type="email"
              placeholder="Email address"
              value={guestInfo.email}
              onChange={(e) => setGuestInfo(prev => ({ ...prev, email: e.target.value }))}
              required
            />
            <Input
              type="tel"
              placeholder="Phone number"
              value={guestInfo.phone}
              onChange={(e) => setGuestInfo(prev => ({ ...prev, phone: e.target.value }))}
              required
            />
            <textarea
              className="block w-full px-4 py-3 text-sm rounded-2xl border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              placeholder="Special requests (optional)"
              rows={3}
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
            />

            <div className="flex space-x-3">
              <ButtonSecondary
                className="flex-1"
                onClick={() => setStep('guests')}
              >
                Back
              </ButtonSecondary>
              <ButtonPrimary
                className="flex-1"
                disabled={!guestInfo.firstName || !guestInfo.lastName || !guestInfo.email || !guestInfo.phone}
                onClick={() => setStep('confirm')}
              >
                Review Booking
              </ButtonPrimary>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 'confirm' && (
          <div className="space-y-4">
            {pricingLoading ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600 mx-auto"></div>
                <p className="text-sm text-neutral-500 mt-2">Calculating final pricing...</p>
              </div>
            ) : pricing && (
              <>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Booking Summary</h3>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{pricing.breakdown}</span>
                      <span>{formatCurrency(pricing.subtotal)}</span>
                    </div>
                    {pricing.serviceFee > 0 && (
                      <div className="flex justify-between">
                        <span>Service fee</span>
                        <span>{formatCurrency(pricing.serviceFee)}</span>
                      </div>
                    )}
                    {pricing.cleaningFee > 0 && (
                      <div className="flex justify-between">
                        <span>Cleaning fee</span>
                        <span>{formatCurrency(pricing.cleaningFee)}</span>
                      </div>
                    )}
                    {pricing.taxes > 0 && (
                      <div className="flex justify-between">
                        <span>Taxes</span>
                        <span>{formatCurrency(pricing.taxes)}</span>
                      </div>
                    )}
                  </div>
                  
                  <hr className="border-neutral-200 dark:border-neutral-700" />
                  
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{formatCurrency(pricing.total)}</span>
                  </div>
                </div>

                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 text-xs text-neutral-600 dark:text-neutral-400">
                  <p><strong>Guest:</strong> {guestInfo.firstName} {guestInfo.lastName}</p>
                  <p><strong>Email:</strong> {guestInfo.email}</p>
                  <p><strong>Phone:</strong> {guestInfo.phone}</p>
                  <p><strong>Guests:</strong> {totalGuests} ({guests.guestAdults} adults, {guests.guestChildren} children, {guests.guestInfants} infants)</p>
                  {specialRequests && <p><strong>Special requests:</strong> {specialRequests}</p>}
                </div>

                <div className="flex space-x-3">
                  <ButtonSecondary
                    className="flex-1"
                    onClick={() => setStep('details')}
                  >
                    Back
                  </ButtonSecondary>
                  <ButtonPrimary
                    className="flex-1"
                    loading={loading}
                    onClick={handleBooking}
                  >
                    {availability?.instantBook ? 'Confirm Booking' : 'Request to Book'}
                  </ButtonPrimary>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    );
  };

  // If rendering as button only, show just the button that opens modal
  if (renderAsButton) {
    return (
      <>
        <ButtonPrimary
          className="w-full"
          onClick={() => setShowModal(true)}
        >
          {listingData.availability.instantBook ? "Reserve" : "Request to Book"}
        </ButtonPrimary>

        {/* Modal with full booking form */}
        <Transition appear show={showModal} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setShowModal(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 p-6 text-left align-middle shadow-xl transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                        Book Your Stay
                      </Dialog.Title>
                      <ButtonClose onClick={() => setShowModal(false)} />
                    </div>
                    
                    {/* Render the full form inside modal */}
                    <div className="max-h-[70vh] overflow-y-auto">
                      {renderFormContent()}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  }

  if (bookingSuccess) {
    return (
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
            Booking Confirmed!
          </h3>
          <p className="text-green-700 dark:text-green-300 text-sm mb-4">
            Your booking ID is: <strong>{bookingId}</strong>
          </p>
          <p className="text-green-600 dark:text-green-400 text-sm">
            Check your email for confirmation details and next steps.
          </p>
          <ButtonSecondary 
            className="mt-4 w-full"
            onClick={() => window.location.href = '/bookings'}
          >
            View My Bookings
          </ButtonSecondary>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="listingSection__wrap !border-2 !border-neutral-200 dark:!border-neutral-700">
        {/* Header */}
        <div className="p-5 border-b border-neutral-200 dark:border-neutral-700">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">
              {formatCurrency(listingData.pricing.basePrice)}
              <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
                /night
              </span>
            </span>
            {pricing && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {pricing.nights} night{pricing.nights > 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>

        {/* Step Indicator */}
        <div className="p-5 border-b border-neutral-200 dark:border-neutral-700">
          <div className="flex items-center space-x-2">
            {['dates', 'guests', 'details', 'confirm'].map((stepName, index) => (
              <React.Fragment key={stepName}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                  step === stepName 
                    ? 'bg-primary-600 text-white' 
                    : index < ['dates', 'guests', 'details', 'confirm'].indexOf(step)
                    ? 'bg-green-500 text-white'
                    : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500'
                }`}>
                  {index < ['dates', 'guests', 'details', 'confirm'].indexOf(step) ? '✓' : index + 1}
                </div>
                {index < 3 && <div className="flex-1 h-0.5 bg-neutral-200 dark:bg-neutral-700"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="p-5 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500">
            <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
          </div>
        )}

        <div className="p-5 space-y-4">
          {/* Step 1: Date Selection */}
          {step === 'dates' && (
            <>
              <div>
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">
                  Select dates
                </label>
                <StayDatesRangeInput
                  className="nc-hero-field-padding"
                  onChange={(dates) => {
                    setDateRange({
                      startDate: dates.startDate,
                      endDate: dates.endDate,
                    });
                  }}
                />
              </div>

              {availabilityLoading && (
                <div className="text-center py-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600 mx-auto"></div>
                  <p className="text-sm text-neutral-500 mt-2">Checking availability...</p>
                </div>
              )}

              {availability && !availability.available && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <p className="text-red-700 dark:text-red-300 text-sm">{availability.message}</p>
                </div>
              )}

              {availability?.available && dateRange.startDate && dateRange.endDate && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    ✓ Available for {Math.ceil((dateRange.endDate.getTime() - dateRange.startDate.getTime()) / (1000 * 60 * 60 * 24))} nights
                  </p>
                </div>
              )}

              <ButtonPrimary
                className="w-full"
                disabled={!availability?.available || !dateRange.startDate || !dateRange.endDate}
                onClick={() => setStep('guests')}
              >
                Continue
              </ButtonPrimary>
            </>
          )}

          {/* Step 2: Guest Selection */}
          {step === 'guests' && (
            <>
              <div>
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">
                  Guests (max {listingData.accommodation.maxGuests})
                </label>
                <GuestsInput
                  className="nc-hero-field-padding"
                  defaultAdults={guests.guestAdults}
                  defaultChildren={guests.guestChildren}
                  defaultInfants={guests.guestInfants}
                  onChange={(data) => setGuests(data)}
                />
              </div>

              {totalGuests > listingData.accommodation.maxGuests && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    This property can accommodate up to {listingData.accommodation.maxGuests} guests
                  </p>
                </div>
              )}

              <div className="flex space-x-3">
                <ButtonSecondary
                  className="flex-1"
                  onClick={() => setStep('dates')}
                >
                  Back
                </ButtonSecondary>
                <ButtonPrimary
                  className="flex-1"
                  disabled={totalGuests > listingData.accommodation.maxGuests || totalGuests === 0}
                  onClick={() => setStep('details')}
                >
                  Continue
                </ButtonPrimary>
              </div>
            </>
          )}

          {/* Step 3: Guest Details */}
          {step === 'details' && (
            <>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Guest Information</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    placeholder="First name"
                    value={guestInfo.firstName}
                    onChange={(e) => setGuestInfo(prev => ({ ...prev, firstName: e.target.value }))}
                    required
                  />
                  <Input
                    placeholder="Last name"
                    value={guestInfo.lastName}
                    onChange={(e) => setGuestInfo(prev => ({ ...prev, lastName: e.target.value }))}
                    required
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={guestInfo.email}
                  onChange={(e) => setGuestInfo(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={guestInfo.phone}
                  onChange={(e) => setGuestInfo(prev => ({ ...prev, phone: e.target.value }))}
                  required
                />
                <textarea
                  className="block w-full px-4 py-3 text-sm rounded-2xl border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  placeholder="Special requests (optional)"
                  rows={3}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                />
              </div>

              <div className="flex space-x-3">
                <ButtonSecondary
                  className="flex-1"
                  onClick={() => setStep('guests')}
                >
                  Back
                </ButtonSecondary>
                <ButtonPrimary
                  className="flex-1"
                  disabled={!guestInfo.firstName || !guestInfo.lastName || !guestInfo.email || !guestInfo.phone}
                  onClick={() => setStep('confirm')}
                >
                  Review Booking
                </ButtonPrimary>
              </div>
            </>
          )}

          {/* Step 4: Confirmation */}
          {step === 'confirm' && (
            <>
              {pricingLoading ? (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600 mx-auto"></div>
                  <p className="text-sm text-neutral-500 mt-2">Calculating final pricing...</p>
                </div>
              ) : pricing && (
                <>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Booking Summary</h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>{pricing.breakdown}</span>
                        <span>{formatCurrency(pricing.subtotal)}</span>
                      </div>
                      {pricing.serviceFee > 0 && (
                        <div className="flex justify-between">
                          <span>Service fee</span>
                          <span>{formatCurrency(pricing.serviceFee)}</span>
                        </div>
                      )}
                      {pricing.cleaningFee > 0 && (
                        <div className="flex justify-between">
                          <span>Cleaning fee</span>
                          <span>{formatCurrency(pricing.cleaningFee)}</span>
                        </div>
                      )}
                      {pricing.taxes > 0 && (
                        <div className="flex justify-between">
                          <span>Taxes</span>
                          <span>{formatCurrency(pricing.taxes)}</span>
                        </div>
                      )}
                    </div>
                    
                    <hr className="border-neutral-200 dark:border-neutral-700" />
                    
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>{formatCurrency(pricing.total)}</span>
                    </div>
                  </div>

                  <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 text-xs text-neutral-600 dark:text-neutral-400">
                    <p><strong>Guest:</strong> {guestInfo.firstName} {guestInfo.lastName}</p>
                    <p><strong>Email:</strong> {guestInfo.email}</p>
                    <p><strong>Phone:</strong> {guestInfo.phone}</p>
                    <p><strong>Guests:</strong> {totalGuests} ({guests.guestAdults} adults, {guests.guestChildren} children, {guests.guestInfants} infants)</p>
                    {specialRequests && <p><strong>Special requests:</strong> {specialRequests}</p>}
                  </div>

                  <div className="flex space-x-3">
                    <ButtonSecondary
                      className="flex-1"
                      onClick={() => setStep('details')}
                    >
                      Back
                    </ButtonSecondary>
                    <ButtonPrimary
                      className="flex-1"
                      loading={loading}
                      onClick={handleBooking}
                    >
                      {availability?.instantBook ? 'Confirm Booking' : 'Request to Book'}
                    </ButtonPrimary>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
