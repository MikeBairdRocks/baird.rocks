import React from "react";
import Link from "next/link";

type TagLinksProps = {
  tags: string[]
};

const TagLinks: React.FunctionComponent<TagLinksProps> = (props) => {
  return (
    <>
    {props.tags.map(tag => <span className="pr-2"><Link key={tag} href={`/tag/${tag}`}>{`#${tag}`}</Link></span>)}
    </>
  );
};

export default TagLinks;