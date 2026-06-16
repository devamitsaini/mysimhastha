import React, { useState, useEffect } from 'react';
import { MISSING_DATA } from '../data/simhasthaData';

function MissingPersonsPage({ openOnLoad }) {
  const [photo, setPhoto] = useState(null);
  const [form, setForm] = useState({ name: "", age: "", desc: "", location: "", contact: "", reporter: "" });
  const [list, setList] = useState(MISSING_DATA);
  const [statusFilter, setStatusFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
  if (openOnLoad) {
    setShowForm(true);
  }
}, [openOnLoad]);

    const [formStatus, setFormStatus] = useState("");

  const submit = async () => {
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
  console.log("Cloudinary Response:", uploadData);
  if (!uploadRes.ok || !uploadData.secure_url) {
  alert("Image upload failed");
  return;
}

  photoUrl = uploadData.secure_url;
  console.log("Photo URL:", photoUrl);
}

  if (!form.name.trim()) {
    alert("Please enter the missing person's name.");
    return;
  }

  if (!form.contact.trim()) {
    alert("Please enter your contact number.");
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
        access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,

        subject: "New Missing Person Report",

        Reporter_Name: form.reporter,
        Missing_Person_Name: form.name,
        Age_Gender: form.age,
        Last_Seen_Location: form.location,
        Contact_Number: form.contact,
        Description: form.desc,
        Photo_URL: photoUrl,
      }),
    });

    const data = await res.json();
    console.log("WEB3 STATUS:", res.status);
    console.log("WEB3 DATA:", data);
    console.log("WEB3 KEY:", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY); 

    if (res.ok && data.success) {
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
      <div className="page-hero" style={{ background: "linear-gradient(160deg,#2D0000,#0A0000)" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FCA5A5", marginBottom: "8px" }}>🆘 EMERGENCY HELP</div>
          <div className="page-hero-title">Missing Persons Board</div>
          <p className="page-hero-sub">Help reunite families — every share matters. Ground team monitors 24/7.</p>
          <div style={{ marginTop: "12px", fontSize: "14px", fontWeight: 700, color: "#FCA5A5" }}>Emergency Helpline: 1800-XXX-XXXX (24/7 Free)</div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Board header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <h2 style={{ marginBottom: "4px" }}>Missing Persons Board</h2>
              <p style={{ fontSize: "14px", color: "var(--muted)" }}>Help reunite families — every share matters</p>
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
            <div style={{ background: "var(--white)", border: "2px solid var(--saffron)", borderRadius: "16px", padding: "28px", marginBottom: "32px" }}>
              <h3 style={{ marginBottom: "16px" }}>Report a Missing Person</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "0 16px" }}>
                {[["Full Name *", "name", "text", "e.g. Ramesh Kumar Sharma"], ["Age & Gender *", "age", "text", "e.g. 65 years, Male"], ["Last Seen Location", "location", "text", "e.g. Ram Ghat, Zone 1"], ["Your Contact *", "contact", "tel", "+91 98765 43210"], ["Your Name (Reporter)", "reporter", "text", "e.g. Amit Sharma"]].map(([l, k, t, p]) => (
                  <div key={k} className="form-group"><label>{l}</label>
                  <input type={t} placeholder={p} value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} /></div>
                ))}
              </div>
              <div className="form-group"><label>Description (clothing, features, etc.)</label><textarea placeholder="e.g. Wearing white dhoti and saffron kurta." value={form.desc} onChange={e => setForm(f => ({ ...f, desc: e.target.value }))} /></div>
              <div className="form-group">
                <label>Upload Photo</label>
                <div className="upload-zone" onClick={() => document.getElementById("mp-file")?.click()}>
                  <div style={{ fontSize: "24px", marginBottom: "6px" }}>📷</div>
                  <div style={{ fontSize: "13px", color: "var(--muted)" }}>Click to upload a recent photo</div>
                  <input
  id="mp-file"
  type="file"
  accept="image/*"
  style={{ display: "none" }}
  onChange={(e) => {
    setPhoto(e.target.files[0]);
    alert("Photo attached ✅");
  }}
/>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
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
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  ) : (
    p.name.charAt(0)
  )}
</div>
                <div className="mp-body">
                  <div className="mp-name-row"><span className="mp-name">{p.name}</span><span className={`mp-badge${p.status === "found" ? " found" : ""}`}>{p.status === "found" ? "Found" : "Missing"}</span></div>
                  <div className="mp-age">{p.age}</div>
                  <div className="mp-desc">{p.desc}</div>
                  <div className="mp-detail">📍 {p.location}</div>
                  <div className="mp-detail">🗓 {p.date}</div>
                  <div className="mp-contact-row">📞 {p.contact} <span style={{ color: "var(--muted)", fontWeight: 400 }}>({p.reporter})</span></div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <div style={{ textAlign: "center", padding: "48px", color: "var(--muted)", fontSize: "16px" }}>No records found.</div>}
        </div>
      </section>
    </div>
  );
}

export default MissingPersonsPage;