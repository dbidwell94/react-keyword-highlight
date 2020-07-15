import React from "react";
import { v1 } from "uuid";

export default function (textToHighlight: string, keyword: string) {
  const splitMatch = new RegExp(`(${keyword})`);
  const matched = textToHighlight.split(splitMatch).filter((item) => {
    return item ? item : null;
  });
  return (
    <span>
      {!keyword ? textToHighlight : returnHighlighted(matched, keyword)}
    </span>
  );

  function returnHighlighted(matchedArray: Array<string>, keyword: string) {
    return (
      <React.Fragment>
        {matchedArray.map((item) => {
          return item === keyword ? (
            <span style={{ background: "rgb(50, 50, 50, .5)" }} key={v1()}>
              {item}
            </span>
          ) : (
            <React.Fragment key={v1()}>{item}</React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}
