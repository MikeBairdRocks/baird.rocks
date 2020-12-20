import React, {ReactElement, useContext} from "react";
import {ThemeContext} from "./Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

type DarkToggleProps = {
  darkIcon?: string | ReactElement
  lightIcon?: string | ReactElement
  darkIconClass?: string
  lightIconClass?: string
};

const DarkToggle: React.FunctionComponent<DarkToggleProps> = (props) => {
  const {isDark, toggle} = useContext(ThemeContext);

  const defaultIconClass = "text-yellow-500";
  const darkIcon = props.darkIcon ?? <FontAwesomeIcon className={props.darkIconClass ?? defaultIconClass} icon={faMoon} />;
  const lightIcon = props.lightIcon ?? <FontAwesomeIcon className={props.lightIconClass ?? defaultIconClass} icon={faSun} />;
  const icon = isDark ? lightIcon : darkIcon;
  const content = props.children ? <>{props.children} {icon}</> : <>{icon}</>;
  return (
    <button type="button" className="font-medium" onClick={toggle}>{content}</button>
  );
};

export default DarkToggle;