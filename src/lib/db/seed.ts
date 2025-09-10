#!/usr/bin/env tsx

import * as dotenv from 'dotenv';

// Load environment variables first
dotenv.config({ path: '.env.local' });
dotenv.config();

import { db } from './connection';
import { users, listings, bookings, reviews, availability } from './schema';
import { generateSlug } from '@/lib/utils/slug';

async function main() {
  console.log('🌱 Starting database seed...');

  try {
    // Clean existing data (optional - remove in production)
    console.log('🧹 Cleaning existing data...');
    await db.delete(reviews);
    await db.delete(bookings);
    await db.delete(availability);
    await db.delete(listings);
    await db.delete(users);

    // Seed Users
    console.log('👥 Seeding users...');
    const [host1, host2, guest1] = await db.insert(users).values([
      {
        email: 'kevin.francis@example.com',
        name: 'Kevin Francis',
        firstName: 'Kevin',
        lastName: 'Francis',
        role: 'host',
        isVerified: true,
        bio: 'Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities...',
        languages: ['English', 'Japanese'],
        responseRate: 100,
        responseTime: 'within a few hours',
        isSuperhost: true,
        totalListings: 12,
        averageRating: 4.8,
      },
      {
        email: 'maria.garcia@example.com',
        name: 'Maria Garcia',
        firstName: 'Maria',
        lastName: 'Garcia',
        role: 'host',
        isVerified: true,
        bio: 'Experienced host with a passion for travel and hospitality. I love helping guests discover the best of our beautiful city.',
        languages: ['English', 'Spanish', 'French'],
        responseRate: 95,
        responseTime: 'within an hour',
        isSuperhost: false,
        totalListings: 3,
        averageRating: 4.6,
      },
      {
        email: 'john.doe@example.com',
        name: 'John Doe',
        firstName: 'John',
        lastName: 'Doe',
        role: 'guest',
        isVerified: true,
        bio: 'Travel enthusiast who loves exploring new places and meeting new people.',
        languages: ['English'],
      }
    ]).returning();

    // Seed Listings
    console.log('🏠 Seeding listings...');
    const [listing1, listing2, listing3, listing4] = await db.insert(listings).values([
      {
        hostId: host1.id,
        title: 'Beach House in Collingwood',
        description: 'Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities. Complimentary WiFi is provided.',
        extendedDescription: 'There is a private bathroom with bidet in all units, along with a hairdryer and free toiletries. The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service and a car rental service are available at the accommodation, while cycling can be enjoyed nearby.',
        listingType: 'stay',
        category: 'House',
        badge: 'Wooden house',
        basePrice: '119.00',
        currency: 'MYR',
        priceUnit: 'night',
        weekdayRate: '199.00',
        weekendRate: '219.00',
        monthlyDiscountPercent: 8.34,
        serviceFee: '0.00',
        cleaningFee: '25.00',
        taxesPercent: 12.5,
        address: 'Tokyo, Japan',
        fullAddress: 'Shibuya, Tokyo, Japan',
        latitude: 35.6762,
        longitude: 139.6503,
        mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=API_KEY&q=Tokyo,Japan',
        maxGuests: 6,
        bedrooms: 2,
        beds: 6,
        bathrooms: 3,
        propertyType: 'House',
        featuredImage: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg',
        gallery: [
          {
            id: 0,
            url: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg',
            alt: 'Main bedroom view',
            caption: 'Spacious master bedroom with ocean view'
          },
          {
            id: 1,
            url: 'https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg',
            alt: 'Living room',
            caption: 'Comfortable living area'
          }
        ],
        amenities: [
          { id: 'wifi', name: 'Free WiFi', icon: 'la-wifi', category: 'connectivity' },
          { id: 'parking', name: 'Free parking', icon: 'la-car', category: 'accessibility' },
          { id: 'pool', name: 'Swimming pool', icon: 'la-swimming-pool', category: 'recreation' },
          { id: 'kitchen', name: 'Kitchen', icon: 'la-utensils', category: 'cooking' },
          { id: 'ac', name: 'Air conditioning', icon: 'la-snowflake', category: 'climate' },
          { id: 'tv', name: 'TV', icon: 'la-tv', category: 'entertainment' }
        ],
        minimumNights: 1,
        maximumNights: 90,
        checkInTime: '08:00 - 12:00',
        checkOutTime: '14:00 - 16:00',
        instantBook: true,
        cancellationType: 'flexible',
        cancellationDescription: 'Refund 50% of the booking value when customers cancel the room within 48 hours after successful booking and 14 days before the check-in time.',
        houseRules: {
          checkIn: '08:00 am - 12:00 am',
          checkOut: '02:00 pm - 04:00 pm',
          specialRules: [
            'Ban and I will work together to keep the landscape and environment green and clean by not littering, not using stimulants and respecting people around.',
            'Do not sing karaoke past 11:30'
          ],
          smokingAllowed: false,
          petsAllowed: false,
          partiesAllowed: false
        },
        isActive: true,
        isFeatured: true,
        isTrending: true,
        views: 1247,
        saves: 89,
        shares: 23,
        totalReviews: 23,
        averageRating: 4.8,
        metaTitle: 'Beach House in Collingwood - Luxury Stay in Tokyo',
        metaDescription: 'Experience luxury beachfront living in this stunning wooden house in Collingwood.',
        keywords: ['beach house', 'tokyo', 'vacation rental', 'luxury accommodation'],
        url: generateSlug('Beach House in Collingwood'),
      },
      {
        hostId: host2.id,
        title: 'Modern Apartment in Kyoto Center',
        description: 'Beautiful modern apartment in the heart of Kyoto, perfect for exploring traditional temples and modern city life.',
        extendedDescription: 'This stylish apartment features contemporary design with traditional Japanese elements. Walking distance to major attractions.',
        listingType: 'stay',
        category: 'Apartment',
        badge: 'City center',
        basePrice: '89.00',
        currency: 'MYR',
        priceUnit: 'night',
        weekdayRate: '89.00',
        weekendRate: '109.00',
        monthlyDiscountPercent: 15.0,
        serviceFee: '10.00',
        cleaningFee: '20.00',
        taxesPercent: 10.0,
        address: 'Kyoto, Japan',
        fullAddress: 'Gion District, Kyoto, Japan',
        latitude: 35.0116,
        longitude: 135.7681,
        maxGuests: 4,
        bedrooms: 2,
        beds: 3,
        bathrooms: 2,
        propertyType: 'Apartment',
        featuredImage: 'https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg',
        gallery: [
          {
            id: 0,
            url: 'https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg',
            alt: 'Modern living space',
            caption: 'Stylish living room with city views'
          }
        ],
        amenities: [
          { id: 'wifi', name: 'Free WiFi', icon: 'la-wifi', category: 'connectivity' },
          { id: 'kitchen', name: 'Kitchen', icon: 'la-utensils', category: 'cooking' },
          { id: 'ac', name: 'Air conditioning', icon: 'la-snowflake', category: 'climate' },
          { id: 'tv', name: 'TV', icon: 'la-tv', category: 'entertainment' }
        ],
        minimumNights: 2,
        maximumNights: 30,
        checkInTime: '15:00 - 21:00',
        checkOutTime: '10:00 - 11:00',
        instantBook: false,
        cancellationType: 'moderate',
        isActive: true,
        isFeatured: false,
        isTrending: false,
        views: 534,
        saves: 42,
        shares: 8,
        totalReviews: 15,
        averageRating: 4.6,
        url: generateSlug('Modern Apartment in Kyoto Center'),
      },
      {
        hostId: host1.id,
        title: 'Luxury Villa in Bali',
        description: 'Stunning private villa with infinity pool and ocean views. Perfect for families and groups seeking luxury accommodation.',
        extendedDescription: 'This luxurious villa features modern Balinese architecture, private infinity pool, and breathtaking ocean views. Includes daily housekeeping and private chef service.',
        listingType: 'stay',
        category: 'Villa',
        badge: 'Luxury',
        basePrice: '250.00',
        currency: 'MYR',
        priceUnit: 'night',
        weekdayRate: '250.00',
        weekendRate: '299.00',
        monthlyDiscountPercent: 20.0,
        serviceFee: '25.00',
        cleaningFee: '50.00',
        taxesPercent: 10.0,
        address: 'Bali, Indonesia',
        fullAddress: 'Seminyak, Bali, Indonesia',
        latitude: -8.6705,
        longitude: 115.2126,
        maxGuests: 8,
        bedrooms: 4,
        beds: 6,
        bathrooms: 3,
        propertyType: 'Villa',
        featuredImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
        gallery: [
          {
            id: 0,
            url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
            alt: 'Villa infinity pool',
            caption: 'Infinity pool with ocean view'
          },
          {
            id: 1,
            url: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
            alt: 'Villa living room',
            caption: 'Spacious living area'
          }
        ],
        amenities: [
          { id: 'wifi', name: 'Free WiFi', icon: 'la-wifi', category: 'connectivity' },
          { id: 'pool', name: 'Private Pool', icon: 'la-swimming-pool', category: 'recreation' },
          { id: 'kitchen', name: 'Full Kitchen', icon: 'la-utensils', category: 'cooking' },
          { id: 'ac', name: 'Air Conditioning', icon: 'la-snowflake', category: 'climate' },
          { id: 'tv', name: 'Smart TV', icon: 'la-tv', category: 'entertainment' },
          { id: 'parking', name: 'Free Parking', icon: 'la-car', category: 'accessibility' }
        ],
        minimumNights: 2,
        maximumNights: 30,
        checkInTime: '14:00 - 18:00',
        checkOutTime: '11:00 - 12:00',
        instantBook: true,
        cancellationType: 'flexible',
        isActive: true,
        isFeatured: true,
        isTrending: true,
        views: 892,
        saves: 156,
        shares: 34,
        totalReviews: 28,
        averageRating: 4.9,
        url: generateSlug('Luxury Villa in Bali'),
      },
      {
        hostId: host2.id,
        title: 'Cozy Mountain Cabin',
        description: 'Perfect getaway in the mountains with hot tub and fireplace. Ideal for romantic getaways and small groups.',
        extendedDescription: 'Charming mountain cabin surrounded by pine forests. Features hot tub, fireplace, and stunning mountain views. Perfect for winter skiing or summer hiking.',
        listingType: 'stay',
        category: 'Cabin',
        badge: 'Mountain View',
        basePrice: '150.00',
        currency: 'MYR',
        priceUnit: 'night',
        weekdayRate: '150.00',
        weekendRate: '189.00',
        monthlyDiscountPercent: 25.0,
        serviceFee: '15.00',
        cleaningFee: '35.00',
        taxesPercent: 8.0,
        address: 'Aspen, Colorado',
        fullAddress: 'Aspen, Colorado, USA',
        latitude: 39.1911,
        longitude: -106.8175,
        maxGuests: 6,
        bedrooms: 2,
        beds: 4,
        bathrooms: 2,
        propertyType: 'Cabin',
        featuredImage: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg',
        gallery: [
          {
            id: 0,
            url: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg',
            alt: 'Mountain cabin exterior',
            caption: 'Cozy cabin in winter'
          },
          {
            id: 1,
            url: 'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg',
            alt: 'Cabin interior',
            caption: 'Warm interior with fireplace'
          }
        ],
        amenities: [
          { id: 'wifi', name: 'Free WiFi', icon: 'la-wifi', category: 'connectivity' },
          { id: 'kitchen', name: 'Kitchen', icon: 'la-utensils', category: 'cooking' },
          { id: 'fireplace', name: 'Fireplace', icon: 'la-fire', category: 'comfort' },
          { id: 'hottub', name: 'Hot Tub', icon: 'la-hot-tub', category: 'recreation' },
          { id: 'tv', name: 'TV', icon: 'la-tv', category: 'entertainment' },
          { id: 'parking', name: 'Free Parking', icon: 'la-car', category: 'accessibility' }
        ],
        minimumNights: 2,
        maximumNights: 14,
        checkInTime: '16:00 - 20:00',
        checkOutTime: '10:00 - 11:00',
        instantBook: false,
        cancellationType: 'moderate',
        isActive: true,
        isFeatured: false,
        isTrending: true,
        views: 678,
        saves: 89,
        shares: 23,
        totalReviews: 19,
        averageRating: 4.7,
        url: generateSlug('Cozy Mountain Cabin'),
      }
    ]).returning();

    // Seed Availability (next 90 days)
    console.log('📅 Seeding availability...');
    const availabilityData = [];
    const today = new Date();
    
    for (let i = 0; i < 90; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Make some dates unavailable randomly
      const isAvailable = Math.random() > 0.1; // 90% available
      
      availabilityData.push({
        listingId: listing1.id,
        date,
        isAvailable,
        price: isAvailable ? '119.00' : null,
        minimumStay: 1,
      });
      
      availabilityData.push({
        listingId: listing2.id,
        date,
        isAvailable: Math.random() > 0.15, // 85% available
        price: Math.random() > 0.15 ? '89.00' : null,
        minimumStay: 2,
      });
      
      availabilityData.push({
        listingId: listing3.id,
        date,
        isAvailable: Math.random() > 0.1, // 90% available
        price: Math.random() > 0.1 ? '250.00' : null,
        minimumStay: 2,
      });
      
      availabilityData.push({
        listingId: listing4.id,
        date,
        isAvailable: Math.random() > 0.2, // 80% available
        price: Math.random() > 0.2 ? '150.00' : null,
        minimumStay: 2,
      });
    }
    
    await db.insert(availability).values(availabilityData);

    // Seed Bookings
    console.log('📋 Seeding bookings...');
    const futureDate1 = new Date();
    futureDate1.setDate(futureDate1.getDate() + 30);
    const futureDate2 = new Date();
    futureDate2.setDate(futureDate2.getDate() + 33);

    const [booking1] = await db.insert(bookings).values([
      {
        listingId: listing1.id,
        guestId: guest1.id,
        hostId: host1.id,
        checkIn: futureDate1,
        checkOut: futureDate2,
        adultsCount: 2,
        childrenCount: 1,
        infantsCount: 0,
        totalGuests: 3,
        basePrice: '119.00',
        nights: 3,
        subtotal: '357.00',
        serviceFee: '0.00',
        cleaningFee: '25.00',
        taxes: '15.00',
        totalAmount: '397.00',
        guestFirstName: 'John',
        guestLastName: 'Doe',
        guestEmail: 'john.doe@example.com',
        guestPhone: '+1234567890',
        paymentMethod: 'credit_card',
        transactionId: 'txn_abc123',
        paidAt: new Date(),
        status: 'confirmed',
        confirmationCode: 'SWD-2024-001',
      }
    ]).returning();

    // Seed Reviews
    console.log('⭐ Seeding reviews...');
    await db.insert(reviews).values([
      {
        listingId: listing1.id,
        bookingId: booking1.id,
        reviewerId: guest1.id,
        hostId: host1.id,
        overallRating: 5,
        cleanlinessRating: 5,
        accuracyRating: 5,
        checkInRating: 5,
        communicationRating: 5,
        locationRating: 5,
        valueRating: 4,
        comment: 'Amazing stay! The house was exactly as described and Kevin was a wonderful host. The beach views were incredible and the amenities were top-notch.',
        isPublic: true,
        isVerified: true,
      },
      {
        listingId: listing1.id,
        reviewerId: guest1.id, // In real app, this would be a different user
        hostId: host1.id,
        overallRating: 4,
        cleanlinessRating: 4,
        accuracyRating: 5,
        checkInRating: 4,
        communicationRating: 5,
        locationRating: 5,
        valueRating: 4,
        comment: 'Great location and beautiful house. Minor issue with WiFi but Kevin resolved it quickly. Would definitely stay again!',
        isPublic: true,
        isVerified: true,
      }
    ]);

    console.log('✅ Database seeded successfully!');
    console.log(`
📊 Seeded data:
- Users: 3 (2 hosts, 1 guest)
- Listings: 4 (1 beach house, 1 apartment, 1 luxury villa, 1 mountain cabin)
- Availability: ${availabilityData.length} records (90 days for each listing)
- Bookings: 1 confirmed booking
- Reviews: 2 reviews

🚀 You can now:
1. View Drizzle Studio: npm run db:studio
2. Start your app: npm run dev
3. Test API endpoints: /api/listings, /api/listings/[id], etc.
    `);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
main().catch((error) => {
  console.error('❌ Seed script failed:', error);
  process.exit(1);
});
