/**
 * Example usage of alt text generation utilities
 * 
 * This file demonstrates how to generate SEO-friendly alt text
 * for various types of images throughout the application.
 */

import {
  generateAltText,
  validateAltText,
  generateProfileAltText,
  generateProjectAltText,
} from './alt-text-generator';

// Example 1: Basic alt text from filename
export function basicAltTextExample() {
  const alt = generateAltText('profile-photo.jpg');
  console.log('Basic alt text:', alt);
  // Output: "Profile Photo"
  return alt;
}

// Example 2: Alt text with person name
export function altTextWithPersonExample() {
  const alt = generateAltText('workspace-setup.jpg', {
    personName: 'Mustafa Pinjari',
  });
  console.log('Alt text with person:', alt);
  // Output: "Workspace Setup by Mustafa Pinjari"
  return alt;
}

// Example 3: Alt text with full context
export function altTextWithFullContextExample() {
  const alt = generateAltText('django-project-screenshot.png', {
    personName: 'Mustafa Pinjari',
    section: 'portfolio',
    keywords: ['Django', 'web development', 'Python'],
  });
  console.log('Alt text with full context:', alt);
  // Output: "Django Project Screenshot by Mustafa Pinjari - portfolio Django, web development, Python"
  return alt;
}

// Example 4: Alt text with explicit description
export function altTextWithDescriptionExample() {
  const alt = generateAltText('screenshot.png', {
    description: 'Dashboard showing real-time analytics and user engagement metrics',
  });
  console.log('Alt text with description:', alt);
  // Output: "Dashboard showing real-time analytics and user engagement metrics"
  return alt;
}

// Example 5: Profile image alt text
export function profileAltTextExample() {
  const alt = generateProfileAltText('Mustafa Pinjari', 'professional headshot');
  console.log('Profile alt text:', alt);
  // Output: "Mustafa Pinjari professional headshot"
  return alt;
}

// Example 6: Profile image without context
export function profileAltTextSimpleExample() {
  const alt = generateProfileAltText('Mustafa Pinjari');
  console.log('Simple profile alt text:', alt);
  // Output: "Mustafa Pinjari profile photo"
  return alt;
}

// Example 7: Project screenshot alt text
export function projectAltTextExample() {
  const alt = generateProjectAltText(
    'Django Blog Platform',
    'homepage',
    'showing article list and navigation'
  );
  console.log('Project alt text:', alt);
  // Output: "Django Blog Platform homepage showing article list and navigation"
  return alt;
}

// Example 8: Project screenshot without additional context
export function projectAltTextSimpleExample() {
  const alt = generateProjectAltText('AI Chat Application', 'dashboard');
  console.log('Simple project alt text:', alt);
  // Output: "AI Chat Application dashboard"
  return alt;
}

// Example 9: Validate good alt text
export function validateGoodAltTextExample() {
  const result = validateAltText('Mustafa Pinjari Django development workspace showing code editor and terminal');
  console.log('Validation result (good):', result);
  // Output: { valid: true, issues: [], suggestions: [] }
  return result;
}

// Example 10: Validate poor alt text
export function validatePoorAltTextExample() {
  const result = validateAltText('Image');
  console.log('Validation result (poor):', result);
  // Output: {
  //   valid: false,
  //   issues: ['Alt text is too short', 'Alt text is too generic'],
  //   suggestions: [
  //     'Alt text should be at least 10 characters for better SEO',
  //     'Describe what the image shows, not just that it is an image'
  //   ]
  // }
  return result;
}

// Example 11: Validate alt text with file extension
export function validateAltTextWithExtensionExample() {
  const result = validateAltText('profile-photo.jpg');
  console.log('Validation result (with extension):', result);
  // Output: {
  //   valid: false,
  //   issues: ['Alt text contains file extension'],
  //   suggestions: ['Remove file extensions from alt text']
  // }
  return result;
}

// Example 12: Validate alt text with redundant phrase
export function validateAltTextWithRedundancyExample() {
  const result = validateAltText('Image of Mustafa Pinjari working on Django project');
  console.log('Validation result (redundant):', result);
  // Output: {
  //   valid: false,
  //   issues: ['Alt text contains redundant phrases'],
  //   suggestions: ['Remove phrases like "image of" or "picture of" - just describe the content']
  // }
  return result;
}

// Example 13: Blog post featured image
export function blogPostAltTextExample() {
  const alt = generateAltText('django-tutorial-hero.webp', {
    personName: 'Mustafa Pinjari',
    section: 'blog',
    keywords: ['Django', 'Python', 'tutorial'],
    description: 'Step-by-step Django REST API tutorial with code examples',
  });
  console.log('Blog post alt text:', alt);
  // Output: "Step-by-step Django REST API tutorial with code examples"
  return alt;
}

// Example 14: Technology stack image
export function technologyStackAltTextExample() {
  const alt = generateAltText('tech-stack.png', {
    personName: 'Mustafa Pinjari',
    keywords: ['Django', 'React', 'PostgreSQL', 'Docker'],
    description: 'Technology stack diagram showing Django backend, React frontend, and PostgreSQL database',
  });
  console.log('Tech stack alt text:', alt);
  // Output: "Technology stack diagram showing Django backend, React frontend, and PostgreSQL database"
  return alt;
}

// Example 15: Certificate or achievement image
export function certificateAltTextExample() {
  const alt = generateAltText('aws-certification.jpg', {
    personName: 'Mustafa Pinjari',
    description: 'AWS Certified Solutions Architect certificate',
  });
  console.log('Certificate alt text:', alt);
  // Output: "AWS Certified Solutions Architect certificate"
  return alt;
}

// Example 16: Code snippet screenshot
export function codeSnippetAltTextExample() {
  const alt = generateAltText('code-example.png', {
    personName: 'Mustafa Pinjari',
    keywords: ['Python', 'Django', 'API'],
    description: 'Python code snippet demonstrating Django REST framework serializer implementation',
  });
  console.log('Code snippet alt text:', alt);
  // Output: "Python code snippet demonstrating Django REST framework serializer implementation"
  return alt;
}

// Example 17: Event or speaking engagement photo
export function eventPhotoAltTextExample() {
  const alt = generateProfileAltText(
    'Mustafa Pinjari',
    'speaking at tech conference about AI and web development'
  );
  console.log('Event photo alt text:', alt);
  // Output: "Mustafa Pinjari speaking at tech conference about AI and web development"
  return alt;
}

// Example 18: Team or collaboration photo
export function teamPhotoAltTextExample() {
  const alt = generateAltText('team-collaboration.jpg', {
    personName: 'Mustafa Pinjari',
    description: 'Development team collaborating on Django project during sprint planning',
  });
  console.log('Team photo alt text:', alt);
  // Output: "Development team collaborating on Django project during sprint planning"
  return alt;
}

// Example 19: Architecture diagram
export function architectureDiagramAltTextExample() {
  const alt = generateAltText('system-architecture.svg', {
    personName: 'Mustafa Pinjari',
    keywords: ['microservices', 'Django', 'AWS'],
    description: 'System architecture diagram showing microservices deployment on AWS',
  });
  console.log('Architecture diagram alt text:', alt);
  // Output: "System architecture diagram showing microservices deployment on AWS"
  return alt;
}

// Example 20: Before/after comparison
export function beforeAfterAltTextExample() {
  const alt = generateAltText('performance-comparison.png', {
    personName: 'Mustafa Pinjari',
    description: 'Performance comparison showing 50% improvement after optimization',
  });
  console.log('Before/after alt text:', alt);
  // Output: "Performance comparison showing 50% improvement after optimization"
  return alt;
}
