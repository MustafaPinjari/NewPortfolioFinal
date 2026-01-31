#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Build Check - Verifying SEO Implementation');
console.log('================================================');

// Check if required files exist
const requiredFiles = [
  'app/sitemap.ts',
  'app/robots.ts',
  'app/feed.xml/route.ts',
  'public/site.webmanifest',
  'public/browserconfig.xml',
];

const seoComponents = [
  'app/components/seo/PersonSchema.tsx',
  'app/components/seo/WebsiteSchema.tsx',
  'app/components/seo/OrganizationSchema.tsx',
  'app/components/seo/BreadcrumbSchema.tsx',
  'app/components/seo/BlogPostSchema.tsx',
  'app/components/seo/SEOHead.tsx',
];

let allFilesExist = true;

console.log('\n✅ Checking required SEO files:');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  ✓ ${file}`);
  } else {
    console.log(`  ✗ ${file} - MISSING`);
    allFilesExist = false;
  }
});

console.log('\n✅ Checking SEO components:');
seoComponents.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  ✓ ${file}`);
  } else {
    console.log(`  ✗ ${file} - MISSING`);
    allFilesExist = false;
  }
});

// Check package.json
console.log('\n✅ Checking package.json:');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(`  ✓ Project name: ${packageJson.name}`);
  console.log(`  ✓ Package manager: ${packageJson.packageManager || 'not specified'}`);
  console.log(`  ✓ Next.js version: ${packageJson.dependencies.next}`);
} catch (error) {
  console.log(`  ✗ Error reading package.json: ${error.message}`);
  allFilesExist = false;
}

// Check Next.js config
console.log('\n✅ Checking Next.js configuration:');
if (fs.existsSync('next.config.ts')) {
  console.log('  ✓ next.config.ts exists');
} else if (fs.existsSync('next.config.js')) {
  console.log('  ✓ next.config.js exists');
} else {
  console.log('  ✗ No Next.js config found');
  allFilesExist = false;
}

console.log('\n================================================');
if (allFilesExist) {
  console.log('🎉 All SEO files are in place! Build should succeed.');
  process.exit(0);
} else {
  console.log('❌ Some files are missing. Please check the errors above.');
  process.exit(1);
}