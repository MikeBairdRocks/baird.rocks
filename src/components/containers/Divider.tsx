import React from "react";

type DividerProps = {
  color: string
  height?: number
  width?: number
  position?: "bottom" | "top"
  direction?: "left" | "right"
};

const Divider: React.FunctionComponent<DividerProps> = (props) => {
  const width = props.width ?? 4000;
  const height = props.height ?? 100;
  const margin = height/2;
  const position = props.position ?? "top";
  const direction = props.direction ?? "right";
  const baseclass = position === "bottom" ? "top-auto bottom-0" : "bottom-auto top-0";
  const points = direction === "right" ? `${width},0 ${width},${height} 0,${height}` : `0,0 ${width},${height} 0,${height}`;
  return (
    <div className={`${baseclass} left-0 right-0 w-full absolute pointer-events-none overflow-hidden`}
         style={{height: `${height-margin+1}px`, transform: "translateZ(0)", marginTop: `-${margin}px`}}>
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox={`0 0 ${width} ${height-1}`}
        x="0"
        y="0"
      >
        <polygon className={`${props.color} fill-current`} points={points} />
      </svg>
    </div>
  );
};

export default Divider;
