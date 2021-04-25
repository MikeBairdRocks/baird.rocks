import {IPost} from "../../common/blog/IPost";
import React from "react";
import BlogCard from "./BlogCard";
import {Layout} from "../containers";


type BlogListProps = {
  posts: IPost[];
};

const BlogList: React.FunctionComponent<BlogListProps> = (props) => {
  return (
    <section className="pb-20 bg-gray-300 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap">
          {props.posts.map((post: IPost) => (
            <div key={post.slug} className="flex w-full md:w-4/12 px-4">
              <BlogCard post={post} descriptionLimit={15}  />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;