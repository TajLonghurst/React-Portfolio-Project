import React from "react";
import { TextAreaModel } from "../../Models/TextAreaModel";
import classes from "./TextArea.module.scss";

const TextArea: React.FC<TextAreaModel> = (props) => {
  return (
    <div className={classes.content}>
      <label className={classes.label}>{props.label}</label>
      <textarea placeholder={props.placeholder} className={classes.textarea} />
    </div>
  );
};

export default TextArea;
