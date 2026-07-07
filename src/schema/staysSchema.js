import { MAHAKAL_TEMPLE } from '../utils/staysConstants';

/**
 * Generate WebPage schema for Stays Directory
 */
export const generateWebPageSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Find Your Perfect Stay in Ujjain',
    description:
      'Discover verified hotels, dharamshalas, ashrams and guest houses in Ujjain near Mahakaleshwar Temple. Book pilgrimage accommodation for Simhastha 2028.',
    url: 'https://www.mysimhastha.com/stays',
    isPartOf: {
      '@type': 'WebSite',
      url: 'https://www.mysimhastha.com',
      name: 'MySimhastha',
    },
    image: 'https://www.mysimhastha.com/og-stays.jpg',
    author: {
      '@type': 'Organization',
      name: 'MySimhastha',
    },
  };
};

/**
 * Generate LocalBusiness schema for a stay property
 */
export const generateLocalBusinessSchema = (stay) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: stay.name,
    description: stay.short_description || stay.description,
    url: `https://www.mysimhastha.com/stays/${stay.slug}`,
    image: stay.featured_image || stay.image,
    address: {
      '@type': 'PostalAddress',
      streetAddress: stay.address,
      addressLocality: stay.locality,
      addressRegion: stay.state,
      postalCode: stay.postal_code,
      addressCountry: 'IN',
    },
    telephone: stay.phone,
    priceRange: `₹${stay.price_from}-${stay.price_to}`,
  };

  // Add rating if available
  if (stay.rating && stay.review_count) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: stay.rating.toString(),
      reviewCount: stay.review_count.toString(),
      ratingCount: stay.review_count.toString(),
    };
  }

  // Add geo coordinates
  if (stay.latitude && stay.longitude) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: stay.latitude.toString(),
      longitude: stay.longitude.toString(),
    };
  }

  // Add website if available
  if (stay.website) {
    schema.sameAs = [stay.website];
  }

  return schema;
};

/**
 * Generate ItemList schema for search results/directory
 */
export const generateItemListSchema = (stays, listName = 'Verified Stays in Ujjain') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    description: `Complete list of ${stays.length} ${listName}`,
    numberOfItems: stays.length.toString(),
    itemListElement: stays.map((stay, index) => ({
      '@type': 'ListItem',
      position: (index + 1).toString(),
      name: stay.name,
      description: stay.short_description || stay.description,
      url: `https://www.mysimhastha.com/stays/${stay.slug}`,
      image: stay.featured_image || stay.image,
      aggregateRating: stay.rating && stay.review_count ? {
        '@type': 'AggregateRating',
        ratingValue: stay.rating.toString(),
        reviewCount: stay.review_count.toString(),
      } : undefined,
    })),
  };
};

/**
 * Generate Breadcrumb schema
 */
export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: (index + 1).toString(),
      name: item.label,
      item: item.path ? `https://www.mysimhastha.com${item.path}` : undefined,
    })),
  };
};

/**
 * Generate FAQ schema for SEO
 */
export const generateFAQSchema = (faqs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

/**
 * Generate Place schema for area/locality
 */
export const generatePlaceSchema = (locality, description, stayCount) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: locality,
    description: description,
    url: `https://www.mysimhastha.com/stays?area=${encodeURIComponent(locality)}`,
    geo: {
      '@type': 'GeoShape',
      box: `${MAHAKAL_TEMPLE.latitude - 0.1} ${MAHAKAL_TEMPLE.longitude - 0.1} ${MAHAKAL_TEMPLE.latitude + 0.1} ${MAHAKAL_TEMPLE.longitude + 0.1}`,
    },
    numberOfItems: stayCount.toString(),
  };
};

/**
 * Generate Event schema for Simhastha
 */
export const generateSimhasthEventSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Simhastha Kumbh Mela 2028',
    description: 'The Simhastha Kumbh Mela 2028 in Ujjain is one of the most important Hindu pilgrimage events',
    startDate: '2028-04-14',
    endDate: '2028-05-02',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Ujjain',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ujjain',
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: MAHAKAL_TEMPLE.latitude.toString(),
        longitude: MAHAKAL_TEMPLE.longitude.toString(),
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Ujjain Municipal Corporation',
    },
    url: 'https://www.mysimhastha.com/simhastha-2028',
    image: 'https://www.mysimhastha.com/og-simhastha.jpg',
  };
};

/**
 * Generate Accommodation Collection schema
 */
