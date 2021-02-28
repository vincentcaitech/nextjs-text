import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem.js";

export default ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article}></ArticleItem>
      ))}
    </div>
  );
};
