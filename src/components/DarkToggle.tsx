import React, {ReactElement, useEffect, useLayoutEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

type DarkToggleProps = {
  darkIcon?: string | ReactElement
  lightIcon?: string | ReactElement
  darkIconClass?: string
  lightIconClass?: string
};

type DarkToggleState = {
  isDark: boolean
  content: ReactElement
};

const DarkToggle: React.FunctionComponent<DarkToggleProps> = (props) => {
  const [state, setState] = useState<DarkToggleState>({isDark: true, content: <></>});

  useLayoutEffect(() => {
    applyTheme(state.isDark);
  }, [state.isDark]);

  const applyTheme = (isDark: boolean) => {
    const content = getContent(isDark);
    setState({isDark, content});
    const theme = isDark ? "dark" : "light";

    const root = document.getElementsByTagName("html")[0];
    root.className = theme;
  };

  const getContent = (isDark: boolean): ReactElement => {
    const defaultIconClass = "text-yellow-500";
    const darkIcon = props.darkIcon ?? <FontAwesomeIcon className={props.darkIconClass ?? defaultIconClass} icon={faMoon}/>;
    const lightIcon = props.lightIcon ?? <FontAwesomeIcon className={props.lightIconClass ?? defaultIconClass} icon={faSun}/>;
    const icon = isDark ? lightIcon : darkIcon;
    const content = props.children ? <>{props.children} {icon}</> : <>{icon}</>;

    return content;
  };

  const toggle = () => {
    const isDark = !state.isDark;
    const content = getContent(isDark);
    setState({isDark, content});
  };

  return (
    <button type="button" className="font-medium" onClick={toggle}>{state.content}</button>
  );
};

export default DarkToggle;