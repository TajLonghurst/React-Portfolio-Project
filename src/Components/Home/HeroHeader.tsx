import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Buttons/Button";
import classes from "./HeroHeader.module.scss";

const HeroHeader = () => {
  return (
    <Fragment>
      <div className={classes.headercontainer}>
        <div className={classes.header}>
          <span className={classes.bulletpoint}></span>
          <p className={classes.welcometext}>Hello, from Linked In</p>
        </div>
        <h1 className={classes.title}>
          I'm <span className={classes.titlecolor}>Taj </span>
          Longhurst
        </h1>
        <p className={classes.smallheader}>
          A self modivated Graduate Developer
        </p>
      </div>
      <div className={classes.btnpostion}>
        <NavLink to="/Projects">
          <Button type="button">View Projects</Button>
        </NavLink>
      </div>
    </Fragment>
  );
};

export default HeroHeader;
