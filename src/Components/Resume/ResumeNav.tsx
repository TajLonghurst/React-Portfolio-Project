import React from "react";
import classes from "./ResumeNav.module.scss";
import { ResumeNavPropsModel } from "../../Models/ResumeNavModel";

const ResumeNav: React.FC<ResumeNavPropsModel> = (props) => {
  return (
    <div className={classes.container}>
      <ul className={classes.navlist}>
        {props.ResumeNav.map((item) => {
          return (
            <li key={item.id} className={classes.navitems}>
              <img className={classes.navicon} src={item.icon} alt="Red" />
              <p className={classes.navtitle}>{item.label}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResumeNav;
