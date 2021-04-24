import React, {ReactElement, ReactHTMLElement, useContext, useEffect, useLayoutEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {ThemeContext} from "./Theme";

interface DarkToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  darkIcon?: string | ReactElement;
  lightIcon?: string | ReactElement;
  darkIconClass?: string;
  lightIconClass?: string;
}

const DarkToggle: React.FunctionComponent<DarkToggleProps> = (props) => {
  const [content, setContent] = useState<ReactElement>(<></>);
  const {isDark, toggle} = useContext(ThemeContext);

  useEffect(() => {
    setContent(getContent);
  }, [isDark]);

  const getContent = (): ReactElement => {
    const defaultIconClass = "text-yellow-500";
    const darkIcon = props.darkIcon ?? <FontAwesomeIcon className={props.darkIconClass ?? defaultIconClass} icon={faMoon}/>;
    const lightIcon = props.lightIcon ?? <FontAwesomeIcon className={props.lightIconClass ?? defaultIconClass} icon={faSun}/>;
    const icon = isDark ? lightIcon : darkIcon;
    return props.children ? <>{props.children} {icon}</> : <>{icon}</>;
  };

  const className = props.className ? `font-medium ${props.className}` : "font-medium";

  return (
    <button type="button" className={className} aria-label="Toggle Theme" onClick={toggle}>{content}</button>
  );
};

export default DarkToggle;