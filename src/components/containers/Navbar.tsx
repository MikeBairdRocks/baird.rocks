import React, {ReactNode} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {faGithub, faLinkedin, faStackOverflow, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {SOCIAL_GITHUB, SOCIAL_LINKEDIN, SOCIAL_STACKOVERFLOW, SOCIAL_TWITTER} from "../../common/Constants";

type NavbarProps = {
  transparent?: boolean
};

interface NavLinkProps extends NavbarProps {
  href: string;
  children?: ReactNode;
}

interface SocialIconLinkProps extends NavbarProps {
  href: string;
  text?: string;
  icon: IconProp;
}

const NavLink: React.FunctionComponent<NavLinkProps> = (props) => {
  const linkClass = `${props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600"} px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-medium`;
  return (
    <Link href={props.href} passHref><a className={linkClass}>{props.children}</a></Link>
  );
};

const SocialIconLink: React.FunctionComponent<SocialIconLinkProps> = (props) => {
  const iconClass = `${props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500"} text-xl leading-lg`;

  return (
    <NavLink {...props} href={props.href}>
      <span className={iconClass}><FontAwesomeIcon icon={props.icon} /></span>
      <span className="lg:hidden inline-block ml-2">{props.text ?? "Share"}</span>
    </NavLink>
  );
};

const Navbar: React.FunctionComponent<NavbarProps> = (props) =>{
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navClass = `${props.transparent ? "top-0 absolute z-50 w-full" : "relative shadow-lg bg-white shadow-lg"} flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg`;
  const baseLinkClass = props.transparent ? "text-white" : "text-gray-800";

  return (
    <nav className={navClass}>
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/" passHref>
            <a className={`${baseLinkClass} text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase`}>
              Michael Baird
            </a>
          </Link>
          <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}>
            <span className={baseLinkClass}>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>
        </div>

        <div className={`lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none${navbarOpen ? " block rounded shadow-lg" : " hidden"}`} id="example-navbar-warning">
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <NavLink {...props} href="/blog">Blog</NavLink>
              <NavLink {...props} href="/about">About</NavLink>
              <NavLink {...props} href="/contact">Contact</NavLink>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <SocialIconLink {...props} icon={faGithub} href={SOCIAL_GITHUB} text="Github" />
            </li>
            <li className="flex items-center">
              <SocialIconLink {...props} icon={faTwitter} href={SOCIAL_TWITTER} text="Twitter" />
            </li>
            <li className="flex items-center">
              <SocialIconLink {...props} icon={faStackOverflow} href={SOCIAL_STACKOVERFLOW} text="Stack Overflow" />
            </li>
            <li className="flex items-center">
              <SocialIconLink {...props} icon={faLinkedin} href={SOCIAL_LINKEDIN} text="LinkedIn" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;