import React from "react";
import {HeroSplash, Layout} from "../components/containers";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowDown,
  faArrowUp,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import Meta from "../components/Meta";

const _404: React.FunctionComponent = () => {
  return (
    <Layout navbarTransparent={true}>
      <Meta title="Not Found" />

      <HeroSplash label="Compass" hideDivider={true} image="/images/compass.webp">
        <h1 className="text-white font-semibold text-5xl">
          <FontAwesomeIcon icon={faExclamationTriangle} /> 404 - Page Not Found
        </h1>
        <p className="font-bold mt-5 text-gray-400">
          I'm not quite sure what went wrong. You can go back <FontAwesomeIcon icon={faArrowCircleLeft} />, or try some of the links above <FontAwesomeIcon icon={faArrowUp} /> or below <FontAwesomeIcon icon={faArrowDown} />.
        </p>
      </HeroSplash>
    </Layout>
  );
};

export default _404;