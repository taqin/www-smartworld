# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SmartWorld is a Next.js 15.4.6 booking and listing platform template built with TypeScript, Tailwind CSS, and Drizzle ORM. It supports multiple listing types including stays, experiences, cars, and real estate with a comprehensive booking system.

## Development Commands

```bash
# Development
npm run dev              # Start development server
npm start               # Start production server
npm run build           # Build for production
npm run lint            # Run ESLint

# Database (Drizzle ORM)
npm run db:generate     # Generate database migrations
npm run db:migrate      # Apply database migrations (push to DB)
npm run db:studio       # Open Drizzle Studio
npm run db:seed         # Seed database with initial data
```

## Production Deployment (Neon Database)

### Environment Setup

1. **Production Environment Variables**:
   ```bash
   # Copy the production template
   cp .env.production.example .env.production
   
   # Update with your actual Neon database URL
   DATABASE_URL="postgresql://neondb_owner:your_password@your-neon-host/neondb?sslmode=require&channel_binding=require"
   
   # Update with production email credentials
   RESEND_API_KEY="your_production_resend_api_key"
   ```

2. **Database Migration to Neon**:
   ```bash
   # Set your Neon database URL
   export DATABASE_URL="postgresql://neondb_owner:your_password@your-neon-host/neondb?sslmode=require&channel_binding=require"
   
   # Generate migrations
   npm run db:generate
   
   # Push schema to Neon (requires confirmation)
   npm run db:migrate
   
   # Seed database with test data
   npm run db:seed
   ```

3. **Production Build**:
   ```bash
   # Build for production
   npm run build
   
   # Start production server
   npm start
   ```

### Neon Database Configuration

The application is configured to work with Neon PostgreSQL serverless database:

- **Connection**: Uses `@neondatabase/serverless` driver
- **SSL**: Automatically enabled for remote connections
- **Migrations**: Drizzle ORM handles schema changes
- **Seeding**: Initial data populated via seed script

### Deployment Notes

- The application automatically detects local vs remote database connections
- SSL is enabled for all non-localhost connections
- Database schema is managed through Drizzle ORM migrations
- Environment variables should be properly set in production

## Architecture & Structure

### Next.js App Router Structure
- Uses Next.js 13+ app directory structure with server components
- Route groups organize related pages: `(stay-listings)`, `(car-listings)`, `(experience-listings)`, etc.
- Server components in `src/app/(server-components)/`
- Client components in `src/app/(client-components)/`

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL (Neon database)
- **Schema**: `src/lib/db/schema.ts` - Complete relational schema with users, listings, bookings, reviews
- **Key Tables**: users, listings, bookings, reviews, availability, userFavorites, messages
- **Enums**: listingType, bookingStatus, userRole defined in schema

### Component Architecture
- **Shared Components**: `src/shared/` - Reusable UI components
- **Navigation**: `src/shared/Navigation/` with SCSS styling
- **Listing Components**: `src/components/listing-image-gallery/`
- **Email Templates**: `src/components/emails/` using React Email
- **Global Styles**: `src/styles/index.scss` with theme colors and fonts

### Styling System
- **Primary**: Tailwind CSS v3.4.17 with custom configuration
- **SCSS**: Additional styling in `src/styles/` directory
- **Fonts**: Quicksand font from Google Fonts, Line Awesome icons
- **Dark Mode**: Built-in dark/light mode support

### Key Features
- Multi-listing types (stays, cars, experiences, real estate)
- Comprehensive booking system with pricing breakdown
- User authentication and profiles
- Review and rating system
- Real-time messaging between hosts/guests
- Availability calendar management
- Email notifications with React Email

## Development Notes

### Path Aliases
- `@/*` maps to `./src/*` for cleaner imports

### Environment Variables
- Database connection via `DATABASE_URL`
- Copy `.env.local.example` to `.env.local` and configure

### Image Handling
- Next.js Image component configured for external sources (Pexels, Unsplash, Airbnb, Google)
- Remote image patterns defined in `next.config.js`

### TypeScript Configuration
- Strict mode enabled
- Path mapping configured for `@/*` imports
- Type exports available from database schema

### Database Development
- Use `npm run db:studio` to visually manage database
- Generate migrations after schema changes with `db:generate`
- Apply changes with `db:migrate` (uses push, not traditional migrations)