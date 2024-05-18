import React from "react";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { Article } from "../../component";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article
            imgUrl={blog01}
            date="Jan 28, 2024"
            title="GPT-3: The Game Changer in Natural Language Processing"
            url="https://tinyurl.com/ktj7vhdh"
          />
        </div>
        <div className="gpt3__blog-container__groupB">
          <Article
            imgUrl={blog02}
            date="Apr 24,2024"
            title="Decoding GPT-3: The Future of AI Text Generation"
            url="https://tinyurl.com/384wk852"
          />
          <Article
            imgUrl={blog03}
            date="Apr 29,2023"
            title="GPT-3: Revolutionizing Content Creation"
            url="https://tinyurl.com/2m9d5nxt"
          />
          <Article
            imgUrl={blog04}
            date="Mar 25,2023"
            title="Understanding GPT-3: A Deep Dive into AI Language Models"
            url="https://tinyurl.com/2rs5846u"
          />
          <Article
            imgUrl={blog05}
            date="Mar 25,2021"
            title="The Power of GPT-3 in Modern AI Applications"
            url="https://tinyurl.com/263uc29j"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
