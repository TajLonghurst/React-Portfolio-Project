import React, { Fragment } from "react";
import Button from "../UI/Button";
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
        <p className={classes.smallheader}>Self modivated Graduate developer</p>
      </div>
      <div className={classes.btnpostion}>
        <Button>View Projects</Button>
      </div>
    </Fragment>
  );
};

export default HeroHeader;
