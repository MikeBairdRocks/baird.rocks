import Link from "next/link";
import React from "react";

type BlogLinkProps = {
  slug: string;
};

const BlogLink: React.FunctionComponent<BlogLinkProps> = (props) => {
  return (
    <Link href={`/blog/${props.slug}`}>
      {props.children}
    </Link>
  );
};

export default BlogLink;