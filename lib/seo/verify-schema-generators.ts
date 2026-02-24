/**
 * Verification script for schema generators
 * Feature: personal-branding-seo-domination
 * 
 * This script manually tests the schema generators to ensure they work correctly
 */

import {
  generatePersonSchema,
  generateArticleSchema,
  generateProjectSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  addSchemaId,
  createSchemaReference,
  validateSchemaRelationships,
  createSchemaGraph,
  generatePageSchemaWithRelationships,
  type PersonData,
  type ArticleData,
  type ProjectData,
  type BreadcrumbItem,
  type OrganizationData,
} from './schema-generators';

// Test data
const testPersonData: PersonData = {
  name: "Mustafa Pinjari",
  description: "Software Developer specializing in Django, AI, Web Development, and Generative Tech",
  image: "https://example.com/profile.jpg",
  url: "https://example.com",
  sameAs: [
    "https://linkedin.com/in/mustafa-pinjari",
    "https://github.com/mustafa-pinjari",
    "https://twitter.com/mustafapinjari",
  ],
  jobTitle: "Full Stack Developer",
  knowsAbout: ["Django", "AI", "Web Development", "Generative Tech"],
  alternateName: "Mustafa P",
  worksFor: {
    name: "Tech Company",
    url: "https://techcompany.com",
    logo: "https://techcompany.com/logo.png",
  },
  alumniOf: ["University of Technology"],
};

const testArticleData: ArticleData = {
  headline: "Getting Started with Django",
  description: "A comprehensive guide to Django web development",
  image: "https://example.com/django-guide.jpg",
  datePublished: new Date("2024-01-15"),
  dateModified: new Date("2024-02-20"),
  authorId: "https://example.com/#person",
  publisher: {
    name: "Mustafa Pinjari",
    url: "https://example.com",
    logo: "https://example.com/logo.png",
  },
  mainEntityOfPage: "https://example.com/blog/getting-started-with-django",
};

const testProjectData: ProjectData = {
  name: "AI Chat Application",
  description: "An intelligent chatbot powered by GPT-4",
  url: "https://example.com/projects/ai-chat",
  type: "SoftwareApplication",
  applicationCategory: "Communication",
  operatingSystem: "Web",
  screenshot: "https://example.com/ai-chat-screenshot.jpg",
  authorId: "https://example.com/#person",
};

const testBreadcrumbItems: BreadcrumbItem[] = [
  { name: "Home", url: "https://example.com" },
  { name: "Blog", url: "https://example.com/blog" },
  { name: "Getting Started with Django", url: "https://example.com/blog/getting-started-with-django" },
];

const testOrganizationData: OrganizationData = {
  name: "Tech Company",
  url: "https://techcompany.com",
  logo: "https://techcompany.com/logo.png",
  description: "Leading technology solutions provider",
};

