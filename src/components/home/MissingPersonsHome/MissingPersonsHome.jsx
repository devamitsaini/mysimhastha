import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MISSING_DATA } from "../../../data/simhasthaData";
import "./MissingPersonsHome.css";

const MissingPersonsHome = () => {
  const [missing, setMissing] = useState([]);

  useEffect(() => {
    // Show first 3 missing persons from the data
    setMissing(MISSING_DATA.slice(0, 3));
  }, []);

  return (
    <section className="missing-persons-home">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">EMERGENCY HELP</span>
          <h2>Missing Persons Board</h2>
          <p>
            Help reunite families — every share matters.
            Report or search for missing persons.
          </p>
        </div>

        <div className="mp-grid">
          {missing.map((person) => (
            <div key={person.id} className="mp-card" onClick={() => alert(`${person.name}\n\nAge: ${person.age}\nLast seen: ${person.location}\nDate: ${person.date}\n${person.desc}\n\nContact: ${person.contact} (${person.reporter})`)}>
              <div className="mp-photo">
                {person.photo ? (
                  <img src={person.photo} alt={person.name} />
                ) : (
                  person.name.charAt(0)
                )}
              </div>
              <div className="mp-body">
                <div className="mp-name-row">
                  <span className="mp-name">{person.name}</span>
                  <span className={`mp-badge${person.status === "found" ? " found" : ""}`}>
                    {person.status === "found" ? "Found" : "Missing"}
                  </span>
                </div>
                <div rlassName="mp-age">{person.age}</div>
                <div className="mp-desc">{person.desc}</div>
                <div className="mp-detail">📍 {person.location}</div>
                <div className="mp-contact-row">📞 {person.contact}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mp-footer">
          <Link to="/missing-persons" className="view-mp-btn">
            View All Missing Persons
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissingPersonsHome;