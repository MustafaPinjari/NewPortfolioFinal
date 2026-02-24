/**
 * URL Slug Generator
 * Feature: personal-branding-seo-domination
 * Requirements: 4.5
 */

/**
 * Generate a URL-safe slug from a title
 * Requirements: 4.5
 * 
 * Converts titles to URL-safe slugs:
 * - Lowercase
 * - Hyphenated
 * - No special characters
 * - No leading/trailing hyphens
 * 
 * @param title - The title to convert to a slug
 * @returns URL-safe slug
 * 
 * @example
 * generateSlug("How to Build a Django App") // "how-to-build-a-django-app"
 * generateSlug("React & TypeScript: Best Practices!") // "react-typescript-best-practices"
 */
export function generateSlug(title: string): string {
  if (!title || title.trim().length === 0) {
    return '';
  }

  return title
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading/trailing whitespace
    .normalize('NFD') // Normalize unicode characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters (keep spaces and hyphens)
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Generate a unique slug by appending a number if needed
 * 
 * @param title - The title to convert to a slug
 * @param existingSlugs - Array of existing slugs to check against
 * @returns Unique URL-safe slug
 * 
 * @example
 * generateUniqueSlug("My Post", ["my-post"]) // "my-post-2"
 * generateUniqueSlug("My Post", ["my-post", "my-post-2"]) // "my-post-3"
 */
export function generateUniqueSlug(
  title: string,
  existingSlugs: string[]
): string {
  const baseSlug = generateSlug(title);
  
  if (!existingSlugs.includes(baseSlug)) {
    return baseSlug;
  }

  // Find the next available number
  let counter = 2;
  let uniqueSlug = `${baseSlug}-${counter}`;
  
  while (existingSlugs.includes(uniqueSlug)) {
    counter++;
    uniqueSlug = `${baseSlug}-${counter}`;
  }

  return uniqueSlug;
}

/**
 * Validate if a string is a valid slug
 * 
 * @param slug - The slug to validate
 * @returns True if valid, false otherwise
 */
export function isValidSlug(slug: string): boolean {
  if (!slug || slug.trim().length === 0) {
    return false;
  }

  // Valid slug: lowercase, alphanumeric, hyphens only, no leading/trailing hyphens
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}
