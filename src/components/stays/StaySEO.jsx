import { Helmet } from "react-helmet-async";

export default function StaySEO({ stay }) {
  if (!stay) return null;

  const baseUrl = "https://www.mysimhastha.com";

  const pageUrl = `${baseUrl}/stays/${stay.slug}`;

  const image =
    stay.image ||
    stay.featured_image ||
    "/images/hero-image.webp";

  const title = `${stay.name} | ${stay.stay_type || "Hotel"} Near Mahakal Temple | MySimhastha`;

  const description =
    stay.short_description ||
    stay.description ||
    `${stay.name} is a verified ${stay.stay_type || "hotel"} in Ujjain near Mahakaleshwar Temple with direct call, WhatsApp and location details.`;

  return (
    <Helmet>

      {/* Primary SEO */}

      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content="index,follow,max-image-preview:large"
      />

      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}

      <meta property="og:type" content="hotel" />

      <meta property="og:title" content={title} />

      <meta
        property="og:description"
        content={description}
      />

      <meta property="og:url" content={pageUrl} />

      <meta property="og:image" content={image} />

      <meta property="og:site_name" content="MySimhastha" />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta name="twitter:title" content={title} />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta name="twitter:image" content={image} />

      {/* Hotel Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",

            name: stay.name,

            image,

            url: pageUrl,

            telephone: stay.phone,

            description,

            address: {
              "@type": "PostalAddress",

              streetAddress: stay.address,

              addressLocality: stay.city,

              addressRegion: stay.state,

              postalCode: stay.pincode,

              addressCountry: "IN",
            },

            geo:
              stay.latitude && stay.longitude
                ? {
                    "@type": "GeoCoordinates",
                    latitude: stay.latitude,
                    longitude: stay.longitude,
                  }
                : undefined,

            aggregateRating:
              stay.rating
                ? {
                    "@type": "AggregateRating",
                    ratingValue: stay.rating,
                    reviewCount:
                      stay.review_count || 1,
                  }
                : undefined,
          }),
        }}
      />

      {/* Breadcrumb */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "BreadcrumbList",

            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: baseUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Stays",
                item: `${baseUrl}/stays`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: stay.name,
                item: pageUrl,
              },
            ],
          }),
        }}
      />

    </Helmet>
  );
}