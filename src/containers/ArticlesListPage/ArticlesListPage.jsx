import React from "react";

// import styles from "./ArticlesList.module.scss";

import ArticlesList from "../../components/ArticlesList";
import articleContent from "../../assets/article-contents";

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articleContent} />
    </>
  );
};

export default ArticlesListPage;
