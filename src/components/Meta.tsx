import React from "react";
import Head from "next/head";
import {
  CMS_NAME,
  CMS_URL,
  META_DESCRIPTION,
  META_LOCALE,
  META_TITLE,
  SOCIAL_TWITTER,
  SOCIAL_USERNAME
} from "../common/Constants";

export enum TwitterCard {
  summary,
  summary_large_image,
  app,
  player
}

type MetaProps = {
  title?: string
  description?: string
  url?: string
  image?: string
  twitterCard?: TwitterCard
  twitterUsername?: string
};

const Meta: React.FunctionComponent<MetaProps> = ({
  title = "",
  description= META_DESCRIPTION,
  url= "",
  image = "/images/michael-baird.jpg",
  twitterCard = TwitterCard.summary_large_image,
  twitterUsername= `@${SOCIAL_USERNAME}`
}) => {
  image = image?.substr(0, 4) === "http" ? image : `${CMS_URL}${image}`;
  const pathWithSlash = url[url.length -1] === "/" ? url : `${url}/`;
  title = title !== "" ? `${title} | ${CMS_NAME}` : META_TITLE;
  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta name="theme-color" content="#1a202c" />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      <meta name="og:site_name" content={META_TITLE} />
      <meta property="og:locale" content={META_LOCALE} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${CMS_URL}${pathWithSlash}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content={TwitterCard[twitterCard]} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image:src" content={image} />
      <meta property="twitter:image:alt" content={description} />
      <meta name="twitter:site" content={SOCIAL_TWITTER} />
      <meta name="twitter:creator" content={twitterUsername} />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

export default Meta;