import React from "react";
import "./Article.scss";
function Article({ children }) {
  return <p className="Article">{children}</p>;
}

export default Article;
