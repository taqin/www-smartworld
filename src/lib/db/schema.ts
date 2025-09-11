import { 
  pgTable, 
  text, 
  timestamp, 
  uuid, 
  integer, 
  decimal, 
  boolean, 
  json,
  varchar,
  real,
  pgEnum
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const listingTypeEnum = pgEnum('listing_type', ['stay', 'experience', 'car', 'real_estate']);
export const bookingStatusEnum = pgEnum('booking_status', ['pending', 'confirmed', 'cancelled', 'completed']);
export const userRoleEnum = pgEnum('user_role', ['guest', 'host', 'admin']);

// Users table
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  firstName: varchar('first_name', { length: 100 }),
  lastName: varchar('last_name', { length: 100 }),
  avatar: text('avatar'),
  phone: varchar('phone', { length: 20 }),
  dateOfBirth: timestamp('date_of_birth'),
  role: userRoleEnum('role').default('guest').notNull(),
  isVerified: boolean('is_verified').default(false),
  joinedDate: timestamp('joined_date').defaultNow().notNull(),
  bio: text('bio'),
  languages: json('languages').$type<string[]>().default([]),
  isEmailVerified: boolean('is_email_verified').default(false),
  isPhoneVerified: boolean('is_phone_verified').default(false),
  responseRate: integer('response_rate').default(0),
  responseTime: varchar('response_time', { length: 50 }),
  isSuperhost: boolean('is_superhost').default(false),
  totalListings: integer('total_listings').default(0),
  totalReviews: integer('total_reviews').default(0),
  averageRating: real('average_rating').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Listings table
export const listings = pgTable('listings', {
  id: uuid('id').primaryKey().defaultRandom(),
  hostId: uuid('host_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  extendedDescription: text('extended_description'),
  listingType: listingTypeEnum('listing_type').notNull(),
  category: varchar('category', { length: 100 }),
  badge: varchar('badge', { length: 100 }),
  
  // Pricing
  basePrice: decimal('base_price', { precision: 10, scale: 2 }).notNull(),
  currency: varchar('currency', { length: 3 }).default('MYR').notNull(),
  priceUnit: varchar('price_unit', { length: 20 }).default('night'),
  weekdayRate: decimal('weekday_rate', { precision: 10, scale: 2 }),
  weekendRate: decimal('weekend_rate', { precision: 10, scale: 2 }),
  monthlyDiscountPercent: real('monthly_discount_percent').default(0),
  serviceFee: decimal('service_fee', { precision: 10, scale: 2 }).default('0'),
  cleaningFee: decimal('cleaning_fee', { precision: 10, scale: 2 }).default('0'),
  taxesPercent: real('taxes_percent').default(0),
  
  // Location
  address: varchar('address', { length: 500 }).notNull(),
  fullAddress: varchar('full_address', { length: 500 }),
  latitude: real('latitude'),
  longitude: real('longitude'),
  mapEmbedUrl: text('map_embed_url'),
  
  // Accommodation details
  maxGuests: integer('max_guests').notNull(),
  bedrooms: integer('bedrooms'),
  beds: integer('beds'),
  bathrooms: integer('bathrooms'),
  propertyType: varchar('property_type', { length: 100 }),
  
  // Media
  featuredImage: text('featured_image'),
  gallery: json('gallery').$type<Array<{
    id: number;
    url: string;
    alt: string;
    caption: string;
  }>>().default([]),
  
  // Amenities and features
  amenities: json('amenities').$type<Array<{
    id: string;
    name: string;
    icon: string;
    category: string;
  }>>().default([]),

  // Experience/Tour specific data
  itinerary: json('itinerary').$type<Array<{
    day: number;
    title: string;
    description: string;
    activities: Array<{
      time: string;
      activity: string;
      location?: string;
      duration?: string;
    }>;
  }>>().default([]),

  travelOptions: json('travel_options').$type<{
    budgetLevels: Array<{
      id: string;
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      priceAdjustment?: number; // percentage adjustment from base price
    }>;
    travelTypes: Array<{
      id: string;
      title: string;
      description: string;
      icon: string;
      features: string[];
      minGroupSize?: number;
      maxGroupSize?: number;
      priceAdjustment?: number; // percentage adjustment from base price
    }>;
  }>().default({
    budgetLevels: [
      {
        id: 'mid-range',
        title: 'Mid Range',
        subtitle: 'Quality & Value',
        description: 'Comfortable accommodations with good amenities',
        features: ['3-4 star hotels', 'Private transfers', 'Guided tours', 'Quality meals'],
        priceAdjustment: 25
      },
      {
        id: 'economy',
        title: 'Economy',
        subtitle: 'Basic Comfort',
        description: 'Clean and simple accommodations',
        features: ['2-3 star hotels', 'Shared transfers', 'Group tours', 'Local meals'],
        priceAdjustment: 0
      },
      {
        id: 'budget-friendly',
        title: 'Budget Friendly',
        subtitle: 'Backpacking',
        description: 'Affordable options for budget travelers',
        features: ['Hostels/guesthouses', 'Public transport', 'Self-guided', 'Street food'],
        priceAdjustment: -25
      }
    ],
    travelTypes: [
      {
        id: 'family-multi',
        title: 'Family & Multi-Generational',
        description: 'Perfect for families with children and elderly members',
        icon: 'la-users',
        features: ['Kid-friendly activities', 'Elderly-accessible', 'Family rooms', 'Child care options'],
        minGroupSize: 2,
        maxGroupSize: 12,
        priceAdjustment: 10
      },
      {
        id: 'group-kids',
        title: 'Group (Kids-Friendly)',
        description: 'Group travel with children welcome',
        icon: 'la-child',
        features: ['Family-oriented tours', 'Child discounts', 'Kid-friendly meals', 'Play areas'],
        minGroupSize: 4,
        maxGroupSize: 20,
        priceAdjustment: 5
      },
      {
        id: 'group-adults',
        title: 'Group (Adults Only)',
        description: 'Adult-focused group experiences',
        icon: 'la-user-friends',
        features: ['Adult activities', 'Nightlife options', 'Romantic settings', 'Adult-oriented tours'],
        minGroupSize: 2,
        maxGroupSize: 16,
        priceAdjustment: 0
      },
      {
        id: 'private-fit',
        title: 'Private Group (FIT: Adults Only)',
        description: 'Exclusive private tours for adults',
        icon: 'la-user-lock',
        features: ['Personalized itinerary', 'Private guide', 'Flexible schedule', 'Exclusive access'],
        minGroupSize: 1,
        maxGroupSize: 8,
        priceAdjustment: 50
      }
    ]
  }),

  // Experience specific fields
  experienceDetails: json('experience_details').$type<{
    duration: string; // e.g., "3 days 2 nights", "3.5 hours"
    durationHours: number;
    difficulty: 'Easy' | 'Moderate' | 'Challenging';
    languages: string[];
    meetingPoint: string;
    startTime: string;
    minAge?: number;
    maxAge?: number;
    physicalRequirements?: string[];
    whatToBring?: string[];
    dressCode?: string;
    safetyEquipment?: string[];
    insuranceInfo?: string;
    emergencyContact?: string;
  }>().default({
    duration: '',
    durationHours: 0,
    difficulty: 'Easy',
    languages: [],
    meetingPoint: '',
    startTime: '',
  }),
  
  // Availability and booking rules
  minimumNights: integer('minimum_nights').default(1),
  maximumNights: integer('maximum_nights').default(90),
  checkInTime: varchar('check_in_time', { length: 50 }),
  checkOutTime: varchar('check_out_time', { length: 50 }),
  instantBook: boolean('instant_book').default(false),
  advanceBookingDays: integer('advance_booking_days').default(365),
  
  // Policies
  cancellationType: varchar('cancellation_type', { length: 50 }).default('flexible'),
  cancellationDescription: text('cancellation_description'),
  houseRules: json('house_rules').$type<{
    checkIn: string;
    checkOut: string;
    specialRules: string[];
    smokingAllowed: boolean;
    petsAllowed: boolean;
    partiesAllowed: boolean;
  }>(),
  
  // Status and metadata
  isActive: boolean('is_active').default(true),
  isFeatured: boolean('is_featured').default(false),
  isTrending: boolean('is_trending').default(false),
  isNewListing: boolean('is_new_listing').default(true),
  status: varchar('status', { length: 50 }).default('active'),
  views: integer('views').default(0),
  saves: integer('saves').default(0),
  shares: integer('shares').default(0),
  totalReviews: integer('total_reviews').default(0),
  averageRating: real('average_rating').default(0),
  
  // SEO
  metaTitle: varchar('meta_title', { length: 255 }),
  metaDescription: text('meta_description'),
  keywords: json('keywords').$type<string[]>().default([]),
  
  // URL
  url: varchar('url', { length: 255 }).unique().notNull(),
  
  // Legal
  registrationNumber: varchar('registration_number', { length: 100 }),
  businessLicense: varchar('business_license', { length: 100 }),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Bookings table
export const bookings = pgTable('bookings', {
  id: uuid('id').primaryKey().defaultRandom(),
  listingId: uuid('listing_id').notNull().references(() => listings.id, { onDelete: 'cascade' }),
  guestId: uuid('guest_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  hostId: uuid('host_id').notNull().references(() => users.id),
  
  // Dates and guests
  checkIn: timestamp('check_in').notNull(),
  checkOut: timestamp('check_out').notNull(),
  adultsCount: integer('adults_count').notNull(),
  childrenCount: integer('children_count').default(0),
  infantsCount: integer('infants_count').default(0),
  totalGuests: integer('total_guests').notNull(),
  
  // Pricing breakdown
  basePrice: decimal('base_price', { precision: 10, scale: 2 }).notNull(),
  nights: integer('nights').notNull(),
  subtotal: decimal('subtotal', { precision: 10, scale: 2 }).notNull(),
  serviceFee: decimal('service_fee', { precision: 10, scale: 2 }).default('0'),
  cleaningFee: decimal('cleaning_fee', { precision: 10, scale: 2 }).default('0'),
  taxes: decimal('taxes', { precision: 10, scale: 2 }).default('0'),
  totalAmount: decimal('total_amount', { precision: 10, scale: 2 }).notNull(),
  
  // Guest information
  guestFirstName: varchar('guest_first_name', { length: 100 }).notNull(),
  guestLastName: varchar('guest_last_name', { length: 100 }).notNull(),
  guestEmail: varchar('guest_email', { length: 255 }).notNull(),
  guestPhone: varchar('guest_phone', { length: 20 }),
  specialRequests: text('special_requests'),
  
  // Payment information
  paymentMethod: varchar('payment_method', { length: 50 }).notNull(),
  transactionId: varchar('transaction_id', { length: 255 }),
  paidAt: timestamp('paid_at'),

  // Travel experience options (for experience/tour bookings)
  selectedBudget: varchar('selected_budget', { length: 50 }), // budget level id
  selectedTravelType: varchar('selected_travel_type', { length: 50 }), // travel type id
  experienceOptions: json('experience_options').$type<{
    groupSize: number;
    specialRequests?: string[];
    dietaryRestrictions?: string[];
    accessibilityNeeds?: string[];
    customItinerary?: boolean;
    additionalServices?: string[];
  }>().default({
    groupSize: 1,
    specialRequests: [],
    dietaryRestrictions: [],
    accessibilityNeeds: [],
    customItinerary: false,
    additionalServices: [],
  }),
  
  // Status and timestamps
  status: bookingStatusEnum('status').default('pending').notNull(),
  confirmationCode: varchar('confirmation_code', { length: 50 }),
  cancelledAt: timestamp('cancelled_at'),
  cancellationReason: text('cancellation_reason'),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Reviews table
export const reviews = pgTable('reviews', {
  id: uuid('id').primaryKey().defaultRandom(),
  listingId: uuid('listing_id').notNull().references(() => listings.id, { onDelete: 'cascade' }),
  bookingId: uuid('booking_id').references(() => bookings.id, { onDelete: 'cascade' }),
  reviewerId: uuid('reviewer_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  hostId: uuid('host_id').notNull().references(() => users.id),
  
  // Ratings (1-5 scale)
  overallRating: integer('overall_rating').notNull(),
  cleanlinessRating: integer('cleanliness_rating'),
  accuracyRating: integer('accuracy_rating'),
  checkInRating: integer('check_in_rating'),
  communicationRating: integer('communication_rating'),
  locationRating: integer('location_rating'),
  valueRating: integer('value_rating'),
  
  // Review content
  comment: text('comment'),
  hostReply: text('host_reply'),
  hostReplyDate: timestamp('host_reply_date'),
  
  // Metadata
  isPublic: boolean('is_public').default(true),
  isVerified: boolean('is_verified').default(false),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Listing availability calendar
export const availability = pgTable('availability', {
  id: uuid('id').primaryKey().defaultRandom(),
  listingId: uuid('listing_id').notNull().references(() => listings.id, { onDelete: 'cascade' }),
  date: timestamp('date').notNull(),
  isAvailable: boolean('is_available').default(true),
  price: decimal('price', { precision: 10, scale: 2 }),
  minimumStay: integer('minimum_stay'),
  isBlocked: boolean('is_blocked').default(false),
  blockReason: varchar('block_reason', { length: 255 }),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// User favorites/saved listings
export const userFavorites = pgTable('user_favorites', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  listingId: uuid('listing_id').notNull().references(() => listings.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Messages between hosts and guests
export const messages = pgTable('messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  conversationId: uuid('conversation_id').notNull(),
  senderId: uuid('sender_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  receiverId: uuid('receiver_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  listingId: uuid('listing_id').references(() => listings.id, { onDelete: 'cascade' }),
  bookingId: uuid('booking_id').references(() => bookings.id, { onDelete: 'cascade' }),
  
  content: text('content').notNull(),
  isRead: boolean('is_read').default(false),
  readAt: timestamp('read_at'),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  listings: many(listings),
  bookings: many(bookings),
  reviews: many(reviews),
  favorites: many(userFavorites),
  sentMessages: many(messages, { relationName: 'sender' }),
  receivedMessages: many(messages, { relationName: 'receiver' }),
}));

export const listingsRelations = relations(listings, ({ one, many }) => ({
  host: one(users, { fields: [listings.hostId], references: [users.id] }),
  bookings: many(bookings),
  reviews: many(reviews),
  availability: many(availability),
  favorites: many(userFavorites),
  messages: many(messages),
}));

export const bookingsRelations = relations(bookings, ({ one, many }) => ({
  listing: one(listings, { fields: [bookings.listingId], references: [listings.id] }),
  guest: one(users, { fields: [bookings.guestId], references: [users.id], relationName: 'guest' }),
  host: one(users, { fields: [bookings.hostId], references: [users.id], relationName: 'host' }),
  reviews: many(reviews),
  messages: many(messages),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  listing: one(listings, { fields: [reviews.listingId], references: [listings.id] }),
  booking: one(bookings, { fields: [reviews.bookingId], references: [bookings.id] }),
  reviewer: one(users, { fields: [reviews.reviewerId], references: [users.id], relationName: 'reviewer' }),
  host: one(users, { fields: [reviews.hostId], references: [users.id], relationName: 'host' }),
}));

export const availabilityRelations = relations(availability, ({ one }) => ({
  listing: one(listings, { fields: [availability.listingId], references: [listings.id] }),
}));

export const userFavoritesRelations = relations(userFavorites, ({ one }) => ({
  user: one(users, { fields: [userFavorites.userId], references: [users.id] }),
  listing: one(listings, { fields: [userFavorites.listingId], references: [listings.id] }),
}));

export const messagesRelations = relations(messages, ({ one }) => ({
  sender: one(users, { fields: [messages.senderId], references: [users.id], relationName: 'sender' }),
  receiver: one(users, { fields: [messages.receiverId], references: [users.id], relationName: 'receiver' }),
  listing: one(listings, { fields: [messages.listingId], references: [listings.id] }),
  booking: one(bookings, { fields: [messages.bookingId], references: [bookings.id] }),
}));

// Type exports for use in API routes
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Listing = typeof listings.$inferSelect;
export type NewListing = typeof listings.$inferInsert;
export type Booking = typeof bookings.$inferSelect;
export type NewBooking = typeof bookings.$inferInsert;
export type Review = typeof reviews.$inferSelect;
export type NewReview = typeof reviews.$inferInsert;
