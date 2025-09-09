CREATE TYPE "public"."booking_status" AS ENUM('pending', 'confirmed', 'cancelled', 'completed');--> statement-breakpoint
CREATE TYPE "public"."listing_type" AS ENUM('stay', 'experience', 'car', 'real_estate');--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('guest', 'host', 'admin');--> statement-breakpoint
CREATE TABLE "availability" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"listing_id" uuid NOT NULL,
	"date" timestamp NOT NULL,
	"is_available" boolean DEFAULT true,
	"price" numeric(10, 2),
	"minimum_stay" integer,
	"is_blocked" boolean DEFAULT false,
	"block_reason" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "bookings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"listing_id" uuid NOT NULL,
	"guest_id" uuid NOT NULL,
	"host_id" uuid NOT NULL,
	"check_in" timestamp NOT NULL,
	"check_out" timestamp NOT NULL,
	"adults_count" integer NOT NULL,
	"children_count" integer DEFAULT 0,
	"infants_count" integer DEFAULT 0,
	"total_guests" integer NOT NULL,
	"base_price" numeric(10, 2) NOT NULL,
	"nights" integer NOT NULL,
	"subtotal" numeric(10, 2) NOT NULL,
	"service_fee" numeric(10, 2) DEFAULT '0',
	"cleaning_fee" numeric(10, 2) DEFAULT '0',
	"taxes" numeric(10, 2) DEFAULT '0',
	"total_amount" numeric(10, 2) NOT NULL,
	"guest_first_name" varchar(100) NOT NULL,
	"guest_last_name" varchar(100) NOT NULL,
	"guest_email" varchar(255) NOT NULL,
	"guest_phone" varchar(20),
	"special_requests" text,
	"payment_method" varchar(50) NOT NULL,
	"transaction_id" varchar(255),
	"paid_at" timestamp,
	"status" "booking_status" DEFAULT 'pending' NOT NULL,
	"confirmation_code" varchar(50),
	"cancelled_at" timestamp,
	"cancellation_reason" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "listings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"host_id" uuid NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"extended_description" text,
	"listing_type" "listing_type" NOT NULL,
	"category" varchar(100),
	"badge" varchar(100),
	"base_price" numeric(10, 2) NOT NULL,
	"currency" varchar(3) DEFAULT 'USD' NOT NULL,
	"price_unit" varchar(20) DEFAULT 'night',
	"weekday_rate" numeric(10, 2),
	"weekend_rate" numeric(10, 2),
	"monthly_discount_percent" real DEFAULT 0,
	"service_fee" numeric(10, 2) DEFAULT '0',
	"cleaning_fee" numeric(10, 2) DEFAULT '0',
	"taxes_percent" real DEFAULT 0,
	"address" varchar(500) NOT NULL,
	"full_address" varchar(500),
	"latitude" real,
	"longitude" real,
	"map_embed_url" text,
	"max_guests" integer NOT NULL,
	"bedrooms" integer,
	"beds" integer,
	"bathrooms" integer,
	"property_type" varchar(100),
	"featured_image" text,
	"gallery" json DEFAULT '[]'::json,
	"amenities" json DEFAULT '[]'::json,
	"minimum_nights" integer DEFAULT 1,
	"maximum_nights" integer DEFAULT 90,
	"check_in_time" varchar(50),
	"check_out_time" varchar(50),
	"instant_book" boolean DEFAULT false,
	"advance_booking_days" integer DEFAULT 365,
	"cancellation_type" varchar(50) DEFAULT 'flexible',
	"cancellation_description" text,
	"house_rules" json,
	"is_active" boolean DEFAULT true,
	"is_featured" boolean DEFAULT false,
	"is_trending" boolean DEFAULT false,
	"is_new_listing" boolean DEFAULT true,
	"status" varchar(50) DEFAULT 'active',
	"views" integer DEFAULT 0,
	"saves" integer DEFAULT 0,
	"shares" integer DEFAULT 0,
	"total_reviews" integer DEFAULT 0,
	"average_rating" real DEFAULT 0,
	"meta_title" varchar(255),
	"meta_description" text,
	"keywords" json DEFAULT '[]'::json,
	"registration_number" varchar(100),
	"business_license" varchar(100),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "messages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"conversation_id" uuid NOT NULL,
	"sender_id" uuid NOT NULL,
	"receiver_id" uuid NOT NULL,
	"listing_id" uuid,
	"booking_id" uuid,
	"content" text NOT NULL,
	"is_read" boolean DEFAULT false,
	"read_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"listing_id" uuid NOT NULL,
	"booking_id" uuid,
	"reviewer_id" uuid NOT NULL,
	"host_id" uuid NOT NULL,
	"overall_rating" integer NOT NULL,
	"cleanliness_rating" integer,
	"accuracy_rating" integer,
	"check_in_rating" integer,
	"communication_rating" integer,
	"location_rating" integer,
	"value_rating" integer,
	"comment" text,
	"host_reply" text,
	"host_reply_date" timestamp,
	"is_public" boolean DEFAULT true,
	"is_verified" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_favorites" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"listing_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(255),
	"first_name" varchar(100),
	"last_name" varchar(100),
	"avatar" text,
	"phone" varchar(20),
	"date_of_birth" timestamp,
	"role" "user_role" DEFAULT 'guest' NOT NULL,
	"is_verified" boolean DEFAULT false,
	"joined_date" timestamp DEFAULT now() NOT NULL,
	"bio" text,
	"languages" json DEFAULT '[]'::json,
	"is_email_verified" boolean DEFAULT false,
	"is_phone_verified" boolean DEFAULT false,
	"response_rate" integer DEFAULT 0,
	"response_time" varchar(50),
	"is_superhost" boolean DEFAULT false,
	"total_listings" integer DEFAULT 0,
	"total_reviews" integer DEFAULT 0,
	"average_rating" real DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "availability" ADD CONSTRAINT "availability_listing_id_listings_id_fk" FOREIGN KEY ("listing_id") REFERENCES "public"."listings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_listing_id_listings_id_fk" FOREIGN KEY ("listing_id") REFERENCES "public"."listings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_guest_id_users_id_fk" FOREIGN KEY ("guest_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_host_id_users_id_fk" FOREIGN KEY ("host_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_host_id_users_id_fk" FOREIGN KEY ("host_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "messages" ADD CONSTRAINT "messages_sender_id_users_id_fk" FOREIGN KEY ("sender_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "messages" ADD CONSTRAINT "messages_receiver_id_users_id_fk" FOREIGN KEY ("receiver_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "messages" ADD CONSTRAINT "messages_listing_id_listings_id_fk" FOREIGN KEY ("listing_id") REFERENCES "public"."listings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "messages" ADD CONSTRAINT "messages_booking_id_bookings_id_fk" FOREIGN KEY ("booking_id") REFERENCES "public"."bookings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_listing_id_listings_id_fk" FOREIGN KEY ("listing_id") REFERENCES "public"."listings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_booking_id_bookings_id_fk" FOREIGN KEY ("booking_id") REFERENCES "public"."bookings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_reviewer_id_users_id_fk" FOREIGN KEY ("reviewer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_host_id_users_id_fk" FOREIGN KEY ("host_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_favorites" ADD CONSTRAINT "user_favorites_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_favorites" ADD CONSTRAINT "user_favorites_listing_id_listings_id_fk" FOREIGN KEY ("listing_id") REFERENCES "public"."listings"("id") ON DELETE cascade ON UPDATE no action;