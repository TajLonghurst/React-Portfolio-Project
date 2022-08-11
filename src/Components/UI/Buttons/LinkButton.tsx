import React from "react";
import { LinkButtonModel } from "../../../Models/LinkButtonModel";
import classes from "./LinkButton.module.scss";
import RightArrowIcon from "../../../Assets/Icons/WebIcons/RightArrowIcon.svg";

const LinkButton: React.FC<LinkButtonModel> = (props) => {
  return (
    <a href={props.href} rel={props.rel} target={props.target}>
      <button className={classes.btn}>
        <div className={classes.btncontent}>
          <p className={classes.btntext}>{props.children}</p>
          <img className={classes.arrowicon} src={RightArrowIcon} alt="" />
        </div>
      </button>
    </a>
  );
};

export default LinkButton;
