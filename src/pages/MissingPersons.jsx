import React, { useState, useEffect } from 'react';
import { MISSING_DATA } from '../data/simhasthaData';
import "../styles/MissingPersons.css";

function MissingPersonsPage({
  openOnLoad,
  setOpenMissingForm,
}) {
  const [photo, setPhoto] = useState(null);
  const [form, setForm] = useState({ name: "", age: "", desc: "", location: "", contact: "", reporter: "" });
  const [list, setList] = useState(MISSING_DATA);
  const [statusFilter, setStatusFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    if (openOnLoad) {
      setShowForm(true);
      setOpenMissingForm(false);
    }
  }, [openOnLoad, setOpenMissingForm]);

  const submit = async () => {
    const lastSubmit = localStorage.getItem("missing_submit");

    if (
      lastSubmit &&
      Date.now() - Number(lastSubmit) < 60000
    ) {
      alert("Please wait 1 minute before submitting another report.");
      return;
    }

    let photoUrl = "";

    if (photo) {
      const imageData = new FormData();

      imageData.append("file", photo);
      imageData.append("upload_preset", "missing_persons");

      const uploadRes = await fetch(
        "https://api.cloudinary.com/v1_1/dkbrukc0t/image/upload",
        {
          method: "POST",
          body: imageData,
        }
      );

      const uploadData = await uploadRes.json();
      ("Cloudinary Response:", uploadData);
      if (!uploadRes.ok || !uploadData.secure_url) {
        alert("Image upload failed");
        return;
      }

      photoUrl = uploadData.secure_url;
      ("Photo URL:", photoUrl);
    }

    if (!form.name.trim()) {
      alert("Please enter the missing person's name.");
      return;
    }

    if (form.name.length > 100) {
      alert("Name is too long.");
      return;
    }

    if (!form.contact.trim()) {
      alert("Please enter your contact number.");
      return;
    }
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(form.contact)) {
      alert("Enter a valid 10 digit mobile number.");
      return;
    }

    if (form.desc.length > 1000) {
      alert("Description must be under 1000 characters.");
      return;
    }

    setFormStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_MISSING_PERSON_FORM_KEY,

          subject: "🚨 Missing Person Report | MySimhastha",

          from_name: "MySimhastha Missing Person Portal",

          replyto: form.contact,

          Reporter_Name: form.reporter,
          Missing_Person_Name: form.name,
          Age_Gender: form.age,
          Last_Seen_Location: form.location,
          Contact_Number: form.contact,
          Description: form.desc,
          Photo_URL: photoUrl,
          Submitted_From: "Missing Persons Page",
        }),
      });

      const data = await res.json();
      ("WEB3 STATUS:", res.status);
      ("WEB3 DATA:", data);
      ("WEB3 KEY:", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);

      if (res.ok && data.success) {
        localStorage.setItem(
          "missing_submit",
          Date.now()
        );
        setFormStatus("success");

        // Optional: Add to local board
        setList((l) => [
          {
            id: Date.now(),
            name: form.name,
            age: form.age,
            desc: form.desc,
            location: form.location,
            date: new Date().toISOString().split("T")[0],
            contact: form.contact,
            reporter: form.reporter,
            status: "missing",
            photo: photoUrl,
          },
          ...l,
        ]);

        setForm({
          name: "",
          age: "",
          desc: "",
          location: "",
          contact: "",
          reporter: "",
        });

        setPhoto(null);
        setShowForm(false);

        alert(
          "✅ Missing person report submitted successfully."
        );
      } else {
        setFormStatus("error");
        alert("Failed to submit report.");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
      alert("Something went wrong.");
    }
  };

  const filtered = list.filter(p => statusFilter === "all" || p.status === statusFilter);

  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="sec-label">🆘 EMERGENCY HELP</div>
          <h1 className="page-hero-title">Missing Persons Board</h1>
          <p className="page-hero-sub">Help reunite families — every share matters. Ground team monitors 24/7.</p>
          <div className="hero-emergency">Emergency Helpline: 112 (24/7 Free)</div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Board header */}
          <div className="mp-board-header">
            <div>
              <h2>Missing Persons Board</h2>
              <p>Help reunite families — every share matters</p>
            </div>
            <div className="mp-actions">
              <button
                className="btn btn-red mp-report-btn"
                onClick={() => setShowForm(!showForm)}
              >
                ⚠️ Report Missing Person
              </button>

              <div className="mp-filters">
                {["all", "missing", "found"].map((s) => (
                  <button
                    key={s}
                    className={`mp-filter ${
                      statusFilter === s ? "active" : ""
                    }`}
                    onClick={() => setStatusFilter(s)}
                  >
                    {s === "all"
                      ? "All"
                      : s === "missing"
                      ? "Searching"
                      : "Found"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Report Form */}
          {showForm && (
            <div className="mp-form">
              <h3>Report a Missing Person</h3>
              <div className="form-grid">
                {[["Full Name *", "name", "text", "e.g. Ramesh Kumar Sharma"], ["Age & Gender *", "age", "text", "e.g. 65 years, Male"], ["Last Seen Location", "location", "text", "e.g. Ram Ghat, Zone 1"], ["Your Contact *", "contact", "tel", "+91 98765 43210"], ["Your Name (Reporter)", "reporter", "text", "e.g. Amit Sharma"]].map(([l, k, t, p]) => (
                  <div key={k} className="form-group">
                    <label>{l}</label>
                    <input type={t} placeholder={p} value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} />
                  </div>
                ))}
              </div>
              <div className="form-group">
                <label>Description (clothing, features, etc.)</label>
                <textarea placeholder="e.g. Wearing white dhoti and saffron kurta." value={form.desc} onChange={e => setForm(f => ({ ...f, desc: e.target.value }))} />
              </div>
              <div className="form-group">
                <label>Upload Photo</label>
                <div className="upload-zone">
                  {!photo ? (
                    <>
                      <div
                        onClick={() => document.getElementById("mp-file")?.click()}
                        className="upload-placeholder"
                      >
                        <div className="upload-icon">📷</div>
                        <div className="upload-text">Click to upload a recent photo</div>
                      </div>
                    </>
                  ) : (
                    <div className="upload-preview">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="Preview"
                        className="upload-preview-img"
                      />

                      <div className="upload-success">
                        ✓ Photo selected
                      </div>

                      <div className="upload-filename">
                        📄 {photo.name}
                      </div>

                      <div className="upload-actions">
                        <button
                          type="button"
                          className="btn btn-outline"
                          onClick={() =>
                            document.getElementById("mp-file")?.click()
                          }
                        >
                          Change Photo
                        </button>

                        <button
                          type="button"
                          className="btn btn-ghost"
                          onClick={() => setPhoto(null)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}

                  <input
                    id="mp-file"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="upload-input"
                    onChange={(e) => {
                      const file = e.target.files?.[0];

                      if (!file) return;

                      const allowedTypes = [
                        "image/jpeg",
                        "image/png",
                        "image/webp"
                      ];

                      if (!allowedTypes.includes(file.type)) {
                        alert("Only JPG, PNG and WEBP images are allowed.");
                        return;
                      }

                      if (file.size > 5 * 1024 * 1024) {
                        alert("Maximum file size is 5MB.");
                        return;
                      }

                      setPhoto(file);
                    }}
                  />
                </div>
              </div>
              <div className="form-actions">
                <button
                  className="btn btn-red btn-lg"
                  onClick={submit}
                  disabled={formStatus === "loading"}
                >
                  {formStatus === "loading"
                    ? "Submitting..."
                    : "Submit Report Immediately"}
                </button>
                <button className="btn btn-ghost btn-lg" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </div>
          )}

          {/* Cards Grid */}
          <div className="mp-grid">
            {filtered.map(p => (
              <div key={p.id} className="mp-card" onClick={() => alert(`${p.name}\n\nAge: ${p.age}\nLast seen: ${p.location}\nDate: ${p.date}\n${p.desc}\n\nContact: ${p.contact} (${p.reporter})`)}>
                <div className="mp-photo">
                  {p.photo ? (
                    <img
                      src={p.photo}
                      alt={p.name}
                    />
                  ) : (
                    p.name.charAt(0)
                  )}
                </div>
                <div className="mp-body">
                  <div className="mp-name-row">
                    <span className="mp-name">{p.name}</span>
                    <span className={`mp-badge${p.status === "found" ? " found" : ""}`}>
                      {p.status === "found" ? "Found" : "Missing"}
                    </span>
                  </div>
                  <div className="mp-age">{p.age}</div>
                  <div className="mp-desc">{p.desc}</div>
                  <div className="mp-detail">📍 {p.location}</div>
                  <div className="mp-detail">🗓 {p.date}</div>
                  <div className="mp-contact-row">📞 {p.contact} <span className="mp-reporter">({p.reporter})</span></div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <div className="mp-empty">No records found.</div>}
        </div>
      </section>
    </div>
  );
}

export default MissingPersonsPage;