import React from "react";
import {getAllPosts} from "../../common/blog/BlogRepository";
import {IPost} from "../../common/blog/IPost";
import {HeroSplash, Layout, Page} from "../../components/containers";
import Meta from "../../components/Meta";
import BlogList from "../../components/blog/BlogList";
import {NextPage} from "next";

type BlogProps = {
  posts: IPost[]
};

const Blog: NextPage<BlogProps> = (props) => {
  return (
    <Page title="Blog" splash={{label: "Programmer's Laptop", image: "/images/splash.jpg", minHeight: "40vh", opacity: "opacity-50"}}>
      <BlogList posts={props.posts} />
    </Page>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts
    }
  };
}

export default Blog;