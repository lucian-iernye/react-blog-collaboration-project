import React, { useState, useEffect } from "react";
// import styles from "./ArticlePage.module.scss";
import ArticlesList from "../../components/ArticlesList";
import NotFound from "../../components/NotFound";
import articleContent from "../../assets/article-contents";
import CommentsList from "../../components/CommentsList";
import UpvotesSection from "../../components/UpvotesSection";
import AddCommentForm from "../../components/AddCommentForm";

const ArticlePage = ({ match }) => {
  // another method for props?
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  // hooks
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  // return this is the article doesn't exist
  if (!article) return <NotFound />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1>{article.title}</h1>

      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />

      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}

      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />

      <h3>Other articles:</h3>

      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
