import React from "react";
import classes from "./BorderlessBtn.module.scss";
import { BorderLessBtnModel } from "../../Models/BorderLessBtnModel";
import RightPurpleArrowIcon from "../../Assets/Icons/WebIcons/RightPurpleArrowIcon.svg";
import RightGrayArrowIcon from "../../Assets/Icons/WebIcons/RightGreyArrowIcon.svg";

const BorderlessBtn: React.FC<BorderLessBtnModel> = (props) => {
  const arrowcolor = props.color ? RightGrayArrowIcon : RightPurpleArrowIcon;

  return (
    <a
      className={classes.btn}
      target={props.target}
      rel={props.rel}
      href={props.href}
      onClick={props.onClick}
    >
      <button className={classes.button}>
        <div className={classes.btncontent}>
          <p style={{ color: `${props.color}` }} className={classes.btntext}>
            {props.children}
          </p>
          <img className={classes.arrowicon} src={arrowcolor} alt="" />
        </div>
      </button>
    </a>
  );
};

export default BorderlessBtn;
