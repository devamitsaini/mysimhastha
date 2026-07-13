import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaShareAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";

export default function ShareButtons({
  title,
  image,
  language = "en",
}) {

  const [pageUrl, setPageUrl] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPageUrl(window.location.href);
  }, []);

  const labels = {
  en: {
    heading: "🙏 Share with Fellow Devotees",
    copy: "Copy Link",
    copied: "Link copied!",
    failed: "Unable to copy link.",
    share: "Share Link",
    instagram: "Instagram",
  },

  hi: {
    heading: "🙏 अपने साथी श्रद्धालुओं के साथ साझा करें",
    copy: "लिंक कॉपी करें",
    copied: "लिंक कॉपी हो गया।",
    failed: "लिंक कॉपी नहीं हो सका।",
    share: "शेयर लिंक",
    instagram: "इंस्टाग्राम",
  },
};

  const t = labels[language];

  const shareUrl = mounted ? encodeURIComponent(pageUrl) : "";

  const shareTitle = encodeURIComponent(title || "");

  const imageUrl = encodeURIComponent(
  image ||
  "https://www.mysimhastha.com/images/default-guide.webp"
);

  const copyLink = async () => {
    try {
      if (mounted) {
        await navigator.clipboard.writeText(pageUrl);
        toast.success(t.copied);
      }
    } catch {
      toast.error(t.failed);
    }
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || document.title,
          url: pageUrl,
        });
      } catch {
        // User cancelled or error - do nothing
      }
    } else {
      // Fallback to copy if Web Share API not available
      copyLink();
    }
  };

  const instagramUrl = mounted
    ? `https://www.instagram.com/create/story/?url=${shareUrl}`
    : "#";

  return (
    <section className="guide-share">

      <div className="share-title">
        {t.heading}
      </div>

      <div className="share-buttons">

        <a
          href={mounted ? `https://wa.me/?text=${shareTitle}%20${shareUrl}` : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn whatsapp"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>

        <a
          href={mounted ? `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn facebook"
          aria-label="Share on Facebook"
        >
          <FaFacebookF />
          <span>Facebook</span>
        </a>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn instagram"
          aria-label="Share on Instagram"
        >
          <FaInstagram />
          <span>{t.instagram}</span>
        </a>

        <button
          type="button"
          onClick={shareNative}
          className="share-btn share-link-btn"
          aria-label={t.share}
        >
          <FaShareAlt />
          <span>{t.share}</span>
        </button>

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