import React, { useState, useEffect, useRef } from "react";
import { SNAN_DATES } from "../data/simhasthaData";

function SnanCalendarPage() {

  return (
    <div className="page-wrap">

      {/* SHAHI SNAN CALENDAR */}
      <section className="snan-section">
        <div className="container">

          <div className="sec-head center">
            <div className="sec-label">
              🕉️ Sacred Bathing Dates
            </div>

            <h2>Simhastha 2028 Snan Calendar</h2>

            <p className="sec-sub">
              All auspicious bathing dates issued by the MP Government.
              Shahi Snan includes ceremonial processions of all Akharas.
            </p>
          </div>

          <div className="snan-grid-new">
            {SNAN_DATES.map((s, i) => (
              <div
                key={i}
                className={`snan-card-new ${s.shahi ? "shahi" : ""}`}
              >

                {s.shahi && (
                  <div className="snan-badge">
                    🔱 SHAHI SNAN
                  </div>
                )}

                <div className="snan-date-block">
                  <div className="snan-day-num">
                    {s.day}
                  </div>

                  <div className="snan-month-weekday">
                    <span className="snan-month">
                      {s.month}
                    </span>

                    <span className="snan-weekday">
                      {s.weekday}
                    </span>
                  </div>
                </div>

                <div className="snan-name">
                  {s.name}
                </div>

                {s.nameHi && (
                  <div className="snan-hi">
                    {s.nameHi}
                  </div>
                )}

                <div className="snan-tithi-pill">
                  {s.tithi}
                </div>

              </div>
            ))}
          </div>

          <div className="snan-legend">
            <div className="snan-legend-item">
              <span className="snan-legend-dot shahi"></span>
              <span>Shahi Snan</span>
            </div>

            <div className="snan-legend-item">
              <span className="snan-legend-dot auspicious"></span>
              <span>Auspicious Bathing Date</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default SnanCalendarPage;