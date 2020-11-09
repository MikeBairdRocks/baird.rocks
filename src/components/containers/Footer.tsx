import React from "react";
import {Divider} from "./index";
import Link from "next/link";
import {CMS_NAME, SOCIAL_GITHUB, SOCIAL_LINKEDIN, SOCIAL_STACKOVERFLOW, SOCIAL_TWITTER} from "../../common/Constants";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faGithub, faStackOverflow, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import SocialIconLink from "./SocialIconLink";

type FooterProps = {

};

type FooterButtonProps = {
  color: string
  icon: IconProp
  url: string
  text: string
};

const FooterButton: React.FunctionComponent<FooterButtonProps> = (props) => {
  return (
    <a href={props.url}
       aria-label={props.text}
       className={`${props.color} text-2xl font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3`}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
};

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const linkClass = "text-gray-700 hover:text-gray-900 font-semibold block py-1 pb-2 text-md";
  const headerClass = "text-gray-900 block uppercase text-md font-bold mb-2";

  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <Divider height={100} color="text-gray-300" position="top" />

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <span className="text-3xl font-semibold">Let's keep in touch!</span>
            <div className="mt-6 mb-6">
              <SocialIconLink color="text-black" icon={faGithub} href={SOCIAL_GITHUB} text="Github" />
              <SocialIconLink color="text-blue-400" icon={faTwitter} href={SOCIAL_TWITTER} text="Twitter" />
              <SocialIconLink color="text-orange-400" icon={faStackOverflow} href={SOCIAL_STACKOVERFLOW} text="Stack Overflow" />
              <SocialIconLink color="text-blue-600" icon={faLinkedin} href={SOCIAL_LINKEDIN} text="LinkedIn" />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto mb-6">
                  <span className={headerClass}>
                    Useful Links
                  </span>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/about" passHref>
                      <a className={linkClass}>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" passHref>
                      <a className={linkClass}>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <a className={linkClass} href={SOCIAL_GITHUB}>Github</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className={headerClass}>Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/privacy" passHref>
                      <a className={linkClass}>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" passHref>
                      <a className={linkClass}>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-700 font-semibold py-1">
              Copyright © {new Date().getFullYear()} {CMS_NAME}.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;