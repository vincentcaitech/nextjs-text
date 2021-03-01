import Link from "next/link";
import { useRouter } from "next/router";

export default ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>This is article {article.id}
      <br></br>
      <Link href="/">Go Back &rarr; </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article: article,
    },
  };
};

export const getStaticPaths = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const articles = await res.json();
  const ids = articles.map((a) => a.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths: paths,
    fallback: false,
  };
};
