# react-keyword-highlight
Takes a string of text and a keyword, and returns a React element with the keyword highlighted in said string of text

## To Install:

npm install --save react-keyword-highlight

## example

```javascript
import React from "react";
import highlight from "react-keyword-highlight";
import { text } from "@fortawesome/fontawesome-svg-core";

const PostHeader = props => {

  const {searchKeyword, thumbnailUrl, username} = props

  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={thumbnailUrl}
        />
      </div>
  <h2>{highlight(username, searchKeyword)}</h2>
    </div>
  );
};

export default PostHeader;
```
