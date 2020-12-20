import React from "react";
import {META_DESCRIPTION, OWNER} from "../common/Constants";
import {IPost} from "../common/blog/IPost";
import {HeroSplash, Layout} from "../components/containers";
import BlogCard from "../components/blog/BlogCard";
import {NextPage} from "next";
import {getAllPosts} from "../common/blog/BlogRepository";
import Meta from "../components/Meta";

type HomeProps = {
  lastPosts: IPost[]
  featured: IPost
};

const Home: NextPage<HomeProps> = (props) => {
  return (
    <Layout navbarTransparent={true}>
      <Meta title="Home" />

      <HeroSplash label="Programmer's Laptop" image="/images/splash.jpg" minHeight="60vh" opacity="opacity-50" divider={{height: 75, color: "text-gray-300 dark:text-gray-900"}}>
        <h1 className="text-white font-semibold text-5xl">
          Hi, I'm {OWNER}.
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          {META_DESCRIPTION}
        </p>
      </HeroSplash>

      <section className="pb-20 bg-gray-300 dark:bg-gray-900 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <BlogCard featured={true} post={props.featured} descriptionLimit={50}  />
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {props.lastPosts.map((post: IPost) => (
              <div key={post.slug} className="flex w-full md:w-4/12 px-4">
                <BlogCard featured={false} post={post}  />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();
  const featured = posts[0];

  const postsMinusFeatured = posts.filter(x => x.slug !== featured.slug);
  const lastPosts = postsMinusFeatured.slice(Math.max(postsMinusFeatured.length - 3, 0));
  return {
    props: {
      lastPosts,
      featured
    }
  };
};

export default Home;
