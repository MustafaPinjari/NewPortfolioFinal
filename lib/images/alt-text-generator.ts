/**
 * Context information for generating alt text
 */
export interface AltTextContext {
  pageName?: string;
  section?: string;
  personName?: string;
  keywords?: string[];
  description?: string;
}

/**
 * Generates descriptive alt text from filename and context
 * 
 * This function creates SEO-friendly alt text by:
 * 1. Extracting meaningful words from the filename
 * 2. Incorporating context information (page, section, person name)
 * 3. Including relevant keywords naturally
 * 4. Formatting the result as a human-readable description
 * 
 * @param filename - The image filename (e.g., "profile-photo.jpg", "django-project-screenshot.png")
 * @param context - Additional context to enhance the alt text
 * @returns Descriptive alt text string
 * 
 * @example
 * ```tsx
 * // Basic usage
 * generateAltText('profile-photo.jpg');
 * // Returns: "Profile photo"
 * 
 * // With context
 * generateAltText('django-project.png', {
 *   personName: 'Mustafa Pinjari',
 *   section: 'portfolio',
 *   keywords: ['Django', 'web development']
 * });
 * // Returns: "Django project by Mustafa Pinjari - portfolio web development"
 * 
 * // With description
 * generateAltText('screenshot.png', {
 *   description: 'Dashboard showing analytics data'
 * });
 * // Returns: "Dashboard showing analytics data"
 * ```
 */
export function generateAltText(
  filename: string,
  context: AltTextContext = {}
): string {
  // If explicit description is provided, use it
  if (context.description && context.description.trim()) {
    return context.description.trim();
  }

  // Extract base name without extension
  const baseName = filename
    .split('/')
    .pop() // Get filename from path
    ?.replace(/\.[^/.]+$/, '') // Remove extension
    || '';

  // Convert filename to readable words
  const words = baseName
    .split(/[-_\s]+/) // Split on hyphens, underscores, spaces
    .filter(word => word.length > 0)
    .map(word => {
      // Capitalize first letter of each word
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

  // Build alt text components
  const components: string[] = [];

  // Add filename-derived description
  if (words.length > 0) {
    components.push(words.join(' '));
  }

  // Add person name if provided
  if (context.personName) {
    components.push(`by ${context.personName}`);
  }

  // Add section context
  if (context.section) {
    components.push(`- ${context.section}`);
  }

  // Add page context
  if (context.pageName && context.pageName !== context.section) {
    components.push(`on ${context.pageName}`);
  }

  // Add keywords naturally
  if (context.keywords && context.keywords.length > 0) {
    const keywordPhrase = context.keywords.slice(0, 3).join(', ');
    components.push(keywordPhrase);
  }

  // Join components and clean up
  let altText = components.join(' ');

  // Clean up multiple spaces and trim
  altText = altText.replace(/\s+/g, ' ').trim();

  // Ensure alt text is not empty
  if (!altText) {
    altText = 'Image';
  }

  // Limit length to reasonable size (125 characters is a good practice)
  if (altText.length > 125) {
    altText = altText.substring(0, 122) + '...';
  }

  return altText;
}

/**
 * Validates if alt text meets SEO best practices
 * 
 * @param altText - The alt text to validate
 * @returns Object with validation result and suggestions
 * 
 * @example
 * ```tsx
 * const result = validateAltText('Image');
 * // Returns: { valid: false, issues: ['Alt text is too short'], suggestions: [...] }
 * ```
 */
export function validateAltText(altText: string): {
  valid: boolean;
  issues: string[];
  suggestions: string[];
} {
  const issues: string[] = [];
  const suggestions: string[] = [];

  // Check if empty
  if (!altText || altText.trim() === '') {
    issues.push('Alt text is empty');
    suggestions.push('Provide a descriptive alt text for the image');
    return { valid: false, issues, suggestions };
  }

  // Check minimum length
  if (altText.length < 10) {
    issues.push('Alt text is too short');
    suggestions.push('Alt text should be at least 10 characters for better SEO');
  }

  // Check maximum length
  if (altText.length > 125) {
    issues.push('Alt text is too long');
    suggestions.push('Keep alt text under 125 characters for better accessibility');
  }

  // Check for generic terms
  const genericTerms = ['image', 'picture', 'photo', 'graphic'];
  const lowerAlt = altText.toLowerCase();
  if (genericTerms.some(term => lowerAlt === term)) {
    issues.push('Alt text is too generic');
    suggestions.push('Describe what the image shows, not just that it is an image');
  }

  // Check for file extensions
  if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(altText)) {
    issues.push('Alt text contains file extension');
    suggestions.push('Remove file extensions from alt text');
  }

  // Check for "image of" or "picture of" redundancy
  if (/^(image|picture|photo|graphic)\s+(of|showing)/i.test(altText)) {
    issues.push('Alt text contains redundant phrases');
    suggestions.push('Remove phrases like "image of" or "picture of" - just describe the content');
  }

  return {
    valid: issues.length === 0,
    issues,
    suggestions,
  };
}

/**
 * Generates alt text specifically for profile/avatar images
 * 
 * @param personName - Name of the person in the image
 * @param context - Additional context (e.g., "professional headshot", "speaking at conference")
 * @returns Optimized alt text for profile images
 * 
 * @example
 * ```tsx
 * generateProfileAltText('Mustafa Pinjari', 'professional headshot');
 * // Returns: "Mustafa Pinjari professional headshot"
 * ```
 */
export function generateProfileAltText(
  personName: string,
  context?: string
): string {
  if (!personName || personName.trim() === '') {
    return 'Profile photo';
  }

  const parts = [personName.trim()];
  
  if (context && context.trim()) {
    parts.push(context.trim());
  } else {
    parts.push('profile photo');
  }

  return parts.join(' ');
}

/**
 * Generates alt text for project screenshots
 * 
 * @param projectName - Name of the project
 * @param screenshotType - Type of screenshot (e.g., "dashboard", "homepage", "mobile view")
 * @param additionalContext - Additional descriptive context
 * @returns Optimized alt text for project images
 * 
 * @example
 * ```tsx
 * generateProjectAltText('Django Blog', 'homepage', 'showing article list');
 * // Returns: "Django Blog homepage showing article list"
 * ```
 */
export function generateProjectAltText(
  projectName: string,
  screenshotType?: string,
  additionalContext?: string
): string {
  const parts = [projectName];

  if (screenshotType) {
    parts.push(screenshotType);
  }

  if (additionalContext) {
    parts.push(additionalContext);
  }

  return parts.join(' ');
}
