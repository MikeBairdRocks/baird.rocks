import React, {ReactNode} from "react";
import Navbar from "./Navbar";
import {Footer} from "./index";

type LayoutProps = {
  children?: ReactNode,
  navbarTransparent?: boolean
};

const Layout: React.FunctionComponent<LayoutProps> = (props) => (
  <>
    <div className="text-gray-800 antialiased">
      <Navbar transparent={props.navbarTransparent} />
      <main>
        {props.children}
      </main>
    </div>
    <Footer />
  </>
);

export default Layout;
