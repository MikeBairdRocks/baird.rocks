import React, {ReactNode} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {faGithub, faLinkedin, faStackOverflow, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {CMS_NAME, SOCIAL_GITHUB, SOCIAL_LINKEDIN, SOCIAL_STACKOVERFLOW, SOCIAL_TWITTER} from "../../common/Constants";
import SocialIconLink from "./SocialIconLink";

type NavbarProps = {
  transparent?: boolean
};

interface NavLinkProps extends NavbarProps {
  href: string;
  text: string;
  children?: ReactNode;
}

const NavLink: React.FunctionComponent<NavLinkProps> = (props) => {
  const linkClass = `${props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600"} px-4 py-5 lg:py-2 flex items-center text-md uppercase font-medium`;

  return (
    <Link href={props.href} passHref><a className={linkClass} aria-label={props.text} title={props.text}>{props.children}</a></Link>
  );
};

const Navbar: React.FunctionComponent<NavbarProps> = (props) =>{
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navClass = `${props.transparent ? "top-0 absolute z-50 w-full" : "relative shadow-lg bg-white shadow-lg"} flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg`;
  const baseLinkClass = props.transparent ? "text-white" : "text-gray-800";
  const socialClass = props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600";

  return (
    <nav className={navClass}>
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/" passHref>
            <a className={`${baseLinkClass} text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase`}>{CMS_NAME}</a>
          </Link>
          <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  aria-label="Menu"
                  onClick={() => setNavbarOpen(!navbarOpen)}>
            <span className={baseLinkClass}>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>
        </div>

        <div className={`z-50 lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none${navbarOpen ? " block rounded shadow-lg" : " hidden"}`} id="navbar-drop">
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <NavLink {...props} href="/blog" text="Blog">Blog</NavLink>
              <NavLink {...props} href="/about" text="About">About</NavLink>
              <NavLink {...props} href="/contact" text="Contact">Contact</NavLink>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <SocialIconLink color={socialClass} icon={faGithub} href={SOCIAL_GITHUB} text="Github" smallDeviceText={true} />
            </li>
            <li className="flex items-center">
              <SocialIconLink color={socialClass} icon={faTwitter} href={SOCIAL_TWITTER} text="Twitter" smallDeviceText={true} />
            </li>
            <li className="flex items-center">
              <SocialIconLink color={socialClass} icon={faStackOverflow} href={SOCIAL_STACKOVERFLOW} text="Stack Overflow" smallDeviceText={true} />
            </li>
            <li className="flex items-center">
              <SocialIconLink color={socialClass} icon={faLinkedin} href={SOCIAL_LINKEDIN} text="LinkedIn" smallDeviceText={true} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;