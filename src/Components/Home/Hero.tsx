import React from "react";
import classes from "./Hero.module.scss";
import HomeIcon from "../../Assets/Icons/AboutMeIcon.svg";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.col}>
          <div className={classes.imgcontainer}>
            <div className={classes.imgbacground}></div>
            <img src={HomeIcon} alt="Failed" />
          </div>
        </div>
        <div className={classes.col}>
          <div className={classes.headercontainer}>
            <p className={classes.welcometext}>Hello, from Linked in</p>
            <h1 className={classes.title}>Taj longhusry</h1>
            <p className={classes.smallheader}>
              Self modivated Graduate developer
            </p>
          </div>
        </div>
        <Button> Click Here</Button>
      </div>
    </div>
  );
};

export default Hero;
