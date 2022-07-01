import React from "react";
import classes from "./HeroImage.module.scss";
import AboutMeIcon from "../../Assets/Icons/WebIcons/AboutMeIcon.svg";

const HeroImage = () => {
  return (
    <div className={classes.imgcontainer}>
      <div className={classes.imgbackground}></div>
      <img className={classes.img} src={AboutMeIcon} alt="Failed" />
    </div>
  );
};

export default HeroImage;
