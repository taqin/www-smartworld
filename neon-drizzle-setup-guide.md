# 🐘 Neon PostgreSQL + Drizzle ORM Setup Guide

## ✅ What's Been Configured

I've set up a complete database solution for your SmartWorld travel platform with:

### 📁 Files Created:
- `src/lib/db/schema.ts` - Complete database schema with all tables
- `src/lib/db/connection.ts` - Neon database connection with Drizzle
- `src/lib/db/seed.ts` - Sample data seeding script
- `drizzle.config.ts` - Drizzle configuration for migrations
- `env.example` - Environment variables template

### 🗄️ Database Schema Includes:

1. **Users Table** - Hosts, guests, and admin accounts
2. **Listings Table** - Properties with all details from your JSON schema
3. **Bookings Table** - Reservations with pricing breakdown
4. **Reviews Table** - Guest reviews with detailed ratings
5. **Availability Table** - Calendar management for listings
6. **User Favorites** - Saved listings functionality
7. **Messages Table** - Host-guest communication

### 🔧 NPM Scripts Added:
- `npm run db:generate` - Generate migrations
- `npm run db:migrate` - Push migrations to database
- `npm run db:studio` - Open Drizzle Studio (database GUI)
- `npm run db:seed` - Seed sample data

---

## 🚀 Quick Setup Steps

### 1. Create Neon Database

1. Go to [Neon.tech](https://neon.tech/) and create account
2. Create new project → Get connection string
3. Copy connection string (looks like): 
   ```
   postgresql://username:password@hostname/database?sslmode=require
   ```

### 2. Environment Setup

Create `.env.local` file (copy from `env.example`):
```env
DATABASE_URL="your-neon-connection-string-here"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Initialize Database

```bash
# Generate and push initial migration
npm run db:migrate

# Seed with sample data
npm run db:seed
```

### 4. Verify Setup

```bash
# Open Drizzle Studio to view your data
npm run db:studio
```

Visit http://localhost:4983 to see your database tables and data!

---

## 🎯 Real Database Integration

### API Route Example

I've created `route-with-db.ts` showing how to:
- ✅ Fetch listings with JOIN queries
- ✅ Include host information and reviews
- ✅ Transform data to match your frontend schema
- ✅ Handle proper error responses
- ✅ Increment view counts automatically

### Replace Mock APIs

To use real database in your existing API routes:

1. **Import database connection:**
```typescript
import { db, listings, users, reviews } from '@/lib/db/connection';
import { eq, and } from 'drizzle-orm';
```

2. **Replace mock data with queries:**
```typescript
// Instead of mockListings array
const listingsFromDB = await db
  .select()
  .from(listings)
  .where(eq(listings.isActive, true))
  .limit(20);
```

3. **Use type-safe operations:**
```typescript
const newListing = await db
  .insert(listings)
  .values(validatedData)
  .returning();
```

---

## 🔐 Production Considerations

### Security
- ✅ Connection string uses SSL (required for Neon)
- ✅ Environment variables for sensitive data
- ✅ UUID primary keys for security
- ⚠️ TODO: Add input validation with Zod
- ⚠️ TODO: Add authentication middleware

### Performance
- ✅ Proper indexes on foreign keys
- ✅ Efficient JOIN queries
- ⚠️ TODO: Add database connection pooling
- ⚠️ TODO: Add Redis caching for frequently accessed data

### Monitoring
- ✅ Neon provides built-in monitoring
- ⚠️ TODO: Add query logging in development
- ⚠️ TODO: Add error tracking (Sentry)

---

## 📊 Sample Data Provided

After running `npm run db:seed`, you'll have:

- **2 Host Users** (Kevin Francis, Maria Garcia)
- **1 Guest User** (John Doe)
- **2 Listings** (Beach House in Tokyo, Apartment in Kyoto)
- **180 Availability Records** (90 days each listing)
- **1 Confirmed Booking** (Future dates)
- **2 Reviews** (5-star and 4-star)

---

## 🛠️ Advanced Features Ready

### Real-time Availability
```typescript
// Check if dates are available
const availability = await db
  .select()
  .from(availability)
  .where(and(
    eq(availability.listingId, listingId),
    gte(availability.date, checkIn),
    lte(availability.date, checkOut),
    eq(availability.isAvailable, true)
  ));
```

### Advanced Search
```typescript
// Search with filters
const searchResults = await db
  .select()
  .from(listings)
  .where(and(
    ilike(listings.title, `%${query}%`),
    gte(listings.basePrice, minPrice),
    lte(listings.basePrice, maxPrice),
    gte(listings.maxGuests, guestCount)
  ))
  .limit(20);
```

### Review Analytics
```typescript
// Calculate average ratings by category
const reviewStats = await db
  .select({
    avgOverall: avg(reviews.overallRating),
    avgCleanliness: avg(reviews.cleanlinessRating),
    avgLocation: avg(reviews.locationRating),
    totalReviews: count(reviews.id)
  })
  .from(reviews)
  .where(eq(reviews.listingId, listingId));
```

---

## 🔄 Migration Workflow

### Making Schema Changes
1. Update `schema.ts`
2. Generate migration: `npm run db:generate`
3. Review generated SQL in `/drizzle/migrations/`
4. Apply to database: `npm run db:migrate`

### Production Deployments
- Neon handles backups automatically
- Use separate databases for staging/production
- Test migrations on staging first

---

## 🎉 Next Steps

1. **Set up your Neon database** (5 minutes)
2. **Run the seed script** to get sample data
3. **Replace mock API routes** with real database calls
4. **Add authentication** to protect user data
5. **Implement booking workflow** with payment processing

Your travel platform now has a production-ready database foundation! 🚀
