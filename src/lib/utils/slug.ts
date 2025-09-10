/**
 * URL slug generation utilities
 */

/**
 * Convert a string to a URL-friendly slug
 * @param text The text to convert to a slug
 * @returns URL-friendly slug string
 */
export function generateSlug(text: string): string {
  return text
    .toString()
    .normalize('NFD')                 // Normalize to decomposed form
    .replace(/[\u0300-\u036f]/g, '')   // Remove diacritics
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')             // Replace spaces with -
    .replace(/[^\w\-]+/g, '')        // Remove all non-word chars
    .replace(/\-\-+/g, '-');          // Replace multiple - with single -
}

/**
 * Generate a unique slug by checking for conflicts and adding suffixes
 * @param text The base text to convert
 * @param existingSlugs Array of existing slugs to check against
 * @param maxAttempts Maximum number of attempts to find unique slug
 * @returns Unique slug string
 */
export function generateUniqueSlug(
  text: string, 
  existingSlugs: string[] = [], 
  maxAttempts: number = 100
): string {
  const baseSlug = generateSlug(text);
  
  // If base slug doesn't exist, use it
  if (!existingSlugs.includes(baseSlug)) {
    return baseSlug;
  }
  
  // Try adding numeric suffixes
  for (let i = 1; i <= maxAttempts; i++) {
    const candidateSlug = `${baseSlug}-${i}`;
    if (!existingSlugs.includes(candidateSlug)) {
      return candidateSlug;
    }
  }
  
  // Fallback: use timestamp
  return `${baseSlug}-${Date.now()}`;
}

/**
 * Validate a slug format
 * @param slug The slug to validate
 * @returns True if slug is valid
 */
export function isValidSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug) && slug.length >= 1 && slug.length <= 255;
}

/**
 * Convert a slug back to a readable title (approximate)
 * @param slug The slug to convert
 * @returns Readable title string
 */
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}