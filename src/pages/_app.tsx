import {AppProps} from "next/app";
import React from "react";

// Styles
import "../styles/index.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../components/FontAwesome";

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

export default MyApp;

