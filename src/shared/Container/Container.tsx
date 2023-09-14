import React from "react";
import "./Container.css";

declare interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
  return <div className="AppContainer">{props.children}</div>;
};

export default Container;
