import {CONTENT_FOLDER} from "../Constants";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {IPage} from "./IPage";

const pagesDirectory = `../${CONTENT_FOLDER}/pages`;

export const getPageSlugs = () => {
  return fs.readdirSync(pagesDirectory);
};

export const getPageBySlug = (slug: string): IPage => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(pagesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Combine the data with the id and contentHtml
  return {
    slug: realSlug,
    title: data.title,
    content: content.toString(),
    image: data.image,
    description: data.description
  } as IPage;
};

export const getAllPages = (): IPage[] => {
  const slugs = getPageSlugs();
  const pages = slugs
    .map((slug) => getPageBySlug(slug));
  return pages;
};