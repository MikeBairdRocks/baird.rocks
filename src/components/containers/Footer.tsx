import React from "react";
import {Divider} from "./index";
import Link from "next/link";
import {CMS_NAME, SOCIAL_GITHUB, SOCIAL_LINKEDIN, SOCIAL_STACKOVERFLOW, SOCIAL_TWITTER} from "../../common/Constants";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faGithub, faStackOverflow, faLinkedin} from "@fortawesome/free-brands-svg-icons";

type FooterProps = {

};

type FooterButtonProps = {
  color: string
  icon: IconProp
  url: string
};

const FooterButton: React.FunctionComponent<FooterButtonProps> = (props) => {
  return (
    <a href={props.url} className={`${props.color} text-2xl font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3`}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
};

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const linkClass = "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm";

  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <Divider height={100} color="text-gray-300" position="top" />

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Let's keep in touch!
            </h4>
            <div className="mt-6 mb-6">
              <FooterButton color="text-black" url={SOCIAL_GITHUB} icon={faGithub} />
              <FooterButton color="text-blue-400" url={SOCIAL_TWITTER} icon={faTwitter} />
              <FooterButton color="text-orange-400" url={SOCIAL_STACKOVERFLOW} icon={faStackOverflow} />
              <FooterButton color="text-blue-600" url={SOCIAL_LINKEDIN} icon={faLinkedin} />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto mb-6">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
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
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
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
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} {CMS_NAME}.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;