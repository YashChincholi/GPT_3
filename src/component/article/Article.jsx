import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title, url }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt={date} />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <a href={url}>
          <p>Read full article</p>
        </a>
      </div>
    </div>
  );
};

export default Article;
