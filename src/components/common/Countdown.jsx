/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function Countdown() {
  const [t, setT] = useState({ d: "—", h: "—", m: "—", s: "—" });

  useEffect(() => {
    const tick = () => {
      const diff = new Date("2028-04-13T04:00:00+05:30") - new Date();
      if (diff <= 0) { setT({ d: "0", h: "00", m: "00", s: "00" }); return; }
      setT({
        d: Math.floor(diff / 864e5),
        h: String(Math.floor(diff % 864e5 / 36e5)).padStart(2, "0"),
        m: String(Math.floor(diff % 36e5 / 6e4)).padStart(2, "0"),
        s: String(Math.floor(diff % 6e4 / 1e3)).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="cd-grid">
      {[["d", "Days", "दिन"], ["h", "Hours", "घंटे"], ["m", "Minutes", "मिनट"], ["s", "Seconds", "सेकंड"]].map(([k, en, hi]) => (
        <div key={k} className="cd-unit">
          <span className="cd-val">{t[k]}</span>
          <span className="cd-en">{en}</span>
          <span className="cd-hi">{hi}</span>
        </div>
      ))}
    </div>
  );
}