export const generateAccommodationCollectionSchema = (
  collectionName,
  collectionDescription,
  stays
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: collectionName,
    description: collectionDescription,
    url: `https://www.mysimhastha.com/stays?collection=${encodeURIComponent(collectionName)}`,
    mainEntity: {
      '@type': 'ItemList',
      name: collectionName,
      numberOfItems: stays.length.toString(),
      itemListElement: stays.map((stay, index) => ({
        '@type': 'ListItem',
        position: (index + 1).toString(),
        item: {
          '@type': 'LodgingBusiness',
          name: stay.name,
          url: `https://www.mysimhastha.com/stays/${stay.slug}`,
          image: stay.featured_image || stay.image,
          priceRange: `₹${stay.price_from}-${stay.price_to}`,
          aggregateRating: stay.rating ? {
            '@type': 'AggregateRating',
            ratingValue: stay.rating.toString(),
            reviewCount: stay.review_count?.toString() || '0',
          } : undefined,
        },
      })),
    },
  };
};

/**
 * Generate Hotel/Accommodation schema with all details
 */
export const generateComprehensiveAccommodationSchema = (stay) => {
  const amenities = stay.amenities || [];
  const images = stay.images || [stay.featured_image || stay.image];

  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': `https://www.mysimhastha.com/stays/${stay.slug}#hotel`,
    name: stay.name,
    description: stay.description,
    url: `https://www.mysimhastha.com/stays/${stay.slug}`,
    image: images,
    address: {
      '@type': 'PostalAddress',
      streetAddress: stay.address,
      addressLocality: stay.locality,
      addressRegion: stay.state,
      postalCode: stay.postal_code,
      addressCountry: 'IN',
    },
    telephone: stay.phone,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Reservations',
      telephone: stay.phone,
      url: stay.website,
    },
    priceRange: `₹${stay.price_from}-${stay.price_to}`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: stay.latitude.toString(),
      longitude: stay.longitude.toString(),
    },
    amenityFeature: amenities.map((amenity) => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity,
    })),
    aggregateRating: stay.rating && stay.review_count ? {
      '@type': 'AggregateRating',
      ratingValue: stay.rating.toString(),
      bestRating: '5',
      worstRating: '1',
      ratingCount: stay.review_count.toString(),
      reviewCount: stay.review_count.toString(),
    } : undefined,
    review: stay.reviews?.map((review) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating?.toString(),
      },
      author: {
        '@type': 'Person',
        name: review.author || 'Anonymous',
      },
      reviewBody: review.text,
      datePublished: review.date,
    })) || undefined,
    starRating: stay.rating ? {
      '@type': 'Rating',
      ratingValue: stay.rating.toString(),
    } : undefined,
  };
};

/**
 * Combine multiple schemas into one script
 */
export const generateCombinedSchema = (schemas) => {
  if (schemas.length === 0) return null;
  if (schemas.length === 1) return schemas[0];

  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
};

/**
 * Generate AEO (AI Search Engine Optimization) schema
 */
export const generateAEOSchema = (content) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.headline,
    description: content.description,
    image: content.image,
    datePublished: new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'MySimhastha',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MySimhastha',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.mysimhastha.com/logo.png',
      },
    },
    mainEntity: {
      '@type': 'Thing',
      name: content.mainEntity,
      description: content.entityDescription,
    },
    // Add structured content for AI parsing
    articleBody: content.body,
    keywords: content.keywords?.join(', '),
  };
};

/**
 * Generate schema for search/filter results page
 */
export const generateSearchResultsSchema = (
  query,
  resultsCount,
  stays,
  filters
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    name: `${query} - Stays in Ujjain`,
    description: `Found ${resultsCount} stays matching: ${query}${filters.stayType ? ` (${filters.stayType})` : ''}${filters.area ? ` near ${filters.area}` : ''}`,
    url: `https://www.mysimhastha.com/stays?q=${encodeURIComponent(query)}`,
    image: stays[0]?.featured_image,
    mainEntity: {
      '@type': 'ItemList',
      name: `Search results for "${query}"`,
      numberOfItems: resultsCount.toString(),
      itemListElement: stays.slice(0, 10).map((stay, index) => ({
        '@type': 'ListItem',
        position: (index + 1).toString(),
        item: {
          '@type': 'LodgingBusiness',
          name: stay.name,
          url: `https://www.mysimhastha.com/stays/${stay.slug}`,
          image: stay.featured_image,
          priceRange: `₹${stay.price_from}-${stay.price_to}`,
          aggregateRating: stay.rating ? {
            '@type': 'AggregateRating',
            ratingValue: stay.rating.toString(),
            reviewCount: stay.review_count?.toString() || '0',
          } : undefined,
        },
      })),
    },
  };
};
