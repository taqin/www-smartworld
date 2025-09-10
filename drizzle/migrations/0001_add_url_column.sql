-- First, add the URL column without the unique constraint
ALTER TABLE "listings" ADD COLUMN "url" varchar(255);

-- Update existing records with URL slugs
UPDATE "listings" SET "url" = 'beach-house-in-collingwood' WHERE "title" = 'Beach House in Collingwood';
UPDATE "listings" SET "url" = 'modern-apartment-in-kyoto-center' WHERE "title" = 'Modern Apartment in Kyoto Center';
UPDATE "listings" SET "url" = 'luxury-villa-in-bali' WHERE "title" = 'Luxury Villa in Bali';
UPDATE "listings" SET "url" = 'cozy-mountain-cabin' WHERE "title" = 'Cozy Mountain Cabin';

-- Now add the unique constraint
ALTER TABLE "listings" ADD CONSTRAINT "listings_url_unique" UNIQUE("url");

-- Make the column NOT NULL
ALTER TABLE "listings" ALTER COLUMN "url" SET NOT NULL;