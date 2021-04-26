import {IPost} from "./blog/IPost";
import {AUTHOR, CMS_NAME, CMS_URL, EMAIL, FEED_ATOM, FEED_JSON, FEED_RSS, META_DESCRIPTION} from "./Constants";
import {Feed} from "feed";
import * as fs from "fs";
import remark from "remark";
import html from "remark-html";

const feed = new Feed(
  {
    title: CMS_NAME,
    description: META_DESCRIPTION,
    id: CMS_URL,
    link: CMS_URL,
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: `${CMS_URL}/images/michael-baird2.jpg`,
    favicon: `${CMS_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Michael Baird`,
    generator: CMS_URL, // optional, default = 'Feed for Node.js'
    feedLinks: {
      json: `${CMS_URL}/${FEED_JSON}`,
      atom: `${CMS_URL}/${FEED_ATOM}`,
      rss: `${CMS_URL}/${FEED_RSS}`
    },
    author: {
      name: AUTHOR,
      email: EMAIL,
      link: CMS_URL
    }
  }
);

const generateFeeds = (posts: IPost[]) => {
  posts.forEach((post) => {
    const content = remark().use(html).processSync(post.content);

    feed.addItem({
      title: post.title,
      id: post.slug,
      link: post.slug,
      description: post.description,
      content: content.toString(),
      date: new Date(post.date),
      image: `${CMS_URL}/${post.image}`,
      author: [{
        name: AUTHOR,
        email: EMAIL,
        link: CMS_URL
      }]
    });
  });

  const rss = feed.rss2();
  const atom = feed.atom1();
  const json = feed.json1();

  fs.writeFileSync(`./public/${FEED_RSS}`, rss);
  fs.writeFileSync(`./public/${FEED_ATOM}`, atom);
  fs.writeFileSync(`./public/${FEED_JSON}`, json);
};

export default generateFeeds;