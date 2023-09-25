import React from "react";
import "./Form.scss";

declare interface FormProps {
  title?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
}

const Form: React.FC<FormProps> = (props) => {
  const preventedSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(event);
  };
  return (
    <form onSubmit={preventedSubmit} className="AppForm">
      {props.title && <div className="Title">{props.title}</div>}
      {props.children}
    </form>
  );
};

export default Form;
