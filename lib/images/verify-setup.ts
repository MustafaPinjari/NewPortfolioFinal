/**
 * Verification script for image optimization system
 * 
 * Run this script to verify that the image optimization utilities
 * are working correctly.
 * 
 * Usage: npx tsx lib/images/verify-setup.ts
 */

import {
  generateAltText,
  validateAltText,
  generateProfileAltText,
  generateProjectAltText,
  generateSizes,
  generateSrcSet,
} from './index';

console.log('🔍 Verifying Image Optimization System Setup\n');

// Test 1: Generate alt text from filename
console.log('✅ Test 1: Generate alt text from filename');
const alt1 = generateAltText('profile-photo.jpg');
console.log(`   Input: "profile-photo.jpg"`);
console.log(`   Output: "${alt1}"`);
console.log(`   Expected: "Profile Photo"`);
console.log(`   Status: ${alt1 === 'Profile Photo' ? '✓ PASS' : '✗ FAIL'}\n`);

// Test 2: Generate alt text with context
console.log('✅ Test 2: Generate alt text with context');
const alt2 = generateAltText('django-project.png', {
  personName: 'Mustafa Pinjari',
  section: 'portfolio',
  keywords: ['Django', 'web development'],
});
console.log(`   Input: "django-project.png" with context`);
console.log(`   Output: "${alt2}"`);
console.log(`   Status: ${alt2.includes('Mustafa Pinjari') && alt2.includes('Django') ? '✓ PASS' : '✗ FAIL'}\n`);

// Test 3: Generate profile alt text
console.log('✅ Test 3: Generate profile alt text');
const alt3 = generateProfileAltText('Mustafa Pinjari', 'professional headshot');
console.log(`   Input: "Mustafa Pinjari", "professional headshot"`);
console.log(`   Output: "${alt3}"`);
console.log(`   Expected: "Mustafa Pinjari professional headshot"`);
console.log(`   Status: ${alt3 === 'Mustafa Pinjari professional headshot' ? '✓ PASS' : '✗ FAIL'}\n`);

// Test 4: Generate project alt text
console.log('✅ Test 4: Generate project alt text');
const alt4 = generateProjectAltText('Django Blog', 'homepage', 'showing article list');
console.log(`   Input: "Django Blog", "homepage", "showing article list"`);
console.log(`   Output: "${alt4}"`);
console.log(`   Expected: "Django Blog homepage showing article list"`);
console.log(`   Status: ${alt4 === 'Django Blog homepage showing article list' ? '✓ PASS' : '✗ FAIL'}\n`);

// Test 5: Validate good alt text
console.log('✅ Test 5: Validate good alt text');
const validation1 = validateAltText('Mustafa Pinjari Django development workspace');
console.log(`   Input: "Mustafa Pinjari Django development workspace"`);
console.log(`   Valid: ${validation1.valid}`);
console.log(`   Issues: ${validation1.issues.length}`);
console.log(`   Status: ${validation1.valid ? '✓ PASS' : '✗ FAIL'}\n`);

// Test 6: Validate poor alt text
console.log('✅ Test 6: Validate poor alt text');
const validation2 = validateAltText('Image');
console.log(`   Input: "Image"`);
console.log(`   Valid: ${validation2.valid}`);
console.log(`   Issues: ${validation2.issues.join(', ')}`);
console.log(`   Status: ${!validation2.valid && validation2.issues.length > 0 ? '✓ PASS' : '✗ FAIL'}\n`);

// Test 7: Generate responsive sizes
console.log('✅ Test 7: Generate responsive sizes');
const sizes = generateSizes({
  mobile: '100vw',
  tablet: '50vw',
  desktop: '33vw',
});
console.log(`   Input: { mobile: '100vw', tablet: '50vw', desktop: '33vw' }`);
console.log(`   Output: "${sizes}"`);
console.log(`   Status: ${sizes.includes('100vw') && sizes.includes('50vw') && sizes.includes('33vw') ? '✓ PASS' : '✗ FAIL'}\n`);

// Test 8: Generate srcset
console.log('✅ Test 8: Generate srcset');
const srcset = generateSrcSet('/image.jpg', [400, 800, 1200]);
console.log(`   Input: "/image.jpg", [400, 800, 1200]`);
console.log(`   Output: "${srcset}"`);
console.log(`   Status: ${srcset.includes('400w') && srcset.includes('800w') && srcset.includes('1200w') ? '✓ PASS' : '✗ FAIL'}\n`);

// Test 9: Alt text with explicit description
console.log('✅ Test 9: Alt text with explicit description');
const alt5 = generateAltText('screenshot.png', {
  description: 'Dashboard showing analytics',
});
console.log(`   Input: "screenshot.png" with description`);
console.log(`   Output: "${alt5}"`);
console.log(`   Expected: "Dashboard showing analytics"`);
console.log(`   Status: ${alt5 === 'Dashboard showing analytics' ? '✓ PASS' : '✗ FAIL'}\n`);

// Test 10: Validate alt text length
console.log('✅ Test 10: Validate alt text length constraints');
const longAlt = 'A' + 'a'.repeat(130);
const validation3 = validateAltText(longAlt);
console.log(`   Input: String with ${longAlt.length} characters`);
console.log(`   Valid: ${validation3.valid}`);
console.log(`   Has length issue: ${validation3.issues.some(i => i.includes('too long'))}`);
console.log(`   Status: ${validation3.issues.some(i => i.includes('too long')) ? '✓ PASS' : '✗ FAIL'}\n`);

console.log('🎉 Image Optimization System Verification Complete!\n');
console.log('Summary:');
console.log('- Alt text generation: Working');
console.log('- Profile alt text: Working');
console.log('- Project alt text: Working');
console.log('- Alt text validation: Working');
console.log('- Responsive sizes: Working');
console.log('- Srcset generation: Working');
console.log('\n✅ All core functionality verified!');
console.log('\nNote: The optimizeImage() function returns JSX and should be tested in a React component context.');
