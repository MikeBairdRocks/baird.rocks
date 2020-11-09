import React from "react";
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type SocialIconLinkProps = {
  href: string;
  text?: string;
  icon: IconProp;
  size?: SizeProp;
  color?: string;
  smallDeviceText?: boolean;
};

const SocialIconLink: React.FunctionComponent<SocialIconLinkProps> = (props) => {
  const iconClass = `${props.color ?? "text-gray-500"} text-3xl leading-lg`;
  const text = props.text ?? "Share";
  const size = props.size ?? "1x";
  const smallDeviceText = props.smallDeviceText ?? false;

  return (
    <a href={props.href}
       aria-label={props.text}
       className={`${props.color} text-2xl font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3`}>
      <span className={iconClass}><FontAwesomeIcon icon={props.icon} size={size} /></span>
      {smallDeviceText ? <span className="lg:hidden inline-block ml-2">{text}</span> : <></>}
    </a>
    //
    // <Link {...props} href={props.href} passHref>
    //   <span className={iconClass}><FontAwesomeIcon icon={props.icon} size={size} /></span>
    //   <span className="lg:hidden inline-block ml-2">{text}</span>
    // </Link>
  );
};

export default SocialIconLink;