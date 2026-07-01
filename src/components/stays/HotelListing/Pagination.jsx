import { ChevronLeft, ChevronRight } from "lucide-react";

import "./Pagination.css";

const Pagination = ({
  filters,
  setFilters,
  total,
}) => {

  const totalPages = Math.ceil(total / filters.limit);

  if (totalPages <= 1) return null;

  return (

    <div className="pagination">

      <button
        className="pagination-nav"
        disabled={filters.page === 1}
        onClick={() =>
          setFilters(prev => ({
            ...prev,
            page: prev.page - 1,
          }))
        }
      >
        <ChevronLeft size={16} />
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => (

        <button
          key={i}
          className={
            filters.page === i + 1
              ? "active"
              : ""
          }
          onClick={() =>
            setFilters(prev => ({
              ...prev,
              page: i + 1,
            }))
          }
        >
          {i + 1}
        </button>

      ))}

      <button
        className="pagination-nav"
        disabled={filters.page === totalPages}
        onClick={() =>
          setFilters(prev => ({
            ...prev,
            page: prev.page + 1,
          }))
        }
      >
        Next
        <ChevronRight size={16} />
      </button>

    </div>

  );

};

export default Pagination;
