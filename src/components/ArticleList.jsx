import React from "react";
import Article from "./Article";

// Renders the list of blog posts inside a main landmark
function ArticleList({ posts = [] }) {
  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={post.id ?? ${post.title}-${index}}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;