import React from "react";

import GuideText from "./GuideText";
import GuideList from "./GuideList";
import GuideTable from "./GuideTable";
import GuideInfoBox from "./GuideInfoBox";

export default function GuideRenderer({ content }) {
  if (!content?.length) return null;

  return (
    <>
      {content.map((block, index) => {
        switch (block.type) {
          case "text":
            return (
              <GuideText
                key={index}
                text={block.text}
              />
            );

          case "list":
            return (
              <GuideList
                key={index}
                list={block.list}
              />
            );

          case "table":
            return (
              <GuideTable
                key={index}
                table={block.table}
              />
            );

          case "infoBox":
            return (
              <GuideInfoBox
                key={index}
                box={block.box}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}