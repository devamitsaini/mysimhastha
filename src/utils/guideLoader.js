import GUIDE_INDEX from "../data/guideIndex";

export const getGuide = (language, slug) => {

    return GUIDE_INDEX?.[language]?.[slug] ?? null;

};

export const getGuideBySlug = getGuide;

export const getAllGuides = (language = "en") => {

    return Object.values(GUIDE_INDEX[language] || {});

};

export const getRelatedGuides = (

    language,

    related = []

) => {

    return related

        .map(slug => GUIDE_INDEX?.[language]?.[slug])

        .filter(Boolean);

};