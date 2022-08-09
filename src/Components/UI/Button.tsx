import React from "react";
import { ButtonModel } from "../../Models/ButtonModel";
import classes from "./Button.module.scss";
import RightArrowIcon from "../../Assets/Icons/WebIcons/RightArrowIcon.svg";

const Button: React.FC<ButtonModel> = (props) => {
  return (
    <button className={classes.btn} onClick={props.onClick} type={props.type}>
      <div className={classes.btncontent}>
        <p className={classes.btntext}>{props.children}</p>
        <img className={classes.arrowicon} src={RightArrowIcon} alt="" />
      </div>
    </button>
  );
};

export default Button;
