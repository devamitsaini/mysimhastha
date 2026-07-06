import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

import { useCurrency } from "../../hooks/useCurrency";
import { CURRENCIES } from "../../utils/currency";
import "./CurrencyToggle.css";

const CurrencyToggle = () => {
  const [currency, setCurrency] = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const active = CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0];

  return (
    <div className="currency-toggle" ref={ref}>
      <button
        type="button"
        className="currency-toggle-btn"
        onClick={() => setOpen((o) => !o)}
      >
        {active.code}
        <ChevronDown size={14} />
      </button>

      {open && (
        <div className="currency-toggle-menu">
          {CURRENCIES.map((c) => (
            <button
              type="button"
              key={c.code}
              className={c.code === currency ? "active" : ""}
              onClick={() => {
                setCurrency(c.code);
                setOpen(false);
              }}
            >
              <span>{c.symbol}</span>
              {c.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyToggle;
