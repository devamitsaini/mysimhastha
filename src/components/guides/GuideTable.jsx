import React from "react";

export default function GuideTable({ table }) {
  if (!table) return null;

  return (
    <div className="guide-table-wrapper">

      {table.title && (
        <h3>{table.title}</h3>
      )}

      <table className="guide-table">

        <thead>
          <tr>
            {table.headers.map((header, index) => (
              <th key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>

          {table.rows.map((row, rowIndex) => (

            <tr key={rowIndex}>

              {row.map((cell, cellIndex) => (

                <td key={cellIndex}>
                  {cell}
                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}