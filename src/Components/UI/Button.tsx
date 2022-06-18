import React from "react";
import { ButtonModel } from "../../Models/ButtonModel";

const Button: React.FC<ButtonModel> = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
