/**
 * Blog System Verification Script
 * Feature: personal-branding-seo-domination
 */

import { getAllBlogPosts, getBlogPostBySlug, calculateReadingTime } from './blog-manager';
import { validateContentLength, calculateKeywordDensity, validateKeywordDensity } from './content-validator';
import { generateSlug, isValidSlug } from './slug-generator';

console.log('🔍 Verifying Blog Management System...\n');

// Test 1: Get all blog posts
console.log('✅ Test 1: getAllBlogPosts()');
try {
  const posts = getAllBlogPosts();
  console.log(`   Found ${posts.length} blog posts`);
  if (posts.length > 0) {
    console.log(`   First post: "${posts[0].title}"`);
    console.log(`   Reading time: ${posts[0].readingTime} minutes`);
  }
} catch (error) {
  console.log(`   ⚠️  Error: ${error}`);
}

// Test 2: Get blog post by slug
console.log('\n✅ Test 2: getBlogPostBySlug()');
try {
  const posts = getAllBlogPosts();
  if (posts.length > 0) {
    const post = getBlogPostBySlug(posts[0].slug);
    if (post) {
      console.log(`   Retrieved post: "${post.title}"`);
      console.log(`   Author: ${post.author}`);
      console.log(`   Tags: ${post.tags.join(', ')}`);
    }
  } else {
    console.log('   No posts available to test');
  }
} catch (error) {
  console.log(`   ⚠️  Error: ${error}`);
}

// Test 3: Calculate reading time
console.log('\n✅ Test 3: calculateReadingTime()');
const sampleContent = Array(400).fill('word').join(' ');
const readingTime = calculateReadingTime(sampleContent);
console.log(`   400 words = ${readingTime} minutes reading time`);

// Test 4: Validate content length
console.log('\n✅ Test 4: validateContentLength()');
const shortContent = Array(500).fill('word').join(' ');
const longContent = Array(1600).fill('word').join(' ');
const shortResult = validateContentLength(shortContent);
const longResult = validateContentLength(longContent);
console.log(`   500 words: ${shortResult.isValid ? 'PASS' : 'FAIL'} (expected FAIL)`);
console.log(`   1600 words: ${longResult.isValid ? 'PASS' : 'FAIL'} (expected PASS)`);

// Test 5: Calculate keyword density
console.log('\n✅ Test 5: calculateKeywordDensity()');
const testContent = Array(100).fill('word').join(' ') + ' Django Django';
const density = calculateKeywordDensity(testContent, 'Django');
console.log(`   Keyword "Django" density: ${density}%`);

// Test 6: Validate keyword density
console.log('\n✅ Test 6: validateKeywordDensity()');
const densityResult = validateKeywordDensity(testContent, 'Django', 1, 3);
console.log(`   Density validation: ${densityResult.isValid ? 'PASS' : 'FAIL'}`);
if (densityResult.warnings.length > 0) {
  console.log(`   Warnings: ${densityResult.warnings[0]}`);
}

// Test 7: Generate slug
console.log('\n✅ Test 7: generateSlug()');
const titles = [
  'How to Build a Django App',
  'React & TypeScript: Best Practices!',
  'My Awesome Blog Post',
];
titles.forEach((title) => {
  const slug = generateSlug(title);
  console.log(`   "${title}" → "${slug}"`);
});

// Test 8: Validate slug
console.log('\n✅ Test 8: isValidSlug()');
const slugs = ['my-blog-post', 'test123', 'My Post', 'post_title'];
slugs.forEach((slug) => {
  const isValid = isValidSlug(slug);
  console.log(`   "${slug}": ${isValid ? 'VALID' : 'INVALID'}`);
});

console.log('\n✨ Blog Management System verification complete!\n');
