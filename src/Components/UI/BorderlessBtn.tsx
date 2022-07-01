import React from "react";
import classes from "./BorderlessBtn.module.scss";
import { BorderLessBtnModel } from "../../Models/BorderLessBtnModel";
import RightPurpleArrowIcon from "../../Assets/Icons/WebIcons/RightPurpleArrowIcon.svg";

const BorderlessBtn: React.FC<BorderLessBtnModel> = (props) => {
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
          <p className={classes.btntext}>{props.children}</p>
          <img
            className={classes.arrowicon}
            src={RightPurpleArrowIcon}
            alt=""
          />
        </div>
      </button>
    </a>
  );
};

export default BorderlessBtn;
