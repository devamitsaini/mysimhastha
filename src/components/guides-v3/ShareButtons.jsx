import React, { useState } from "react";
import "../../guides/styles/guidev3.css";

const ShareButtons = ({ title, slug }) => {

  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location.origin}/guide/${slug}`;

  const copyLink = async () => {

    await navigator.clipboard.writeText(shareUrl);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);

  };

  const nativeShare = async () => {

    if (!navigator.share) return;

    try {

      await navigator.share({

        title,

        url: shareUrl

      });

    } catch {}

  };

  return (

    <section className="guide-share">

      <h2>Share this Guide</h2>

      <div className="guide-share-grid">

        <button
          className="guide-share-btn"
          onClick={nativeShare}
        >
          📲 Share
        </button>

        <a

          href={`https://wa.me/?text=${encodeURIComponent(title + " " + shareUrl)}`}

          target="_blank"

          rel="noopener noreferrer"

          className="guide-share-btn"

        >

          WhatsApp

        </a>

        <a

          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}

          target="_blank"

          rel="noopener noreferrer"

          className="guide-share-btn"

        >

          Facebook

        </a>

        <a

          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}

          target="_blank"

          rel="noopener noreferrer"

          className="guide-share-btn"

        >

          X

        </a>

        <a

          href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}

          target="_blank"

          rel="noopener noreferrer"

          className="guide-share-btn"

        >

          Telegram

        </a>

        <button

          className="guide-share-btn"

          onClick={copyLink}

        >

          {copied ? "Copied ✓" : "Copy Link"}

        </button>

      </div>

    </section>

  );

};

export default ShareButtons;