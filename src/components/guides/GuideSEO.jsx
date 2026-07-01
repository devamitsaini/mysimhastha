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
        const baseUrl = "https://www.mysimhastha.com";

        const pageUrl =
          lang === "hi"
            ? `${baseUrl}/hi/guide/${slug}`
            : `${baseUrl}/guide/${slug}`;

        return (
          <Helmet>

            {/* Primary SEO */}
            <title>{title}</title>

            <meta name="description" content={description} />

            {keywords && (
              <meta
                name="keywords"
                content={keywords}
              />
            )}

            <meta name="robots" content="index,follow,max-image-preview:large" />

            <link rel="canonical" href={pageUrl} />

            {/* Language Alternate URLs */}

            <link
              rel="alternate"
              hrefLang="en"
              href={`${baseUrl}/guide/${slug}`}
            />

            <link
              rel="alternate"
              hrefLang="hi"
              href={`${baseUrl}/hi/guide/${slug}`}
            />

            <link
              rel="alternate"
              hrefLang="x-default"
              href={`${baseUrl}/guide/${slug}`}
            />

            {/* Open Graph */}

            <meta property="og:type" content="article" />

            <meta property="og:title" content={title} />

            <meta property="og:description" content={description} />

            <meta property="og:url" content={pageUrl} />

            <meta property="og:image" content={`${baseUrl}${image}`} />
            <meta
              property="og:image:alt"
              content={title}
            />

            <meta
              name="twitter:image:alt"
              content={title}
            />
            <meta property="og:site_name" content="MySimhastha" />
            <meta
              property="og:locale"
              content={lang === "hi" ? "hi_IN" : "en_IN"}
            />

            <meta property="article:published_time" content={published} />

            <meta property="article:modified_time" content={modified} />

            {/* Twitter */}

            <meta name="twitter:card" content="summary_large_image" />

            <meta name="twitter:title" content={title} />

            <meta name="twitter:description" content={description} />

            <meta
              name="twitter:image"
              content={`${baseUrl}${image}`}
            />
            <meta name="twitter:url" content={pageUrl} />
            <meta name="twitter:site" content="@mysimhastha" />
            <meta name="twitter:creator" content="@mysimhastha" />


            {/* === ====================== */}
            {/* Article Schema */}
            {/* ========================= */}

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",

                  headline: title,
                  keywords,
                  description,

                  image: [`${baseUrl}${image}`],

                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": pageUrl
                  },

                  url: pageUrl,

                  datePublished: published,

                  dateModified: modified,

                  inLanguage: lang,

                  author: {
                    "@type": "Organization",
                    name: "MySimhastha"
                  },
                  
                  publisher: {
                    "@type": "Organization",
                    name: "MySimhastha",

                    logo: {
                      "@type": "ImageObject",
                      url: `${baseUrl}/logo.png`
                    }                 
                  },
                  articleSection: "Pilgrimage Guide",
                  isAccessibleForFree: true,
                  about: {
                    "@type": "Thing",
                    name: "Simhastha"
                  },
                })
              }}
            />

            {/* ========================= */}
            {/* FAQ Schema */}
            {/* ========================= */}

            {schema && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(schema)
                }}
              />
            )}

            {/* ========================= */}
            {/* Breadcrumb Schema */}
            {/* ========================= */}

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
                      item: `${baseUrl}/guides`
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