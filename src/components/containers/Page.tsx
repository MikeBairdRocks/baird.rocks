import React, {ReactElement} from "react";
import {HeroSplash, Layout} from "./index";
import Meta from "../Meta";
import {HeroSplashProps} from "./HeroSplash";
import {META_DESCRIPTION} from "../../common/Constants";

interface PageProps {
  title: string;
  splash: HeroSplashProps;
  splashTitle?: string;
  splashSecondary?: string;
}

const Page: React.FunctionComponent<PageProps> = (props) => {
  const darkColor = "gray-900";
  const lightColor = "gray-300";
  const splashTitle = props.splashTitle ?? props.title;
  const Secondary = () => {
    if(!props.splashSecondary)
      return null;

    return <p className="mt-4 text-lg text-gray-300">{props.splashSecondary}</p>;
  };

  return (
    <Layout navbarTransparent={true}>
      <Meta title={props.title} />

      <HeroSplash {...props.splash} opacity="opacity-50" divider={{height: 75, color: `text-${lightColor} dark:text-${darkColor}`}}>
        <h1 className="text-white font-semibold text-5xl">{splashTitle}</h1>
        <Secondary />
      </HeroSplash>

      <div className={`pb-20 bg-${lightColor} dark:bg-${darkColor}`}>
        {props.children}
      </div>
    </Layout>
  );
};

export default Page;