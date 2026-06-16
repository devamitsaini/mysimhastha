/* eslint-disable react/prop-types */
import { useState } from "react";

export default function LiveDarshanCard({ d }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isLiveNow = d.name.includes("Mahakal");
  const videoId = d.videoId || "Kwjzg0aJGsk";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  const handleWatchClick = () => { setIsExpanded(true); setIsLoading(true); };
  const handleClose = () => { setIsExpanded(false); setIsLoading(false); };

  return (
    <>
      <style>{`
        @keyframes pulseLoad {
          0% { opacity: 0.5; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.5; transform: scale(0.95); }
        }
      `}</style>

      <div
        className="dc"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: isExpanded ? "0" : "",
          minHeight: isExpanded ? "340px" : "auto",
          background: isExpanded ? "#0A0400" : "var(--white)",
        }}
      >
        {isExpanded ? (
          <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column" }}>
            <button
              onClick={handleClose}
              style={{
                position: "absolute", top: "12px", right: "12px", zIndex: 20,
                background: "rgba(0,0,0,0.7)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%", width: "34px", height: "34px",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", fontSize: "16px", fontWeight: "bold",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              }}
              title="Close Stream"
            >
              ✕
            </button>

            {isLoading && (
              <div style={{
                position: "absolute", inset: 0, zIndex: 10, display: "flex",
                flexDirection: "column", alignItems: "center", justifyContent: "center",
                background: "#0A0400", color: "var(--saffron)",
              }}>
                <div style={{ fontSize: "40px", marginBottom: "12px", animation: "pulseLoad 1.5s infinite ease-in-out" }}>
                  🕉️
                </div>
                <div style={{ fontFamily: "var(--ui)", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", color: "rgba(255,255,255,0.6)" }}>
                  CONNECTING TO UJJAIN...
                </div>
              </div>
            )}

            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              title="Live Darshan"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
              style={{ flex: 1, border: "none", borderRadius: "13px" }}
            />
          </div>
        ) : (
          <>
            <div className="dc-thumb" style={{ background: `linear-gradient(160deg,${d.color || "#1A3A5C"},#050200)` }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(212,82,10,.18) 0%,transparent 70%)" }} />
              <div className="dc-icon">{d.icon || "🕉️"}</div>
              <div className="dc-badge">
                <span
                  className="dc-dot"
                  style={isLiveNow ? { background: "#22C55E", animation: "blink 1.5s infinite" } : { background: "#aaa" }}
                />
                <span className="dc-badge-txt">{isLiveNow ? "LIVE NOW" : "LIVE APR 2028"}</span>
              </div>
            </div>

            <div className="dc-body">
              <div className="dc-name">{d.name}</div>
              <div className="dc-name-hi">{d.nameHi}</div>
              <div className="dc-aarti-lbl">Today's Aarti Timings</div>
              {d.aartis?.slice(0, 3).map((a, j) => (
                <div key={j} className="aarti-row">
                  <span className="ar-name">{a.n}</span>
                  <span className="ar-time">{a.t}</span>
                </div>
              ))}
              <div className="dc-footer">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    if (isLiveNow) handleWatchClick();
                    else alert("This sacred stream will go live on April 13, 2028. 🙏");
                  }}
                >
                  {isLiveNow ? "📡 Watch Live" : "📅 Notify Me"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}