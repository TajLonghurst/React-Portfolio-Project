import React from "react";
import useCursorHover from "../../../Hooks/Cursor/use-cursorHover";
import { TextAreaModel } from "../../../Models/TextAreaModel";
import classes from "./TextArea.module.scss";

const TextArea: React.FC<TextAreaModel> = (props) => {
  const { cursorHoverOver, cursorHoverLeave } = useCursorHover();

  const textAreaError = props.error ? classes.textareaerror : null;
  return (
    <div className={classes.content}>
      <label className={classes.label}>{props.label}</label>
      <textarea
        onMouseOver={cursorHoverOver}
        onMouseLeave={cursorHoverLeave}
        placeholder={props.placeholder}
        className={`${classes.textarea} ${textAreaError}`}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
    </div>
  );
};

export default TextArea;
