"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ButtonPrimary from '@/shared/ButtonPrimary';
import ButtonSecondary from '@/shared/ButtonSecondary';
import Input from '@/shared/Input';
import Image from 'next/image';

interface BookingData {
  listingId: string;
  listingTitle: string;
  listingImage: string;
  listingAddress: string;
  checkIn: string;
  checkOut: string;
  guests: {
    guestAdults: number;
    guestChildren: number;
    guestInfants: number;
  };
  basePrice: number;
  currency: string;
  priceUnit: string;
  instantBook: boolean;
  hostName: string;
  hostId: string;
}

interface PricingData {
  basePrice: number;
  subtotal: number;
  serviceFee: number;
  cleaningFee: number;
  taxes: number;
  total: number;
  nights: number;
  breakdown: string;
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}

function BookingContent() {
  const searchParams = useSearchParams();
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [pricing, setPricing] = useState<PricingData | null>(null);
  const [loading, setLoading] = useState(false);
  const [pricingLoading, setPricingLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);

  // Contact form state
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  // Load booking data from URL parameters
  useEffect(() => {
    const dataParam = searchParams.get('data');
    if (dataParam) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(dataParam));
        setBookingData(decodedData);
        
        // Calculate pricing once we have the data
        calculatePricing(decodedData);
      } catch (error) {
        console.error('Error parsing booking data:', error);
        setError('Invalid booking data');
      }
    } else {
      setError('No booking data found');
    }
  }, [searchParams]);

  const calculatePricing = async (data: BookingData) => {
    setPricingLoading(true);
    try {
      const totalGuests = data.guests.guestAdults + data.guests.guestChildren + data.guests.guestInfants;
      const response = await fetch(
        `/api/listings/${data.listingId}/pricing?checkIn=${data.checkIn}&checkOut=${data.checkOut}&guests=${totalGuests}`
      );

      const result = await response.json();
      
      if (result.success) {
        setPricing(result.data);
      } else {
        setError(result.error || 'Failed to calculate pricing');
      }
    } catch (err) {
      setError('Failed to calculate pricing');
    } finally {
      setPricingLoading(false);
    }
  };

  const handleBooking = async () => {
    if (!bookingData || !pricing) return;

    setLoading(true);
    setError(null);

    try {
      const bookingRequest = {
        listingId: bookingData.listingId,
        guestId: 'guest-temp-id', // Would come from authentication
        checkIn: bookingData.checkIn,
        checkOut: bookingData.checkOut,
        guests: {
          adults: bookingData.guests.guestAdults,
          children: bookingData.guests.guestChildren,
          infants: bookingData.guests.guestInfants,
        },
        pricing: {
          basePrice: pricing.basePrice || bookingData.basePrice,
          nights: pricing.nights,
          subtotal: pricing.subtotal,
          serviceFee: pricing.serviceFee,
          cleaningFee: pricing.cleaningFee,
          taxes: pricing.taxes,
          total: pricing.total,
        },
        guestInfo: {
          firstName: contactInfo.firstName,
          lastName: contactInfo.lastName,
          email: contactInfo.email,
          phone: contactInfo.phone,
        },
        paymentMethod: 'credit_card',
        specialRequests: contactInfo.specialRequests || undefined,
      };

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingRequest),
      });

      const result = await response.json();

      if (result.success) {
        setBookingSuccess(true);
        setBookingId(result.data.id);
      } else {
        setError(result.error || 'Failed to create booking');
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  if (!bookingData) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-4">Loading booking details...</h1>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    );
  }

  if (bookingSuccess) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-green-900 dark:text-green-100 mb-4">
              Booking Confirmed! 🎉
            </h1>
            <p className="text-green-700 dark:text-green-300 text-lg mb-6">
              Your booking ID is: <strong className="font-mono">{bookingId}</strong>
            </p>
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 mb-6">
              <h3 className="font-semibold mb-2">What's next?</h3>
              <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
                <li>✅ Confirmation email sent to {contactInfo.email}</li>
                <li>✅ Operations team has been notified</li>
                <li>✅ Host will contact you with check-in details</li>
              </ul>
            </div>
            <div className="space-y-3">
              <ButtonPrimary 
                className="w-full"
                href="/bookings"
              >
                View My Bookings
              </ButtonPrimary>
              <ButtonSecondary 
                className="w-full"
                href="/"
              >
                Back to Home
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const totalGuests = bookingData.guests.guestAdults + bookingData.guests.guestChildren + bookingData.guests.guestInfants;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Summary */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6">
              <h2 className="text-xl font-semibold mb-4">Your Trip</h2>
              <div className="flex space-x-4">
                {bookingData.listingImage && (
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={bookingData.listingImage}
                      alt={bookingData.listingTitle}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{bookingData.listingTitle}</h3>
                  <p className="text-neutral-500 text-sm">{bookingData.listingAddress}</p>
                  <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    <p>{formatDate(bookingData.checkIn)} - {formatDate(bookingData.checkOut)}</p>
                    <div className="flex flex-col space-y-1">
                      <p className="font-medium">{totalGuests} guest{totalGuests > 1 ? 's' : ''} total</p>
                      <div className="text-xs text-neutral-500 space-y-0.5">
                        {bookingData.guests.guestAdults > 0 && (
                          <p>• {bookingData.guests.guestAdults} adult{bookingData.guests.guestAdults > 1 ? 's' : ''}</p>
                        )}
                        {bookingData.guests.guestChildren > 0 && (
                          <p>• {bookingData.guests.guestChildren} child{bookingData.guests.guestChildren > 1 ? 'ren' : ''} (ages 2-12)</p>
                        )}
                        {bookingData.guests.guestInfants > 0 && (
                          <p>• {bookingData.guests.guestInfants} infant{bookingData.guests.guestInfants > 1 ? 's' : ''} (under 2)</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Form */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              
              {error && (
                <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
                </div>
              )}

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      First Name *
                    </label>
                    <Input
                      placeholder="First name"
                      value={contactInfo.firstName}
                      onChange={(e) => setContactInfo(prev => ({ ...prev, firstName: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Last Name *
                    </label>
                    <Input
                      placeholder="Last name"
                      value={contactInfo.lastName}
                      onChange={(e) => setContactInfo(prev => ({ ...prev, lastName: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    className="block w-full px-4 py-3 text-sm rounded-2xl border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    placeholder="Any special requests or notes for your host..."
                    rows={4}
                    value={contactInfo.specialRequests}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, specialRequests: e.target.value }))}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
              
              {pricingLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
                  <p className="text-sm text-neutral-500 mt-2">Calculating pricing...</p>
                </div>
              ) : pricing ? (
                <div className="space-y-4">
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
                  
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{formatCurrency(pricing.total)}</span>
                  </div>

                  <div className="mt-6">
                    <ButtonPrimary
                      className="w-full"
                      loading={loading}
                      disabled={!contactInfo.firstName || !contactInfo.lastName || !contactInfo.email || !contactInfo.phone}
                      onClick={handleBooking}
                    >
                      {bookingData.instantBook ? 'Confirm Booking' : 'Request to Book'}
                    </ButtonPrimary>
                  </div>

                  <p className="text-xs text-neutral-500 text-center mt-4">
                    By clicking "{bookingData.instantBook ? 'Confirm Booking' : 'Request to Book'}", you agree to our terms of service and privacy policy.
                  </p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-neutral-500">Unable to calculate pricing</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
