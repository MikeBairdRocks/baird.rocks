import React from "react";
import {getAllPosts} from "../../common/blog/BlogRepository";
import {IPost} from "../../common/blog/IPost";
import {HeroSplash, Layout} from "../../components/containers";
import BlogCard from "../../components/blog/BlogCard";
import Meta from "../../components/Meta";

type BlogProps = {
  posts: IPost[]
};

const Blog: React.FunctionComponent<BlogProps> = ({posts}) => {
  return (
    <Layout navbarTransparent={true}>
      <Meta title="Blog" />

      <HeroSplash image="/images/splash.jpg" minHeight="40vh" opacity="opacity-50" divider={{height: 75, color: "text-gray-900"}}>
        <h1 className="text-white font-semibold text-5xl">Blog</h1>
      </HeroSplash>

      <section className="pb-20 bg-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap">
            {posts.map((post: IPost) => (
              <div key={post.slug} className="flex w-full md:w-4/12 px-4">
                <BlogCard post={post} descriptionLimit={15}  />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
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