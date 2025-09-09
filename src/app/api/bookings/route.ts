import { NextRequest, NextResponse } from 'next/server';
import { eq, and } from 'drizzle-orm';
import { db, bookings, listings, users } from '@/lib/db/connection';
import { Resend } from 'resend';
import BookingConfirmationEmail from '@/components/emails/BookingConfirmationEmail';
import OperationsNotificationEmail from '@/components/emails/OperationsNotificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

interface CreateBookingRequest {
  listingId: string;
  guestId: string;
  checkIn: string;
  checkOut: string;
  guests: {
    adults: number;
    children: number;
    infants: number;
  };
  pricing: {
    basePrice: number;
    nights: number;
    subtotal: number;
    serviceFee: number;
    cleaningFee: number;
    taxes: number;
    total: number;
  };
  guestInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  paymentMethod: string;
  specialRequests?: string;
}

interface Booking {
  id: string;
  listingId: string;
  guestId: string;
  hostId: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  checkIn: string;
  checkOut: string;
  guests: {
    adults: number;
    children: number;
    infants: number;
    total: number;
  };
  pricing: {
    basePrice: number;
    nights: number;
    subtotal: number;
    serviceFee: number;
    cleaningFee: number;
    taxes: number;
    total: number;
  };
  guestInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  paymentInfo: {
    method: string;
    transactionId?: string;
    paidAt?: string;
  };
  specialRequests?: string;
  createdAt: string;
  updatedAt: string;
  listing: {
    title: string;
    featuredImage: string;
    location: string;
  };
  host: {
    name: string;
    email: string;
    phone: string;
  };
}

