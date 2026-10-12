import { Helmet } from "react-helmet-async";

export default function StaySEO({ stay }) {
  if (!stay) return null;

  const baseUrl = "https://www.mysimhastha.com";

  const pageUrl = `${baseUrl}/stays/${stay.slug}`;

  const image =
    stay.image ||
    stay.featured_image ||
    "/images/hero-image.webp";

  const propertyType = stay.stay_type || "Property";
  const title = `${stay.name} | ${propertyType} Near Mahakal Temple | MySimhastha`;

  const description =
    stay.short_description ||
    stay.description ||
    `Book your stay at ${stay.name} near Mahakaleshwar Temple.`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content="index,follow,max-image-preview:large"
      />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:type" content="hotel" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="MySimhastha" />
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
              addressLocality: stay.locality || stay.city,
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
              stay.rating && stay.review_count > 0
                ? {
                    "@type": "AggregateRating",
                    ratingValue: stay.rating,
                    reviewCount: stay.review_count,
                  }
                : undefined,
          }),
        }}
      />
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