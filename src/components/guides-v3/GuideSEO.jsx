import { Helmet } from "react-helmet-async";



const GuideSEO = ({ guide }) => {

  if (!guide) return null;

  const pageUrl = `${SITE.url}/${guide.language === "hi" ? "hi/" : ""}guide/${guide.slug}`;

  const metaTitle =
    guide?.seo?.metaTitle ||
    guide.title ||
    DEFAULT_SEO.title;

  const metaDescription =
    guide?.seo?.metaDescription ||
    guide.description ||
    DEFAULT_SEO.description;

  const canonical =
    guide?.seo?.canonical ||
    pageUrl;

  const image =
    guide?.hero?.image
      ? `${SITE.url}${guide.hero.image}`
      : DEFAULT_SEO.image;

  const articleSchema = getArticleSchema(guide);

  const faqSchema = getFAQSchema(guide.faq);

  const breadcrumbSchema =
    getBreadcrumbSchema(guide);

  const webpageSchema =
    getWebPageSchema(guide);

  const organizationSchema =
    getOrganizationSchema();

  return (

    <Helmet>

      {/* ==========================
          BASIC SEO
      ========================== */}

      <html lang={guide.language} />

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

        content={guide.author}

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

        content={guide.language === "hi" ? "hi_IN" : "en_IN"}

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

      {guide.translations?.en && (

        <link
          rel="alternate"
          hrefLang="en"
          href={`${SITE.url}/guide/${guide.translations.en}`}
        />

      )}

      {guide.translations?.hi && (

        <link
          rel="alternate"
          hrefLang="hi"
          href={`${SITE.url}/hi/guide/${guide.translations.hi}`}
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
        content={guide.seo?.publishedTime}
      />

      <meta
        property="article:modified_time"
        content={guide.seo?.modifiedTime}
      />

      <meta
        property="article:author"
        content={guide.author}
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

      {guide.faq?.length > 0 && (

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