import React from "react";
import "./Button.css";

declare interface ButtonProps {
  content?: string;
  onClick?: () => void;
  appendIcon: JSX.Element;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="AppButton" onClick={props.onClick}>
      {props.children || "Namelles Button"}
      {props.appendIcon}
    </button>
  );
};

export default Button;
