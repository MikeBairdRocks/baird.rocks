import React from "react";
import {IPost} from "../../common/blog/IPost";
import Date from "../../components/Date";
import "../../common/StringExtensions";
import BlogLink from "./BlogLink";
import {Divider} from "../containers";

type BlogCardProps = {
  post: IPost
  featured?: boolean
  descriptionLimit?: number
};

const BlogCard: React.FunctionComponent<BlogCardProps> = (props) => {
  const featured = props.featured ?? false;
  const bgColor = featured ? "bg-indigo-800" : "bg-gray-800";
  const dividerColor = featured ? "text-indigo-800" : "text-gray-800";

  return (
    <BlogLink slug={props.post.slug}>
      <a className="w-full transition duration-200 ease-in-out transform hover:scale-105"
         title={props.post.title}
         aria-label={props.post.description}>
        <div className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg ${bgColor}`}>
          <img
            alt={props.post.title}
            src={props.post.image}
            className="w-full h-56 object-cover align-middle rounded-t-lg"
          />

          <blockquote className="relative p-8 mb-4">
            <Divider height={100} color={dividerColor} position="top" direction="right" />
            <h4 className="text-xl font-bold text-white">
              {props.post.title.truncate(5)}
            </h4>
            <p className="text-md font-light mt-2 text-gray-300">
              {props.post.description.truncate(props.descriptionLimit ?? 20)}
            </p>
            <p className="text-sm font-bold mt-5 text-gray-400">
              <Date value={props.post.date} /> • {props.post.content.readingTime()}
            </p>
          </blockquote>
        </div>
      </a>
    </BlogLink>
  );
};

export default BlogCard;
