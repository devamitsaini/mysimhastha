import SITE from "./siteConfig";

const ORGANIZATION = {

    "@context":"https://schema.org",

    "@type":"Organization",

    name:SITE.name,

    url:SITE.url,

    logo:`${SITE.url}${SITE.logo}`,

    sameAs:[

        "https://www.facebook.com/",

        "https://www.instagram.com/",

        "https://www.linkedin.com/"

    ]

};

export default ORGANIZATION;