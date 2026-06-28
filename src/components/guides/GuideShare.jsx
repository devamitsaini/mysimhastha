import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";

export default function GuideShare({ guide }) {
  if (!guide) return null;

  const language = guide.language || "en";

  const labels = {
    en: {
      heading: "Share this Guide",
      copy: "Copy Guide Link",
      copied: "Guide link copied!",
      failed: "Unable to copy guide link.",
    },

    hi: {
      heading: "इस गाइड को साझा करें",
      copy: "गाइड लिंक कॉपी करें",
      copied: "गाइड लिंक कॉपी हो गया।",
      failed: "गाइड लिंक कॉपी नहीं हो सका।",
    },
  };

  const t = labels[language];

  const pageUrl = window.location.href;

  const shareUrl = encodeURIComponent(pageUrl);

  const shareTitle = encodeURIComponent(
    guide.seo?.title || guide.hero?.title || guide.title || ""
  );

  const imageUrl = encodeURIComponent(
    `https://www.mysimhastha.com/images/${
      guide.share?.image ||
      guide.hero?.image ||
      "default-guide.webp"
    }`
  );

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      toast.success(t.copied);
    } catch {
      toast.error(t.failed);
    }
  };

  return (
    <section className="guide-share">

      <div className="share-title">
        {t.heading}
      </div>

      <div className="share-buttons">

        <a
          href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn whatsapp"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn facebook"
          aria-label="Share on Facebook"
        >
          <FaFacebookF />
          <span>Facebook</span>
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn twitter"
          aria-label="Share on X"
        >
          <FaXTwitter />
          <span>X</span>
        </a>

        <a
          href={`https://pinterest.com/pin/create/button/?url=${shareUrl}&media=${imageUrl}&description=${shareTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn pinterest"
          aria-label="Share on Pinterest"
        >
          <FaPinterestP />
          <span>Pinterest</span>
        </a>

        <button
          type="button"
          onClick={copyLink}
          className="share-btn copy-btn"
          aria-label={t.copy}
        >
          <FiCopy />
          <span>{t.copy}</span>
        </button>

      </div>

    </section>
  );
}