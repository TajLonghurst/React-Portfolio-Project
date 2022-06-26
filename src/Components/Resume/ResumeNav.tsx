import React from "react";
import classes from "./ResumeNav.module.scss";
import { ResumeNavModel } from "../../Models/ResumeNavModel";

const ResumeNav: React.FC<ResumeNavModel> = (props) => {
  const ResumeNavOnClickHandler = () => {
    console.log(props.id);
  };

  return (
    <li
      className={classes.navitems}
      onClick={ResumeNavOnClickHandler}
      key={props.id}
    >
      <img className={classes.navicon} src={props.icon} alt="Red" />
      <p className={classes.navtitle}>{props.label}</p>
    </li>
  );
};

export default ResumeNav;
