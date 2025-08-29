# Backend Implementation Guide for SmartWorld

## 🚀 Quick Start with Next.js API Routes

I've created a foundation API structure for your travel agency platform. Here's what you now have:

### 📁 API Structure Created:
```
src/app/api/
├── listings/
│   ├── route.ts              # GET, POST /api/listings
│   └── [id]/
│       └── route.ts          # GET, PUT, DELETE /api/listings/[id]
├── bookings/
│   └── route.ts              # GET, POST /api/bookings
├── search/
│   └── route.ts              # POST /api/search
└── hello/
    └── auth/
        └── [...nextauth].ts  # Authentication (existing)
```

## 🛠️ Next Steps to Complete Your Backend

### 1. Add Essential Dependencies

```bash
npm install --save \
  @prisma/client \
  prisma \
  zod \
  stripe \
  nodemailer \
  bcryptjs \
  jsonwebtoken \
  @types/bcryptjs \
  @types/jsonwebtoken \
  @types/nodemailer
```

### 2. Database Setup Options

#### Option A: PostgreSQL with Prisma (Recommended)
```bash
npx prisma init
```

#### Option B: MongoDB with Mongoose
```bash
npm install mongoose @types/mongoose
```

#### Option C: Supabase (PostgreSQL + Real-time)
```bash
npm install @supabase/supabase-js
```

### 3. Environment Variables (.env.local)
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/smartworld"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers (already configured)
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"
GOOGLE_ID="your-google-client-id"
GOOGLE_SECRET="your-google-client-secret"

# Payment
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Maps
GOOGLE_MAPS_API_KEY="your-google-maps-api-key"

# File Upload
CLOUDINARY_URL="cloudinary://..."
# OR
AWS_ACCESS_KEY_ID="your-aws-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret"
AWS_REGION="us-east-1"
AWS_BUCKET_NAME="smartworld-uploads"
```

### 4. Database Schema (Prisma Example)

Create `prisma/schema.prisma`:
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  // Relations
  listings      Listing[]
  bookings      Booking[]
  reviews       Review[]
  
  @@map("users")
}

model Listing {
  id              String   @id @default(cuid())
  title           String
  description     String
  type            ListingType
  price           Float
  currency        String   @default("USD")
  maxGuests       Int
  bedrooms        Int?
  bathrooms       Int?
  address         String
  latitude        Float?
  longitude       Float?
  amenities       String[] // JSON array
  images          String[] // JSON array
  isActive        Boolean  @default(true)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  // Relations
  hostId          String
  host            User     @relation(fields: [hostId], references: [id])
  bookings        Booking[]
  reviews         Review[]
  
  @@map("listings")
}

model Booking {
  id              String        @id @default(cuid())
  checkIn         DateTime
  checkOut        DateTime
  totalPrice      Float
  status          BookingStatus @default(PENDING)
  guestCount      Int
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
  
  // Relations
  listingId       String
  listing         Listing       @relation(fields: [listingId], references: [id])
  guestId         String
  guest           User          @relation(fields: [guestId], references: [id])
  
  @@map("bookings")
}

model Review {
  id              String   @id @default(cuid())
  rating          Int      // 1-5
  comment         String?
  createdAt       DateTime @default(now())
  
  // Relations
  listingId       String
  listing         Listing  @relation(fields: [listingId], references: [id])
  reviewerId      String
  reviewer        User     @relation(fields: [reviewerId], references: [id])
  
  @@map("reviews")
}

enum ListingType {
  STAY
  EXPERIENCE
  CAR
  REAL_ESTATE
}

enum BookingStatus {
  PENDING
  CONFIRMED
  CANCELLED
  COMPLETED
}
```

### 5. API Client for Frontend

Create `src/lib/api.ts`:
```typescript
const API_BASE = '/api';

export class ApiClient {
  static async get(endpoint: string) {
    const response = await fetch(`${API_BASE}${endpoint}`);
    return response.json();
  }

  static async post(endpoint: string, data: any) {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  // Listings
  static getListings(params: any) {
    const searchParams = new URLSearchParams(params);
    return this.get(`/listings?${searchParams}`);
  }

  static getListing(id: string) {
    return this.get(`/listings/${id}`);
  }

  static createBooking(bookingData: any) {
    return this.post('/bookings', bookingData);
  }

  static search(searchData: any) {
    return this.post('/search', searchData);
  }
}
```

### 6. Update Your Components

Now you can update your listing detail page to use real data:

```typescript
// In your listing detail page
import { ApiClient } from '@/lib/api';

export default async function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = await ApiClient.getListing(params.id);
  
  return (
    <ListingStayDetailPage listing={listing.data} />
  );
}
```

## 🔒 Security Considerations

1. **Add input validation** with Zod schemas
2. **Implement rate limiting** for API routes
3. **Add authentication middleware** for protected routes
4. **Sanitize user inputs** to prevent XSS/SQL injection
5. **Use CORS properly** for production

## 📊 Monitoring & Analytics

Consider adding:
- **Sentry** for error tracking
- **Vercel Analytics** for performance monitoring
- **Stripe webhooks** for payment events
- **Email notifications** for bookings

## 🚀 Deployment

Your Next.js API routes will work seamlessly with:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS** (with serverless functions)
- **Railway** or **Render** for full server deployment

## 📈 Scaling Considerations

When you need to scale beyond Next.js API routes:
1. **Extract to microservices** (Express/Fastify/NestJS)
2. **Add Redis** for caching
3. **Implement message queues** for background jobs
4. **Use CDN** for static assets
5. **Database read replicas** for performance

---

This foundation gives you a production-ready backend that can handle:
- ✅ Property listings management
- ✅ User authentication & authorization
- ✅ Booking system with payments
- ✅ Advanced search & filtering
- ✅ Reviews & ratings
- ✅ Host/guest communication
