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

  // Existing
  schema,

  // New
  about = "Simhastha",
  articleSection = "Pilgrimage Guide",

  place,
  howTo,
  event,
  touristDestination
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

            <meta name="robots" content="index,
follow,
max-image-preview:large,
max-snippet:-1,
max-video-preview:-1" />

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

                  alternativeHeadline: title,
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

                  author:{
                    "@type":"Organization",

                    name:"MySimhastha",

                    url:baseUrl
                    },
                        
                  articleSection,

                  isAccessibleForFree: true,

                  about: {
                    "@type": "Thing",
                    name: about
                  },

                  publisher: {
                    "@type": "Organization",
                    name: "MySimhastha",
                    url: baseUrl,
                    logo: {
                      "@type": "ImageObject",
                      url: `${baseUrl}/logo.png`
                    }
                  },
                  copyrightHolder:{
                  "@type":"Organization",

                  name:"MySimhastha"
                  },

                  copyrightYear:new Date().getFullYear(),

                  license:pageUrl,
              
                })
              }}
            />


            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",

                "@id": pageUrl,

                url: pageUrl,

                name: title,

                description,

                inLanguage: lang,

                isPartOf: {
                  "@type": "WebSite",
                  name: "MySimhastha",
                  url: baseUrl
                }
              })
            }}
          />

          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "Organization",

              name: "MySimhastha",

              url: baseUrl,

              logo: `${baseUrl}/logo.png`
            })
          }}
        />

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "WebSite",

            url: baseUrl,

            name: "MySimhastha",

            inLanguage: [
              "en-IN",
              "hi-IN"
            ]
          })
        }}
      />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

                              
                "@type":"ImageObject",

                url:`${baseUrl}${image}`,

                contentUrl:`${baseUrl}${image}`,

                name:title,

                caption:title,

                inLanguage:lang

            })
          }}
        />

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
          "@context":"https://schema.org",

          "@type":"WebPage",

          "@id":pageUrl,

          url:pageUrl,

          speakable:{
            "@type":"SpeakableSpecification",

            cssSelector:[
                ".guide-highlight",
                ".guide-header h1"
            ]
          }
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