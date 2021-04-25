import {IPost} from "../../common/blog/IPost";
import React from "react";
import {getAllPostsByTag, getAllTags} from "../../common/blog/BlogRepository";
import {GetStaticPaths} from "next";
import {Params} from "next/dist/next-server/server/router";
import {Page} from "../../components/containers";
import BlogList from "../../components/blog/BlogList";

type TagPostsProps = {
  tag: string;
  posts: IPost[];
};

const TagPosts: React.FunctionComponent<TagPostsProps> = (props) => {
  return (
    <Page title={props.tag} splashSecondary={`A collection of ${props.posts.length} posts.`} splash={{label: "Programmer's Laptop", image: "/images/splash.jpg", minHeight: "40vh", opacity: "opacity-50"}}>
      <BlogList posts={props.posts} />
    </Page>
  );
};

export const getStaticProps = async ({params}: Params) => {
  const posts = getAllPostsByTag(params.tag);
  return {
    props: {
      tag: params.tag,
      posts
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();

  return {
    paths: tags.map((t) => {
      return {
        params: {
          tag: `${t.name}`,
        },
      };
    }),
    fallback: false
  };
};

export default TagPosts;