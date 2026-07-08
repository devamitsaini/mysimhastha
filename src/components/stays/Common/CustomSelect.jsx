import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function CustomSelect({
    icon,
    value,
    options,
    onChange
}) {

    const [open, setOpen] = useState(false);

    const ref = useRef(null);

    useEffect(() => {

        const handleClick = (e) => {

            if (!ref.current?.contains(e.target))
                setOpen(false);

        };

        document.addEventListener("mousedown", handleClick);

        return () =>
            document.removeEventListener("mousedown", handleClick);

    }, []);

    return (

        <div
            className="custom-select"
            ref={ref}
        >

            <button
                type="button"
                className="custom-select-trigger"
                onClick={() => setOpen(!open)}
            >

                <span className="left">

                    {icon}

                    <span>{value}</span>

                </span>

                <FiChevronDown
                    className={open ? "rotate" : ""}
                />

            </button>

            {open && (

                <div className="custom-dropdown">

                    {options.map((item) => (

                        <button
                            key={item}
                            type="button"
                            className="custom-option"
                            onClick={() => {

                                onChange(item);

                                setOpen(false);

                            }}
                        >

                            {item}

                        </button>

                    ))}

                </div>

            )}

        </div>

    );

}