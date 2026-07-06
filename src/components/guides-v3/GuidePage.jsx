import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import GuideSEO from "./GuideSEO";
import GuideHero from "./GuideHero";
import GuideRenderer from "./GuideRenderer";
import GuideFAQ from "./GuideFAQ";
import GuideRelatedGuides from "./GuideRelatedGuides";
import GuideFeedback from "./GuideFeedback";
import GuideLanguageSwitcher from "./GuideLanguageSwitcher";
import ShareButtons from "./ShareButtons";

import TableOfContents from "./TableOfContents";
import OfficialResources from "./OfficialResources";
import GuideStayCTA from "./GuideStayCTA";
import BackToTop from "./BackToTop";

import "../../guides/styles/guidev3.css";

export default function GuidePage({

    guide,

    guideHi,

    seo,

    seoHi

}) {

    const location = useLocation();

    const isHindi = location.pathname.startsWith("/hi");

    const currentGuide = useMemo(() => {

        return isHindi ? guideHi : guide;

    }, [isHindi, guide, guideHi]);

    const currentSeo = useMemo(() => {

        return isHindi ? seoHi : seo;

    }, [isHindi, seo, seoHi]);

    if (!currentGuide) return null;

    return (

        <>

            <GuideSEO
                guide={currentGuide}
                seo={currentSeo}
            />

            <GuideHero
                hero={currentGuide.hero}
            />

            <GuideLanguageSwitcher
                slug={currentGuide.slug}
                language={isHindi ? "hi" : "en"}
            />

            {/* Render Quick Answer separately first */}
            {currentGuide.sections?.find(s => s.type === 'quickAnswer') && (
                <div className="guide-quick-answer-wrapper">
                    <GuideRenderer 
                        sections={[currentGuide.sections.find(s => s.type === 'quickAnswer')]} 
                    />
                </div>
            )}

            {/* Table of Contents after Quick Answer */}
            <TableOfContents
                sections={currentGuide.sections}
            />

            {/* Render remaining sections (excluding quickAnswer and quickFacts) */}
            <GuideRenderer 
                sections={currentGuide.sections?.filter(s => s.type !== 'quickAnswer') || []} 
            />

            {currentGuide.faq?.length > 0 && (
                <GuideFAQ
                    faq={currentGuide.faq}
                />
            )}

            {currentGuide.officialResources?.length > 0 && (
                <OfficialResources
                    resources={currentGuide.officialResources}
                />
            )}

            {currentGuide.showStayCTA !== false && (
                <GuideStayCTA />
            )}

            <ShareButtons
                title={currentSeo.title}
                slug={currentGuide.slug}
            />

            <GuideRelatedGuides
                currentGuide={currentGuide}
            />

            <GuideFeedback />

            <BackToTop />

        </>

    );

}