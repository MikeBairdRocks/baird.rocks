import {AppProps} from "next/app";
import React from "react";

// Styles
import "../styles/index.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../components/FontAwesome";
import Theme from "../components/Theme";

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
};

export default MyApp;

