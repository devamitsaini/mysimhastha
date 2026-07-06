import "./../../guides/styles/guidev3.css";

export default function OfficialResources({ resources = [] }) {

    if (!resources.length) return null;

    return (

        <section className="guide-official-resources guide-section">

            <h2>Official Resources</h2>

            <div className="official-resources-grid">

                {resources.map((item, index) => (

                    <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="official-resource-card"
                    >

                        <div className="official-resource-icon">
                            ✅
                        </div>

                        <div>

                            <h3>{item.title}</h3>

                            <p>Visit Official Website</p>

                        </div>

                    </a>

                ))}

            </div>

        </section>

    );

}