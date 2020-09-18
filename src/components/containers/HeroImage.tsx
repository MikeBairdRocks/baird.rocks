import React from "react";
import {Opacity} from "../../common/Colors";

type HeroImageProps = {
  image: string
  opacity?: Opacity
};

const HeroImage: React.FunctionComponent<HeroImageProps> = (props) => {
  const opacity = props.opacity ?? "opacity-75";
  return (
    <div className="absolute top-0 w-full h-full bg-center bg-cover"
         style={{
           backgroundImage: `url('${props.image}')`
         }}>
      <span className={`w-full h-full absolute ${opacity} bg-black`}></span>
    </div>
  );
};

export default HeroImage;