import React from "react";
import "./Button.css";

declare interface ButtonProps {
  content?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="AppButton" onClick={props.onClick}>
      {props.children || "Namelles Button"}
    </button>
  );
};

export default Button;
