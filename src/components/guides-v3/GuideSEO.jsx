import { Helmet } from "react-helmet-async";


const SITE = {
  url: "https://mysimhastha.com",
  name: "MySimhastha",
  twitter: "@MySimhastha",
  themeColor: "#f97316",
};

const DEFAULT_SEO = {
  title: "Ujjain Travel Guide | MySimhastha",
  description: "Complete travel guide for Ujjain pilgrimage with temple information, darshan timings, and travel tips.",
  image: "https://mysimhastha.com/images/mahakaleshwar-hero.webp",
};

const getArticleSchema = (guide) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: guide.hero?.image ? `${SITE.url}${guide.hero.image}` : DEFAULT_SEO.image,
    author: {
      "@type": "Organization",
      name: guide.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/images/logo.png`,
      },
    },
    datePublished: guide.seo?.publishedTime,
    dateModified: guide.seo?.modifiedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/${guide.language === "hi" ? "hi/" : ""}guide/${guide.slug}`,
    },
  };
};

const getFAQSchema = (faq) => {
  if (!faq || faq.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
};

const getBreadcrumbSchema = (guide) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: guide.language === "hi" ? "होम" : "Home",
        item: guide.language === "hi" ? `${SITE.url}/hi` : SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: guide.language === "hi" ? "गाइड" : "Guides",
        item: guide.language === "hi" ? `${SITE.url}/hi/guides` : `${SITE.url}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: `${SITE.url}/${guide.language === "hi" ? "hi/" : ""}guide/${guide.slug}`,
      },
    ],
  };
};

const getWebPageSchema = (guide) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: guide.title,
    description: guide.description,
    url: `${SITE.url}/${guide.language === "hi" ? "hi/" : ""}guide/${guide.slug}`,
  };
};

const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/images/logo.png`,
    },
  };
};

const GuideSEO = ({ guide, seo }) => {

  if (!guide) return null;

  // Merge seo data into guide for easier access
  const guideData = {
    ...guide,
    seo: seo || guide.seo,
  };

  const pageUrl = `${SITE.url}/${guideData.language === "hi" ? "hi/" : ""}guide/${guideData.slug}`;

  const metaTitle =
    guideData?.seo?.title ||
    guideData.title ||
    DEFAULT_SEO.title;

  const metaDescription =
    guideData?.seo?.description ||
    guideData.description ||
    DEFAULT_SEO.description;

  const canonical =
    guideData?.seo?.canonical ||
    pageUrl;

  const image =
    guideData?.seo?.openGraph?.image ||
    guideData?.hero?.image
      ? guideData.seo?.openGraph?.image || guideData.hero?.image
      : DEFAULT_SEO.image;

  const articleSchema = getArticleSchema({
    ...guideData,
    seo: {
      ...guideData.seo,
      publishedTime: seo?.publishedTime || guideData.seo?.publishedTime,
      modifiedTime: seo?.modifiedTime || guideData.seo?.modifiedTime,
    }
  });

  const faqSchema = getFAQSchema(guideData.faq);

  const breadcrumbSchema =
    getBreadcrumbSchema(guideData);

  const webpageSchema =
    getWebPageSchema(guideData);

  const organizationSchema =
    getOrganizationSchema();

  return (

    <Helmet>

      {/* ==========================
          BASIC SEO
      ========================== */}

      <html lang={guideData.language} />

      <title>

        {metaTitle}

      </title>

      <meta

        name="description"

        content={metaDescription}

      />

      <meta

        name="robots"

        content="index,follow,max-image-preview:large"

      />

      <meta

        name="author"

        content={guideData.author}

      />

      <link

        rel="canonical"

        href={canonical}

      />
            {/* ==========================
          Open Graph
      ========================== */}

      <meta

        property="og:type"

        content="article"

      />

      <meta

        property="og:title"

        content={metaTitle}

      />

      <meta

        property="og:description"

        content={metaDescription}

      />

      <meta

        property="og:image"

        content={image}

      />

      <meta

        property="og:url"

        content={canonical}

      />

      <meta

        property="og:site_name"

        content={SITE.name}

      />

      <meta

        property="og:locale"

        content={guideData.language === "hi" ? "hi_IN" : "en_IN"}

      />
            {/* ==========================
          Twitter
      ========================== */}

      <meta

        name="twitter:card"

        content="summary_large_image"

      />

      <meta

        name="twitter:title"

        content={metaTitle}

      />

      <meta

        name="twitter:description"

        content={metaDescription}

      />

      <meta

        name="twitter:image"

        content={image}

      />

      <meta

        name="twitter:site"

        content={SITE.twitter}

      />
      {/* ==========================
          Alternate Languages
      ========================== */}

      {guideData.translations?.en && (

        <link

          rel="alternate"

          hrefLang="en"

          href={`${SITE.url}/guide/${guideData.translations.en}`}

        />

      )}

      {guideData.translations?.hi && (

        <link

          rel="alternate"

          hrefLang="hi"

          href={`${SITE.url}/hi/guide/${guideData.translations.hi}`}

        />

      )}

      <link

        rel="alternate"

        hrefLang="x-default"

        href={canonical}

      />



      {/* ==========================
          Theme
      ========================== */}

      <meta

        name="theme-color"

        content={SITE.themeColor}

      />



      {/* ==========================
          Mobile
      ========================== */}

      <meta

        name="apple-mobile-web-app-capable"

        content="yes"

      />

      <meta

        name="apple-mobile-web-app-title"

        content={SITE.name}

      />

      <meta

        name="application-name"

        content={SITE.name}

      />



      {/* ==========================
          Article Meta
      ========================== */}

      <meta

        property="article:published_time"

        content={seo?.publishedTime || guideData.seo?.publishedTime}

      />

      <meta

        property="article:modified_time"

        content={seo?.modifiedTime || guideData.seo?.modifiedTime}

      />

      <meta

        property="article:author"

        content={guideData.author}

      />



      {/* ==========================
          JSON LD
      ========================== */}

      <script

        type="application/ld+json"

      >

        {JSON.stringify(organizationSchema)}

      </script>

      <script

        type="application/ld+json"

      >

        {JSON.stringify(webpageSchema)}

      </script>

      <script

        type="application/ld+json"

      >

        {JSON.stringify(articleSchema)}

      </script>

      {guideData.faq?.length > 0 && (

        <script

          type="application/ld+json"

        >

          {JSON.stringify(faqSchema)}

        </script>

      )}

      <script

        type="application/ld+json"

      >

        {JSON.stringify(breadcrumbSchema)}

      </script>

    </Helmet>

  );

};

export default GuideSEO;