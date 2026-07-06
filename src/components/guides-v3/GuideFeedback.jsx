import { useState } from "react";
import { toast } from "react-toastify";

import { supabase } from "../../lib/supabase";

import "../../guides/styles/guidev3.css";
    
const GuideFeedback = ({ slug }) => {

  const storageKey = `guide-feedback-${slug}`;

  const [submitted] = useState(
    !!localStorage.getItem(storageKey)
  );

  const [loading, setLoading] = useState(false);

  const submitFeedback = async (helpful) => {

    if (localStorage.getItem(storageKey)) {

      toast.info("You already submitted feedback.");

      return;

    }

    try {

      setLoading(true);

      const { error } = await supabase

        .from("guide_feedback")

        .insert({

          guide_slug: slug,

          helpful

        });

      if (error) throw error;

      localStorage.setItem(storageKey, "true");

      toast.success("Thank you for your feedback ❤️");

      window.location.reload();

    }

    catch {

      toast.error("Unable to submit feedback.");

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <section className="guide-feedback">

      <h2>

        Was this guide helpful?

      </h2>

      <p>

        Your feedback helps us improve MySimhastha guides.

      </p>

      {submitted ? (

        <div className="feedback-success">

          ✅ Feedback already submitted.

        </div>

      ) : (

        <div className="feedback-actions">

          <button

            disabled={loading}

            className="feedback-btn"

            onClick={() => submitFeedback(true)}

          >

            👍 Yes

          </button>

          <button

            disabled={loading}

            className="feedback-btn secondary"

            onClick={() => submitFeedback(false)}

          >

            👎 No

          </button>

        </div>

      )}

    </section>

  );

};

export default GuideFeedback;