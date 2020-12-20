import ReactMarkdown from "react-markdown";
import Date from "../../components/Date";
import React, {useEffect} from "react";
import {IPost} from "../../common/blog/IPost";
import {HeroSplash, Layout} from "../../components/containers";
import "../../common/StringExtensions";
import {getAllPosts, getPostBySlug} from "../../common/blog/BlogRepository";
import Meta from "../../components/Meta";
import Prism from "prismjs";
import "prismjs/components/prism-csharp";
import Container from "../../components/containers/Container";

type PostProps = {
  post: IPost
};

const Post: React.FunctionComponent<PostProps> = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout navbarTransparent={true}>
      <Meta title={post.title} description={post.description} url={post.slug} image={post.image} />

      <HeroSplash label={post.title} image={post.image} minHeight="50vh" divider={{color: "text-gray-300 dark:text-gray-900", height: 75}}>
        <h1 className="text-white font-semibold text-5xl">
          {post.title}
        </h1>
        <p className="text-sm font-bold mt-5 text-gray-400">
          <Date value={post.date} /> • {post.content.readingTime()}
        </p>
      </HeroSplash>

      <article className="pb-20 bg-gray-300 dark:bg-gray-900">
        <Container>
          <ReactMarkdown escapeHtml={false} source={post.content} />
        </Container>
      </article>
    </Layout>
  );
};

type Params = {
  params: {
    slug: string
  }
};

export const getStaticProps = async ({params}: Params) => {
  const post = getPostBySlug(params.slug);
  return {
    props: {
      post
    }
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: `${post.slug}`,
        },
      };
    }),
    fallback: false
  };
};

export default Post;
