/**
 * Simple verification script for sitemap and robots.txt
 * Checks that the files exist and have the correct structure
 */

import fs from 'fs';
import path from 'path';

console.log('═══════════════════════════════════════════════════════');
console.log('  Sitemap & Robots.txt Verification');
console.log('═══════════════════════════════════════════════════════\n');

// Check sitemap.ts exists
const sitemapPath = path.join(process.cwd(), 'app', 'sitemap.ts');
const robotsPath = path.join(process.cwd(), 'app', 'robots.ts');

console.log('🔍 Checking file existence...\n');

let allChecks = true;

// Check sitemap.ts
if (fs.existsSync(sitemapPath)) {
  console.log('✅ app/sitemap.ts exists');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

  // Check for required functions
  if (sitemapContent.includes('getStaticPageUrls')) {
    console.log('✅ getStaticPageUrls() function present');
  } else {
    console.log('❌ getStaticPageUrls() function missing');
    allChecks = false;
  }

  if (sitemapContent.includes('getBlogPostUrls')) {
    console.log('✅ getBlogPostUrls() function present');
  } else {
    console.log('❌ getBlogPostUrls() function missing');
    allChecks = false;
  }

  if (sitemapContent.includes('getProjectUrls')) {
    console.log('✅ getProjectUrls() function present');
  } else {
    console.log('❌ getProjectUrls() function missing');
    allChecks = false;
  }

  if (sitemapContent.includes('export default')) {
    console.log('✅ Default export function present');
  } else {
    console.log('❌ Default export function missing');
    allChecks = false;
  }

  // Check for requirements validation comment
  if (sitemapContent.includes('Requirements 1.3')) {
    console.log('✅ Requirements 1.3 validation comment present');
  } else {
    console.log('⚠️  Requirements 1.3 validation comment missing');
  }

  // Check for proper priority and changeFrequency
  if (
    sitemapContent.includes('priority') &&
    sitemapContent.includes('changeFrequency')
  ) {
    console.log('✅ Priority and changeFrequency fields configured');
  } else {
    console.log('❌ Priority or changeFrequency fields missing');
    allChecks = false;
  }
} else {
  console.log('❌ app/sitemap.ts does not exist');
  allChecks = false;
}

console.log('');

// Check robots.ts
if (fs.existsSync(robotsPath)) {
  console.log('✅ app/robots.ts exists');
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');

  // Check for required fields
  if (robotsContent.includes('rules')) {
    console.log('✅ rules field present');
  } else {
    console.log('❌ rules field missing');
    allChecks = false;
  }

  if (robotsContent.includes('sitemap')) {
    console.log('✅ sitemap field present');
  } else {
    console.log('❌ sitemap field missing');
    allChecks = false;
  }

  if (robotsContent.includes('userAgent')) {
    console.log('✅ userAgent configuration present');
  } else {
    console.log('❌ userAgent configuration missing');
    allChecks = false;
  }

  if (robotsContent.includes('disallow')) {
    console.log('✅ disallow rules present');
  } else {
    console.log('❌ disallow rules missing');
    allChecks = false;
  }

  // Check for requirements validation comment
  if (robotsContent.includes('Requirements 1.4')) {
    console.log('✅ Requirements 1.4 validation comment present');
  } else {
    console.log('⚠️  Requirements 1.4 validation comment missing');
  }

  // Check for AI bot blocking
  if (robotsContent.includes('GPTBot') || robotsContent.includes('ChatGPT')) {
    console.log('✅ AI bot blocking configured');
  } else {
    console.log('⚠️  AI bot blocking not configured');
  }
} else {
  console.log('❌ app/robots.ts does not exist');
  allChecks = false;
}

console.log('\n═══════════════════════════════════════════════════════');
console.log('  Verification Results');
console.log('═══════════════════════════════════════════════════════\n');

if (allChecks) {
  console.log('✅ ALL CHECKS PASSED');
  console.log('\nBoth sitemap.ts and robots.ts are properly configured!');
  console.log('\nValidates: Requirements 1.3, 1.4');
  console.log('\nNext.js will automatically generate:');
  console.log('  - /sitemap.xml (from app/sitemap.ts)');
  console.log('  - /robots.txt (from app/robots.ts)');
  console.log(
    '\nThese routes will be available when the app is built and running.',
  );
  process.exit(0);
} else {
  console.log('❌ SOME CHECKS FAILED');
  console.log('\nPlease review the errors above.');
  process.exit(1);
}
