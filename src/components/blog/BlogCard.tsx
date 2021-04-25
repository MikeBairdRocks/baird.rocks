import React from "react";
import {IPost} from "../../common/blog/IPost";
import Date from "../../components/Date";
import "../../common/StringExtensions";
import BlogLink from "./BlogLink";
import {Divider} from "../containers";
import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTag} from "@fortawesome/free-solid-svg-icons";
import TagLinks from "./TagLinks";

type BlogCardProps = {
  post: IPost
  featured?: boolean
  descriptionLimit?: number
};

const BlogCard: React.FunctionComponent<BlogCardProps> = (props) => {
  const featured = props.featured ?? false;
  const bgColor = featured ? "bg-indigo-800" : "bg-gray-200 dark:bg-gray-800";
  const dividerColor = featured ? "text-indigo-800" : "text-gray-200 dark:text-gray-800";
  const headTextColor = featured ? "text-white" : "text-gray-800 dark:text-white";
  const bodyTextColor = featured ? "text-white" : "text-gray-700 dark:text-gray-300";
  const timestampColor = featured ? "text-gray-300" : "text-gray-600 dark:text-gray-400";
  const tagColor = featured ? "text-indigo-200" : "text-indigo-500 dark:text-indigo-200";
  const width = featured ? 600 : 400;
  const height = featured ? 300 : 200;

  return (
    <BlogLink slug={props.post.slug}>
      <a className="w-full transition duration-200 ease-in-out transform hover:scale-105"
         title={props.post.title}
         aria-label={props.post.description}>
        <div className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg ${bgColor}`}>
          <Image
            alt={props.post.title}
            src={props.post.image}
            width={width}
            height={height}
            loading="eager"
            objectFit="cover"
            className="w-full h-56 object-cover align-middle rounded-t-lg"
          />

          <blockquote className="relative p-4 mb-4">
            <Divider height={100} color={dividerColor} position="top" direction="right" />
            <h1 className={`text-xl font-bold ${headTextColor}`}>
              {props.post.title.truncate(5)}
            </h1>
            <div className={`text-md font-light mt-2 ${bodyTextColor}`}>
              {props.post.description.truncate(props.descriptionLimit ?? 20)}
            </div>
            <div className={`text-sm font-bold mt-4 ${timestampColor}`}>
              <Date value={props.post.date} /> • {props.post.content.readingTime()}
            </div>
            <div className={`text-sm mt-5 ${tagColor}`}>
              <TagLinks tags={props.post.tags} />
            </div>
          </blockquote>
        </div>
      </a>
    </BlogLink>
  );
};

export default BlogCard;
