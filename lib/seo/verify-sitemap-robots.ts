/**
 * Verification script for sitemap and robots.txt
 * This script validates that both functions work correctly
 */

import sitemap from '../../app/sitemap';
import robots from '../../app/robots';

async function verifySitemap() {
  console.log('🔍 Verifying sitemap.xml generation...\n');
  
  try {
    const sitemapEntries = await sitemap();
    
    // Check that sitemap has entries
    if (sitemapEntries.length === 0) {
      console.error('❌ ERROR: Sitemap has no entries');
      return false;
    }
    
    console.log(`✅ Sitemap generated with ${sitemapEntries.length} entries`);
    
    // Verify all entries have required fields
    const invalidEntries = sitemapEntries.filter(
      entry => !entry.url || !entry.lastModified || !entry.changeFrequency || entry.priority === undefined
    );
    
    if (invalidEntries.length > 0) {
      console.error(`❌ ERROR: ${invalidEntries.length} entries missing required fields`);
      return false;
    }
    
    console.log('✅ All entries have required fields (url, lastModified, changeFrequency, priority)');
    
    // Check for homepage
    const hasHomepage = sitemapEntries.some(entry => 
      entry.url === 'https://mustafapinjari.live' || entry.url === 'https://mustafapinjari.live/'
    );
    
    if (!hasHomepage) {
      console.error('❌ ERROR: Homepage not found in sitemap');
      return false;
    }
    
    console.log('✅ Homepage included in sitemap');
    
    // Check for blog posts
    const blogPosts = sitemapEntries.filter(entry => entry.url.includes('/thoughts/'));
    console.log(`✅ ${blogPosts.length} blog posts included`);
    
    // Check for projects
    const projectPages = sitemapEntries.filter(entry => entry.url.includes('/projects/'));
    console.log(`✅ ${projectPages.length} project pages included`);
    
    // Sample some entries
    console.log('\n📋 Sample sitemap entries:');
    sitemapEntries.slice(0, 3).forEach(entry => {
      console.log(`  - ${entry.url}`);
      console.log(`    Priority: ${entry.priority}, Change: ${entry.changeFrequency}`);
    });
    
    return true;
  } catch (error) {
    console.error('❌ ERROR generating sitemap:', error);
    return false;
  }
}

function verifyRobots() {
  console.log('\n🔍 Verifying robots.txt generation...\n');
  
  try {
    const robotsConfig = robots();
    
    // Check that robots has rules
    if (!robotsConfig.rules || robotsConfig.rules.length === 0) {
      console.error('❌ ERROR: Robots.txt has no rules');
      return false;
    }
    
    console.log(`✅ Robots.txt generated with ${robotsConfig.rules.length} rule sets`);
    
    // Check for sitemap URL
    if (!robotsConfig.sitemap) {
      console.error('❌ ERROR: Sitemap URL not included in robots.txt');
      return false;
    }
    
    console.log(`✅ Sitemap URL included: ${robotsConfig.sitemap}`);
    
    // Check for host
    if (!robotsConfig.host) {
      console.error('❌ ERROR: Host not specified in robots.txt');
      return false;
    }
    
    console.log(`✅ Host specified: ${robotsConfig.host}`);
    
    // Check for wildcard user agent
    const hasWildcard = robotsConfig.rules.some(rule => rule.userAgent === '*');
    
    if (!hasWildcard) {
      console.error('❌ ERROR: No wildcard (*) user agent rule found');
      return false;
    }
    
    console.log('✅ Wildcard user agent rule present');
    
    // Check for disallow rules
    const wildcardRule = robotsConfig.rules.find(rule => rule.userAgent === '*');
    if (wildcardRule && wildcardRule.disallow && wildcardRule.disallow.length > 0) {
      console.log(`✅ ${wildcardRule.disallow.length} paths disallowed for crawling`);
      console.log('   Disallowed paths:', wildcardRule.disallow.join(', '));
    }
    
    // Check for AI bot blocking
    const aiBotsBlocked = robotsConfig.rules.filter(rule => 
      ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Claude-Web'].includes(rule.userAgent)
    );
    
    console.log(`✅ ${aiBotsBlocked.length} AI bots blocked from crawling`);
    
    return true;
  } catch (error) {
    console.error('❌ ERROR generating robots.txt:', error);
    return false;
  }
}

async function runVerification() {
  console.log('═══════════════════════════════════════════════════════');
  console.log('  Sitemap & Robots.txt Verification');
  console.log('═══════════════════════════════════════════════════════\n');
  
  const sitemapValid = await verifySitemap();
  const robotsValid = verifyRobots();
  
  console.log('\n═══════════════════════════════════════════════════════');
  console.log('  Verification Results');
  console.log('═══════════════════════════════════════════════════════\n');
  
  if (sitemapValid && robotsValid) {
    console.log('✅ ALL CHECKS PASSED');
    console.log('\nBoth sitemap.xml and robots.txt are working correctly!');
    console.log('\nValidates: Requirements 1.3, 1.4');
    process.exit(0);
  } else {
    console.log('❌ SOME CHECKS FAILED');
    console.log('\nPlease review the errors above.');
    process.exit(1);
  }
}

// Run verification
runVerification();
