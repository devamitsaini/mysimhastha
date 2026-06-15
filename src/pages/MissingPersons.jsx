import React, { useState } from 'react';
import { MISSING_DATA } from '../data/simhasthaData';

function MissingPersonsPage() {
  const [form, setForm] = useState({ name: "", age: "", desc: "", location: "", contact: "", reporter: "" });
  const [list, setList] = useState(MISSING_DATA);
  const [statusFilter, setStatusFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);

  const submit = () => {
    if (!form.name.trim()) { alert("Please enter the missing person's name."); return; }
    if (!form.contact.trim()) { alert("Please enter your contact number."); return; }
    
    setList(l => [{
      id: Date.now(),
      name: form.name,
      age: form.age,
      desc: form.desc,
      location: form.location,
      date: new Date().toISOString().split("T")[0],
      contact: form.contact,
      reporter: form.reporter,
      status: "missing"
    }, ...l]);

    setForm({ name: "", age: "", desc: "", location: "", contact: "", reporter: "" });
    setShowForm(false);
    alert("✅ Report submitted! Ground volunteers have been alerted.\nEmergency Helpline: 1800-XXX-XXXX");
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
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="btn btn-red" onClick={() => setShowForm(!showForm)}>⚠️ Report Missing Person</button>
              {["all", "missing", "found"].map(s => (
                <button key={s} className={`btn btn-sm ${statusFilter === s ? "btn-primary" : "btn-ghost"}`} onClick={() => setStatusFilter(s)}>
                  {s === "all" ? "All" : s === "missing" ? "Searching" : "Found"}
                </button>
              ))}
            </div>
          </div>

          {/* Report Form */}
          {showForm && (
            <div style={{ background: "var(--white)", border: "2px solid var(--saffron)", borderRadius: "16px", padding: "28px", marginBottom: "32px" }}>
              <h3 style={{ marginBottom: "16px" }}>Report a Missing Person</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "0 16px" }}>
                {[["Full Name *", "name", "text", "e.g. Ramesh Kumar Sharma"], ["Age & Gender *", "age", "text", "e.g. 65 years, Male"], ["Last Seen Location", "location", "text", "e.g. Ram Ghat, Zone 1"], ["Your Contact *", "contact", "tel", "+91 98765 43210"], ["Your Name (Reporter)", "reporter", "text", "e.g. Amit Sharma"]].map(([l, k, t, p]) => (
                  <div key={k} className="form-group"><label>{l}</label><input type={t} placeholder={p} value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} /></div>
                ))}
              </div>
              <div className="form-group"><label>Description (clothing, features, etc.)</label><textarea placeholder="e.g. Wearing white dhoti and saffron kurta." value={form.desc} onChange={e => setForm(f => ({ ...f, desc: e.target.value }))} /></div>
              <div className="form-group">
                <label>Upload Photo</label>
                <div className="upload-zone" onClick={() => document.getElementById("mp-file")?.click()}>
                  <div style={{ fontSize: "24px", marginBottom: "6px" }}>📷</div>
                  <div style={{ fontSize: "13px", color: "var(--muted)" }}>Click to upload a recent photo</div>
                  <input id="mp-file" type="file" accept="image/*" style={{ display: "none" }} onChange={() => alert("Photo attached ✅")} />
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button className="btn btn-red btn-lg" onClick={submit}>Submit Report Immediately</button>
                <button className="btn btn-ghost btn-lg" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </div>
          )}

          {/* Cards Grid */}
          <div className="mp-grid">
            {filtered.map(p => (
              <div key={p.id} className="mp-card" onClick={() => alert(`${p.name}\n\nAge: ${p.age}\nLast seen: ${p.location}\nDate: ${p.date}\n${p.desc}\n\nContact: ${p.contact} (${p.reporter})`)}>
                <div className="mp-photo">
                  <svg className="mp-photo-icon" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="7" r="4" /><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /></svg>
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