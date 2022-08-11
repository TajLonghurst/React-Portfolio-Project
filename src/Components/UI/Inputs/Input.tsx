import React from "react";
import classes from "./Input.module.scss";
import { InputModel } from "../../../Models/InputModel";

const Input: React.FC<InputModel> = (props) => {
  const inputError = props.error ? classes.inputerror : null;

  return (
    <div className={classes.content}>
      <label className={classes.label}>{props.label}</label>
      <input
        placeholder={props.placeholder}
        className={`${classes.input} ${inputError}`}
        type={props.type}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
    </div>
  );
};

export default Input;
