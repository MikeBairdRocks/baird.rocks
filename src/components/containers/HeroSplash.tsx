import HeroImage from "./HeroImage";
import {Divider} from "./index";
import {Opacity} from "../../common/Colors";
import React from "react";

export type HeroSplashProps = {
  minHeight?: string
  image: string
  label: string
  opacity?: Opacity
  hideDivider?: boolean
  divider?: {
    height: number
    color: string
  }
};

const HeroSplash: React.FunctionComponent<HeroSplashProps> = (props) => {
  const divider = props.divider ?? {
    height: 75,
    color: "text-gray-900"
  };
  const minHeight = props.minHeight ?? "75vh";

  return (
    <div className="relative pt-16 pb-16 flex content-center items-center justify-center" style={{minHeight}}>
      <HeroImage image={props.image} opacity={props.opacity} label={props.label} />
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              {props.children}
            </div>
          </div>
        </div>
      </div>
      {!props.hideDivider ? <Divider height={100} color={divider.color} position="bottom" /> : <></>}
    </div>
  );
};

export default HeroSplash;