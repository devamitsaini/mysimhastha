import React from "react";

export default function GuideList({ list }) {
  if (!list?.items?.length) return null;

  const Tag = list.ordered ? "ol" : "ul";

  return (
    <div className="guide-list">

      {list.title && (
        <h3>{list.title}</h3>
      )}

      <Tag>

        {list.items.map((item, index) => (

          <li key={index}>

            {typeof item === "string"
              ? item
              : item.text}

          </li>

        ))}

      </Tag>

    </div>
  );
}