function runVerification() {
  console.log("🔍 Verifying Schema Generators...\n");

  let allPassed = true;

  // Test 1: Person Schema Generation
  try {
    console.log("✓ Test 1: Person Schema Generation");
    const personSchema = generatePersonSchema(testPersonData);
    
    // Verify required fields
    if (!personSchema.name || personSchema.name !== "Mustafa Pinjari") {
      throw new Error("Person name is missing or incorrect");
    }
    if (!personSchema.jobTitle) {
      throw new Error("Job title is missing");
    }
    if (!personSchema.url) {
      throw new Error("URL is missing");
    }
    if (!personSchema.sameAs || personSchema.sameAs.length === 0) {
      throw new Error("sameAs array is missing or empty");
    }
    if (!personSchema.knowsAbout || personSchema.knowsAbout.length === 0) {
      throw new Error("knowsAbout array is missing or empty");
    }
    
    // Verify optional fields
    if (personSchema.alternateName !== "Mustafa P") {
      throw new Error("alternateName not set correctly");
    }
    if (!personSchema.worksFor || personSchema.worksFor.name !== "Tech Company") {
      throw new Error("worksFor not set correctly");
    }
    if (!personSchema.alumniOf || personSchema.alumniOf.length === 0) {
      throw new Error("alumniOf not set correctly");
    }
    
    console.log("  ✅ All required and optional fields present");
    console.log("  ✅ Schema structure is valid\n");
  } catch (error) {
    console.error("  ❌ Person Schema test failed:", (error as Error).message, "\n");
    allPassed = false;
  }

  // Test 2: Article Schema Generation
  try {
    console.log("✓ Test 2: Article Schema Generation");
    const articleSchema = generateArticleSchema(testArticleData);
    
    // Verify required fields
    if (!articleSchema.headline) {
      throw new Error("Headline is missing");
    }
    if (!articleSchema.description) {
      throw new Error("Description is missing");
    }
    if (!articleSchema.image) {
      throw new Error("Image is missing");
    }
    if (!articleSchema.datePublished) {
      throw new Error("datePublished is missing");
    }
    if (!articleSchema.dateModified) {
      throw new Error("dateModified is missing");
    }
    if (!articleSchema.author) {
      throw new Error("Author is missing");
    }
    if (!articleSchema.publisher) {
      throw new Error("Publisher is missing");
    }
    if (!articleSchema.mainEntityOfPage) {
      throw new Error("mainEntityOfPage is missing");
    }
    
    // Verify author reference
    if (typeof articleSchema.author === 'object' && '@id' in articleSchema.author) {
      if (articleSchema.author['@id'] !== "https://example.com/#person") {
        throw new Error("Author @id reference is incorrect");
      }
    }
    
    console.log("  ✅ All required fields present");
    console.log("  ✅ Author reference is valid");
    console.log("  ✅ Schema structure is valid\n");
  } catch (error) {
    console.error("  ❌ Article Schema test failed:", (error as Error).message, "\n");
    allPassed = false;
  }

  // Test 3: Project Schema Generation
  try {
    console.log("✓ Test 3: Project Schema Generation");
    const projectSchema = generateProjectSchema(testProjectData);
    
    // Verify required fields
    if (!projectSchema.name) {
      throw new Error("Name is missing");
    }
    if (!projectSchema.description) {
      throw new Error("Description is missing");
    }
    if (!projectSchema.url) {
      throw new Error("URL is missing");
    }
    if (!projectSchema.author) {
      throw new Error("Author is missing");
    }
    if (projectSchema['@type'] !== "SoftwareApplication") {
      throw new Error("Type is incorrect");
    }
    
    // Verify optional fields
    if (!projectSchema.applicationCategory) {
      throw new Error("applicationCategory not set");
    }
    if (!projectSchema.operatingSystem) {
      throw new Error("operatingSystem not set");
    }
    if (!projectSchema.screenshot) {
      throw new Error("screenshot not set");
    }
    
    console.log("  ✅ All required and optional fields present");
    console.log("  ✅ Schema structure is valid\n");
  } catch (error) {
    console.error("  ❌ Project Schema test failed:", (error as Error).message, "\n");
    allPassed = false;
  }

  // Test 4: Breadcrumb Schema Generation
  try {
    console.log("✓ Test 4: Breadcrumb Schema Generation");
    const breadcrumbSchema = generateBreadcrumbSchema(testBreadcrumbItems);
    
    // Verify structure
    if (!breadcrumbSchema.itemListElement || breadcrumbSchema.itemListElement.length !== 3) {
      throw new Error("itemListElement is missing or has wrong length");
    }
    
    // Verify positions
    breadcrumbSchema.itemListElement.forEach((item, index) => {
      if (item.position !== index + 1) {
        throw new Error(`Item at index ${index} has wrong position`);
      }
      if (!item.name || !item.item) {
        throw new Error(`Item at index ${index} is missing name or item`);
      }
    });
    
    console.log("  ✅ All breadcrumb items present");
    console.log("  ✅ Positions are correct");
    console.log("  ✅ Schema structure is valid\n");
  } catch (error) {
    console.error("  ❌ Breadcrumb Schema test failed:", (error as Error).message, "\n");
    allPassed = false;
  }

  // Test 5: Organization Schema Generation (with data)
  try {
    console.log("✓ Test 5: Organization Schema Generation (with data)");
    const orgSchema = generateOrganizationSchema(testOrganizationData);
    
    if (!orgSchema) {
      throw new Error("Organization schema should not be null when data is provided");
    }
    
    if (!orgSchema.name || !orgSchema.url) {
      throw new Error("Required fields are missing");
    }
    
    if (!orgSchema.logo || !orgSchema.description) {
      throw new Error("Optional fields not set correctly");
    }
    
    console.log("  ✅ Schema generated correctly with data");
    console.log("  ✅ All fields present\n");
  } catch (error) {
    console.error("  ❌ Organization Schema (with data) test failed:", (error as Error).message, "\n");
    allPassed = false;
  }

  // Test 6: Organization Schema Generation (without data)
  try {
    console.log("✓ Test 6: Organization Schema Generation (without data)");
    const orgSchema = generateOrganizationSchema();
    
    if (orgSchema !== null) {
      throw new Error("Organization schema should be null when no data is provided");
    }
    
    console.log("  ✅ Returns null when no data provided\n");
  } catch (error) {
    console.error("  ❌ Organization Schema (without data) test failed:", (error as Error).message, "\n");
    allPassed = false;
  }

  // Test 7: Schema Entity Relationships
  try {
    console.log("✓ Test 7: Schema Entity Relationships");
    
    // Create person with @id
    const personWithId = addSchemaId(generatePersonSchema(testPersonData), "https://example.com/#person");
    
    if (!personWithId['@id']) {
      throw new Error("@id not added to person schema");
    }
    
    // Create reference
    const reference = createSchemaReference("https://example.com/#person");
    if (reference['@id'] !== "https://example.com/#person") {
      throw new Error("Reference not created correctly");
    }
    
    // Validate relationships
    const articleSchema = generateArticleSchema(testArticleData);
    const referencedIds = new Set(["https://example.com/#person"]);
    const isValid = validateSchemaRelationships(articleSchema as Record<string, unknown>, referencedIds);
    
    if (!isValid) {
      throw new Error("Schema relationship validation failed");
    }
    
    console.log("  ✅ @id added correctly");
    console.log("  ✅ References created correctly");
    console.log("  ✅ Relationship validation works\n");
  } catch (error) {
    console.error("  ❌ Schema Entity Relationships test failed:", (error as Error).message, "\n");
    allPassed = false;
  }

  // Test 8: Schema Graph Creation
  try {
    console.log("✓ Test 8: Schema Graph Creation");
    
    const personWithId = addSchemaId(generatePersonSchema(testPersonData), "https://example.com/#person");
    const articleSchema = generateArticleSchema(testArticleData);
    
    const graph = createSchemaGraph([personWithId, articleSchema as Record<string, unknown>]);
    
    if (!graph['@context'] || graph['@context'] !== "https://schema.org") {
      throw new Error("@context is missing or incorrect");
    }
    
    if (!graph['@graph'] || graph['@graph'].length !== 2) {
      throw new Error("@graph is missing or has wrong length");
    }
    
    console.log("  ✅ Schema graph created correctly");
    console.log("  ✅ Contains all schemas\n");
  } catch (error) {
    console.error("  ❌ Schema Graph Creation test failed:", (error as Error).message, "\n");
    allPassed = false;
  }

  // Test 9: Page Schema with Relationships
  try {
    console.log("✓ Test 9: Page Schema with Relationships");
    
    const articleSchema = generateArticleSchema(testArticleData);
    const pageSchema = generatePageSchemaWithRelationships(
      testPersonData,
      "https://example.com/#person",
      articleSchema
    );
    
    if (!pageSchema['@graph'] || pageSchema['@graph'].length !== 2) {
      throw new Error("Page schema graph is missing or has wrong length");
    }
    
    console.log("  ✅ Page schema with relationships created correctly");
    console.log("  ✅ All entities linked properly\n");
  } catch (error) {
    console.error("  ❌ Page Schema with Relationships test failed:", (error as Error).message, "\n");
    allPassed = false;
  }

  // Summary
  console.log("═".repeat(60));
  if (allPassed) {
    console.log("✅ ALL TESTS PASSED - Schema generators are working correctly!");
  } else {
    console.log("❌ SOME TESTS FAILED - Please review the errors above");
  }
  console.log("═".repeat(60));

  return allPassed;
}

// Run verification
const success = runVerification();
process.exit(success ? 0 : 1);
