import { Helmet } from "react-helmet-async";

export default function GuideSEO({
  title,
  description,
  slug,
  image,
  lang = "en",
  keywords = "",
  published,
  modified,
  schema
}) {

  const baseUrl = "https://mysimhastha.com";

  const pageUrl =
    lang === "hi"
      ? `${baseUrl}/hi/guide/${slug}`
      : `${baseUrl}/guide/${slug}`;

  const alternateUrl =
    lang === "hi"
      ? `${baseUrl}/guide/${slug}`
      : `${baseUrl}/hi/guide/${slug}`;

  return (
    <Helmet>

      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={keywords} />

      <meta name="robots" content="index,follow" />

      <link rel="canonical" href={pageUrl} />

      {/* Hreflang */}

      <link rel="alternate" hrefLang="en" href={`${baseUrl}/guide/${slug}`} />

      <link rel="alternate" hrefLang="hi" href={`${baseUrl}/hi/guide/${slug}`} />

      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/guide/${slug}`} />

      {/* OpenGraph */}

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:type" content="article" />

      <meta property="og:url" content={pageUrl} />

      <meta property="og:image" content={`${baseUrl}${image}`} />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image"/>

      <meta name="twitter:title" content={title}/>

      <meta name="twitter:description" content={description}/>

      <meta name="twitter:image" content={`${baseUrl}${image}`}/>

      {/* Schema */}

      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(
      schema || {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        image: `${baseUrl}${image}`,
        mainEntityOfPage: pageUrl,
        datePublished: published,
        dateModified: modified,
        inLanguage: lang
      }
    ),
  }}
/>


{/* Extra Schema */}

{schema && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema)
    }}
  />
)}

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
          item: baseUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: `${baseUrl}/guide`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: pageUrl
        }
      ]
    })
  }}
/>

    </Helmet>
  );
}