import "./../../guides/styles/guidev3.css";

export default function TableOfContents({ sections = [] }) {

    const tocItems = sections.filter(

    section =>

        section.id &&

        (
            section.title ||
            section.text
        )

);

    if (!tocItems.length) return null;

    const scrollToSection = (id) => {

        const element = document.getElementById(id);

        if (!element) return;

        const offset = 90;

        const top =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

        window.scrollTo({

            top,

            behavior: "smooth",

        });

    };

    return (

        <section className="guide-toc">

            <h3 className="guide-toc-title">

                📑 Table of Contents

            </h3>

            <div className="guide-toc-list">

                {tocItems.map((item, index) => (

                    <button

                        key={item.id}

                        className="guide-toc-item"

                        onClick={() => scrollToSection(item.id)}

                    >

                        <span className="guide-toc-number">

                            {String(index + 1).padStart(2, "0")}

                        </span>

                        <span>

                            {item.title || item.text}

                        </span>

                    </button>

                ))}

            </div>

        </section>

    );

}