// POST /api/bookings - Create new booking
export async function POST(request: NextRequest) {
  try {
    const body: CreateBookingRequest = await request.json();
    
    // TODO: Add authentication middleware to get guestId
    // TODO: Validate request body with Zod or similar
    // TODO: Check listing availability for the dates
    // TODO: Process payment with Stripe/PayPal
    // TODO: Send confirmation emails
    // TODO: Update listing calendar
    
    // Validate required fields
    if (!body.listingId || !body.checkIn || !body.checkOut) {
      return NextResponse.json(
        { success: false, error: 'Missing required booking information' },
        { status: 400 }
      );
    }

    // Check date validity
    const checkInDate = new Date(body.checkIn);
    const checkOutDate = new Date(body.checkOut);
    const today = new Date();
    
    if (checkInDate < today) {
      return NextResponse.json(
        { success: false, error: 'Check-in date cannot be in the past' },
        { status: 400 }
      );
    }
    
    if (checkOutDate <= checkInDate) {
      return NextResponse.json(
        { success: false, error: 'Check-out date must be after check-in date' },
        { status: 400 }
      );
    }

    // Get listing and host information
    const listingInfo = await db
      .select({
        id: listings.id,
        title: listings.title,
        featuredImage: listings.featuredImage,
        address: listings.address,
        hostId: listings.hostId,
        maxGuests: listings.maxGuests,
        instantBook: listings.instantBook,
        hostName: users.name,
        hostEmail: users.email,
        hostPhone: users.phone,
      })
      .from(listings)
      .leftJoin(users, eq(listings.hostId, users.id))
      .where(eq(listings.id, body.listingId))
      .limit(1);

    if (!listingInfo || listingInfo.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Listing not found' },
        { status: 404 }
      );
    }

    const listing = listingInfo[0];

    // Check guest capacity
    if ((body.guests.adults + body.guests.children + body.guests.infants) > listing.maxGuests) {
      return NextResponse.json(
        { success: false, error: `Property can accommodate up to ${listing.maxGuests} guests` },
        { status: 400 }
      );
    }

    // Generate unique booking ID
    const bookingId = `BK${Date.now()}${Math.random().toString(36).substr(2, 4).toUpperCase()}`;

    // Create booking in database
    const newBookingData = {
      id: bookingId,
      listingId: body.listingId,
      guestId: body.guestId,
      hostId: listing.hostId,
      status: listing.instantBook ? 'confirmed' : 'pending' as 'pending' | 'confirmed',
      checkIn: new Date(body.checkIn),
      checkOut: new Date(body.checkOut),
      totalGuests: body.guests.adults + body.guests.children + body.guests.infants,
      adultsCount: body.guests.adults,
      childrenCount: body.guests.children,
      infantsCount: body.guests.infants,
      basePrice: body.pricing.basePrice.toString(),
      nights: body.pricing.nights,
      subtotal: body.pricing.subtotal.toString(),
      serviceFee: body.pricing.serviceFee.toString(),
      cleaningFee: body.pricing.cleaningFee.toString(),
      taxes: body.pricing.taxes.toString(),
      totalAmount: body.pricing.total.toString(),
      currency: 'USD',
      guestFirstName: body.guestInfo.firstName,
      guestLastName: body.guestInfo.lastName,
      guestEmail: body.guestInfo.email,
      guestPhone: body.guestInfo.phone,
      paymentMethod: body.paymentMethod,
      specialRequests: body.specialRequests || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Insert booking into database
    const [insertedBooking] = await db
      .insert(bookings)
      .values(newBookingData)
      .returning();

    // Prepare email data
    const emailData = {
      bookingId: bookingId,
      guestName: `${body.guestInfo.firstName} ${body.guestInfo.lastName}`,
      guestEmail: body.guestInfo.email,
      guestPhone: body.guestInfo.phone,
      listingTitle: listing.title,
      listingImage: listing.featuredImage || '',
      listingAddress: listing.address,
      checkIn: body.checkIn,
      checkOut: body.checkOut,
      guests: body.guests,
      pricing: body.pricing,
      hostName: listing.hostName || 'Host',
      hostEmail: listing.hostEmail || '',
      hostPhone: listing.hostPhone || '',
      specialRequests: body.specialRequests,
      createdAt: new Date().toISOString(),
    };

    try {
      // Send confirmation email to guest
      const guestEmailResult = await resend.emails.send({
        from: process.env.FROM_EMAIL || 'bookings@smartworld.travel',
        to: body.guestInfo.email,
        subject: `Booking Confirmed - ${listing.title}`,
        react: BookingConfirmationEmail(emailData),
      });

      console.log('Guest confirmation email sent:', guestEmailResult);

      // Send notification to operations team
      const operationsEmailResult = await resend.emails.send({
        from: process.env.FROM_EMAIL || 'bookings@smartworld.travel',
        to: process.env.OPERATIONS_EMAIL || 'operations@smartworld.travel',
        subject: `🚨 New Booking Alert - ${bookingId}`,
        react: OperationsNotificationEmail(emailData),
      });

      console.log('Operations notification email sent:', operationsEmailResult);

      // Send notification to host (optional)
      if (listing.hostEmail) {
        const hostEmailResult = await resend.emails.send({
          from: process.env.FROM_EMAIL || 'bookings@smartworld.travel',
          to: listing.hostEmail,
          subject: `New Booking for ${listing.title} - ${bookingId}`,
          html: `
            <h2>New Booking Notification</h2>
            <p>You have a new booking for your property: <strong>${listing.title}</strong></p>
            <p><strong>Booking ID:</strong> ${bookingId}</p>
            <p><strong>Guest:</strong> ${emailData.guestName}</p>
            <p><strong>Check-in:</strong> ${new Date(body.checkIn).toLocaleDateString()}</p>
            <p><strong>Check-out:</strong> ${new Date(body.checkOut).toLocaleDateString()}</p>
            <p><strong>Guests:</strong> ${body.guests.adults + body.guests.children + body.guests.infants}</p>
            <p><strong>Total:</strong> $${body.pricing.total}</p>
            ${body.specialRequests ? `<p><strong>Special Requests:</strong> ${body.specialRequests}</p>` : ''}
            <p>Please prepare your property for the guest's arrival.</p>
          `,
        });

        console.log('Host notification email sent:', hostEmailResult);
      }

    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      // Don't fail the booking if email fails, but log it
    }

    // Prepare response data
    const newBooking: Booking = {
      id: bookingId,
      listingId: body.listingId,
      guestId: body.guestId,
      hostId: listing.hostId || '',
      status: newBookingData.status,
      checkIn: body.checkIn,
      checkOut: body.checkOut,
      guests: {
        ...body.guests,
        total: body.guests.adults + body.guests.children + body.guests.infants
      },
      pricing: body.pricing,
      guestInfo: body.guestInfo,
      paymentInfo: {
        method: body.paymentMethod,
      },
      specialRequests: body.specialRequests,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      listing: {
        title: listing.title,
        featuredImage: listing.featuredImage || '',
        location: listing.address
      },
      host: {
        name: listing.hostName || '',
        email: listing.hostEmail || '',
        phone: listing.hostPhone || ''
      }
    };
    
    return NextResponse.json({
      success: true,
      data: newBooking,
      message: 'Booking created successfully'
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

// GET /api/bookings - Get user's bookings
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const userId = searchParams.get('userId'); // In real app, get from auth session
    
    // TODO: Get userId from authentication session - using query param for now
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Build where conditions
    const whereConditions = [eq(bookings.guestId, userId)];
    
    // Apply status filter if provided
    if (status) {
      whereConditions.push(eq(bookings.status, status as any));
    }
    
    // Query database for user's bookings
    const query = db
      .select({
        // Booking fields
        id: bookings.id,
        listingId: bookings.listingId,
        guestId: bookings.guestId,
        hostId: bookings.hostId,
        status: bookings.status,
        checkIn: bookings.checkIn,
        checkOut: bookings.checkOut,
        totalGuests: bookings.totalGuests,
        adults: bookings.adultsCount,
        children: bookings.childrenCount,
        infants: bookings.infantsCount,
        subtotal: bookings.subtotal,
        serviceFee: bookings.serviceFee,
        cleaningFee: bookings.cleaningFee,
        taxes: bookings.taxes,
        totalAmount: bookings.totalAmount,
                guestFirstName: bookings.guestFirstName,
        guestLastName: bookings.guestLastName,
        guestEmail: bookings.guestEmail,
        guestPhone: bookings.guestPhone,
        paymentMethod: bookings.paymentMethod,
        specialRequests: bookings.specialRequests,
        createdAt: bookings.createdAt,
        updatedAt: bookings.updatedAt,
        
        // Listing fields
        listingTitle: listings.title,
        listingImage: listings.featuredImage,
        listingAddress: listings.address,
        
        // Host fields
        hostName: users.name,
        hostEmail: users.email,
        hostPhone: users.phone,
      })
      .from(bookings)
      .leftJoin(listings, eq(bookings.listingId, listings.id))
      .leftJoin(users, eq(bookings.hostId, users.id))
      .where(and(...whereConditions));

    const dbBookings = await query.orderBy(bookings.createdAt);

    // Transform database results to API format
    const transformedBookings: Booking[] = dbBookings.map(booking => ({
      id: booking.id,
      listingId: booking.listingId,
      guestId: booking.guestId,
      hostId: booking.hostId || '',
      status: booking.status,
      checkIn: booking.checkIn.toISOString().split('T')[0],
      checkOut: booking.checkOut.toISOString().split('T')[0],
      guests: {
        adults: booking.adults,
        children: booking.children || 0,
        infants: booking.infants || 0,
        total: booking.totalGuests
      },
      pricing: {
        basePrice: 0, // Would need to calculate from original rates
        nights: Math.ceil(
          (booking.checkOut.getTime() - booking.checkIn.getTime()) / (1000 * 60 * 60 * 24)
        ),
        subtotal: parseFloat(booking.subtotal),
        serviceFee: parseFloat(booking.serviceFee || '0'),
        cleaningFee: parseFloat(booking.cleaningFee || '0'),
        taxes: parseFloat(booking.taxes || '0'),
        total: parseFloat(booking.totalAmount)
      },
      guestInfo: {
        firstName: booking.guestFirstName,
        lastName: booking.guestLastName,
        email: booking.guestEmail,
        phone: booking.guestPhone || ''
      },
      paymentInfo: {
        method: booking.paymentMethod,
        // transactionId and paidAt would come from payment processor
      },
      specialRequests: booking.specialRequests || undefined,
      createdAt: booking.createdAt.toISOString(),
      updatedAt: booking.updatedAt.toISOString(),
      listing: {
        title: booking.listingTitle || '',
        featuredImage: booking.listingImage || '',
        location: booking.listingAddress || ''
      },
      host: {
        name: booking.hostName || '',
        email: booking.hostEmail || '',
        phone: booking.hostPhone || ''
      }
    }));

    let filteredBookings = transformedBookings;

    return NextResponse.json({
      success: true,
      data: filteredBookings,
      count: filteredBookings.length
    });

  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
