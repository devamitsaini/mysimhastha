import { Link } from "react-router-dom";
import "./../../guides/styles/guidev3.css";

export default function GuideStayCTA() {

    return (

        <section className="guide-stay-cta">

            <div className="stay-cta-content">

                <h2>Need a Place to Stay?</h2>

                <p>

                    Discover hotels, guest houses, dharamshalas, and premium stays near Mahakaleshwar Temple.

                </p>

                <Link
                    to="/stays"
                    className="stay-cta-button"
                >
                    Explore Stays
                </Link>

            </div>

        </section>

    );

}