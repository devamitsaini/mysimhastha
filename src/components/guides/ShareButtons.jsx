import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";

export default function ShareButtons({
  title,
  image,
  language = "en",
}) {

  

  const labels = {
  en: {
    heading: "🙏 Share with Fellow Devotees",
    copy: "Copy Link",
    copied: "Link copied!",
    failed: "Unable to copy link.",
  },

  hi: {
    heading: "🙏 अपने साथी श्रद्धालुओं के साथ साझा करें",
    copy: "लिंक कॉपी करें",
    copied: "लिंक कॉपी हो गया।",
    failed: "लिंक कॉपी नहीं हो सका।",
  },
};

  const t = labels[language];

  const pageUrl = window.location.href;

  const shareUrl = encodeURIComponent(pageUrl);

  const shareTitle = encodeURIComponent(title || "");

  const imageUrl = encodeURIComponent(
  image ||
  "https://mysimhastha.com/images/default-guide.webp"
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