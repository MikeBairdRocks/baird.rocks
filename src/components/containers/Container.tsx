import React from "react";

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
}

const Container: React.FunctionComponent<ContainerProps> = (props) => {
  return (
    <div {...props} className="prose prose-lg xl:prose-xl dark-mode:prose-dark px-4 max-w-3xl mx-auto sm:px-6 lg:max-w-4xl lg:px-8 xl:max-w-6xl">
      {props.children}
    </div>
  );
};

export default Container;