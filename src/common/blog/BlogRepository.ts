import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {IPost} from "./IPost";
import {CONTENT_FOLDER} from "../Constants";
import {ITag} from "./ITag";

const postsDirectory = path.join(process.cwd(), `${CONTENT_FOLDER}/blog`);

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = (slug: string): IPost => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Combine the data with the id and contentHtml
  return {
    slug: realSlug,
    date: data.date,
    title: data.title,
    content,
    image: data.image,
    description: data.description,
    tags: data.tags
  } as IPost;
};

export const getAllPosts = (): IPost[] => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};

export const getAllTags = (): ITag[] => {
  const slugs = getPostSlugs();
  const tags = slugs
    .map((slug) => getPostBySlug(slug))
    .flatMap(post => {
      return post.tags.map(t => {
        return {
          name: t,
          slug: `/tag/${t.toLowerCase()}`
        } as ITag;
      });
    });

  return tags;
};

export const getAllPostsByTag = (tag: string): IPost[] => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter(post => post.tags.includes(tag))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};