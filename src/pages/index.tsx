import React from "react";
import {META_DESCRIPTION, OWNER} from "../common/Constants";
import {IPost} from "../common/blog/IPost";
import BlogCard from "../components/blog/BlogCard";
import {NextPage} from "next";
import {getAllPosts} from "../common/blog/BlogRepository";
import Page from "../components/containers/Page";

type HomeProps = {
  lastPosts: IPost[]
  featured: IPost
};

const Home: NextPage<HomeProps> = (props) => {
  return (
    <Page
      title="Home"
      splashTitle={`Hi, I'm ${OWNER}.`}
      splashSecondary={META_DESCRIPTION}
      splash={{label: "Programmer's Laptop", image: "/images/splash.jpg", minHeight: "60vh"}}
    >
      <section className="-mt-24">
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
    </Page>
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
