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