import React from "react";
import classes from "./Input.module.scss";
import { InputModel } from "../../Models/InputModel";

const Input: React.FC<InputModel> = (props) => {
  return (
    <div className={classes.content}>
      <label className={classes.label}>{props.label}</label>
      <input
        placeholder={props.placeholder}
        type={props.type}
        className={classes.input}
      />
    </div>
  );
};

export default Input;
