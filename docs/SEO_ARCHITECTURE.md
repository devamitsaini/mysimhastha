# SEO & JSON-LD Architecture — MySimhastha

## Overview

This document describes the reusable, scalable SEO and structured data engine built for MySimhastha. Every page on the site uses the same two building blocks:

```jsx
<SEO title="..." description="..." canonical="..." />
<SchemaProvider type="guide" data={pageData} />
```

- **`<SEO />`** — manages all meta tags (title, description, canonical, robots, Open Graph, Twitter, language alternates). Contains **no JSON-LD**.
- **`<SchemaProvider />`** — generates the JSON-LD structured data for the page. Contains **no meta tags**.

---

## Folder Structure

```
src/seo/
├── index.js                    # Barrel export
├── SEO.jsx                     # Meta tags only (no JSON-LD)
├── SchemaProvider.jsx          # Orchestrator: type → generators → injector
├── SchemaInjector.jsx          # Renders ONE <script> with @graph
├── constants/
│   ├── defaults.js             # SITE_URL, SITE_NAME, SITE_LOGO, etc.
│   └── organization.js         # Shared Organization builder + ORGANIZATION_ID
├── generators/                 # Pure JS functions, no JSX/Helmet
│   ├── organization.js
│   ├── website.js
│   ├── webpage.js
│   ├── article.js
│   ├── breadcrumb.js
│   ├── faq.js
│   ├── image.js
│   ├── geo.js
│   ├── place.js
│   ├── touristAttraction.js
│   ├── touristDestination.js
│   ├── event.js
│   ├── howTo.js
│   ├── collectionPage.js
│   ├── hotel.js
│   ├── lodgingBusiness.js
│   ├── localBusiness.js
│   ├── offer.js
│   ├── aggregateRating.js
│   ├── review.js
│   ├── contactPoint.js
│   ├── itemList.js
│   ├── searchResults.js
│   ├── accommodationCollection.js
│   ├── home.js
│   ├── searchAction.js
│   ├── siteNavigation.js
│   ├── speakable.js
│   ├── person.js
│   ├── brand.js
│   ├── service.js
│   ├── video.js
│   ├── imageGallery.js
│   └── entityGraph.js
├── hooks/
│   ├── useSEO.js               # Prepares SEO props with auto-canonical
│   └── useSchema.js            # Prepares Schema props with validation
└── utils/
    └── validateSchema.js       # Dev-mode validation warnings
```

---

## How It Works

### 1. SchemaProvider receives `type` and `data`

```jsx
<SchemaProvider type="guide" data={guide} />
```

Internally, `SchemaProvider`:
1. Looks up the `GENERATORS` registry using `type`
2. Calls the generator function with the page `data`
3. Gets back a flat array of schema.org objects
4. Passes them to `<SchemaInjector>` which wraps them in a single `@graph`

### 2. Generators are pure functions

Every generator:
- Accepts page data
- Returns a **plain JavaScript object** or `null`
- Never renders JSX
- Never uses Helmet
- Never emits a `<script>` tag
- Validates required fields, returns `null` when they're missing

### 3. SchemaInjector consolidates output

Always renders **exactly one** `<script type="application/ld+json">` with:

```json
{
  "@context": "https://schema.org",
  "@graph": [...]
}
```

---

## Supported Types

| `type`           | Schemas Generated                                                                 |
|------------------|------------------------------------------------------------------------------------|
| `guide`          | Organization, Website, WebPage, Article, Breadcrumb, Image, FAQ                    |
| `blog`           | Organization, Website, WebPage, Article, Breadcrumb, Image, FAQ                    |
| `hotel`          | Organization, Website, WebPage, Hotel, Offer, AggregateRating, Review, FAQ, Image  |
| `homestay`       | Organization, Website, WebPage, LodgingBusiness, FAQ, Image                        |
| `guesthouse`     | Organization, Website, WebPage, LodgingBusiness, FAQ, Image                        |
| `ashram`         | Organization, Website, WebPage, LodgingBusiness, FAQ, Image                        |
| `dharamshala`    | Organization, Website, WebPage, LodgingBusiness, FAQ, Image                        |
| `localbusiness`  | Organization, Website, WebPage, LocalBusiness, FAQ, Image                          |
| `stays`          | Organization, Website, WebPage, CollectionPage, ItemList, Image                    |
| `temple`         | Organization, Website, WebPage, Place, TouristAttraction, FAQ, Image               |
| `destination`    | Organization, Website, WebPage, TouristDestination, Place, Image                   |
| `event`          | Organization, Website, WebPage, Event, Place, Image                                |
| `howto`          | Organization, Website, WebPage, HowTo, FAQ, Image                                  |
| `gallery`        | Organization, Website, WebPage, ImageGallery, Image                                |
| `video`          | Organization, Website, WebPage, VideoObject, Image                                 |
| `service`        | Organization, Website, WebPage, Service                                            |
| `home`           | Organization, Website, WebPage, SearchAction, Navigation, Brand, EntityGraph, etc. |
| `search`         | Organization, Website, WebPage                                                     |
| `collection`     | Organization, Website, WebPage, CollectionPage, ItemList                           |

---

## How to Add a New Content Type

1. **Create the generator** in `src/seo/generators/yourType.js`

```js
export function generateYourTypeSchema(data) {
  try {
    const { title, ... } = data;
    if (!title) return null;
    return { "@type": "YourType", name: title };
  } catch { return null; }
}
```

2. **Import it** in `src/seo/SchemaProvider.jsx`

3. **Add a builder helper** and a **registry entry** in `GENERATORS`

4. **Use it on the page**:

```jsx
<SchemaProvider type="yourtype" data={yourData} />
```

No other changes are needed. The architecture automatically handles deduplication, consolidation, and output.

---

## Best Practices

- **Never render JSON-LD manually.** Always use `<SchemaProvider />`.
- **Never mix meta tags with JSON-LD.** Use `<SEO />` for meta, `<SchemaProvider />` for schema.
- **Keep generators pure.** No side effects, no DOM access, no React imports.
- **Validate required fields.** Return `null` if critical data is missing.
- **Use the shared constants.** Import `SITE_URL`, `ORGANIZATION_ID` instead of hardcoding.
- **Run the app in development** to see validation warnings in the console.

---

## AI SEO Compatibility

The architecture is designed to work well with:

- **Google AI Overviews** — through `SpeakableSpecification`, `EntityGraph`, `BreadcrumbList`
- **ChatGPT / Gemini / Claude** — through connected entity relationships (`@id`, `about`, `mentions`, `knowsAbout`)
- **Perplexity / Bing AI** — through `SearchAction`, `FAQPage`, `HowTo`, `VideoObject`
- **Google Rich Results** — Hotel, Offer, AggregateRating, Review, Event, Article, FAQ, Breadcrumb, Image
- **Voice Search** — through SpeakableSpecification