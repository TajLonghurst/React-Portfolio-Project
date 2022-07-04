import React from "react";
import classes from "./ProjectNav.module.scss";

const ProjectNav = () => {
  return (
    <div className={classes.postion}>
      <ul className={classes.navlist}>
        <li className={classes.navitemactive}>
          <div className={classes.activedot}></div>
          <div className={classes.title}>URBAN</div>
        </li>
        <li className={classes.navitem}>
          <div className={classes.dot}></div>
        </li>
        <li className={classes.navitem}>
          <div className={classes.dot}></div>
        </li>
        <li className={classes.navitem}>
          <div className={classes.dot}></div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectNav;
