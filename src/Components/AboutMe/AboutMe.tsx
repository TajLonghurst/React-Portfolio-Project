import React from "react";
import classes from "./AboutMe.module.scss";
import AboutMeIcon from "../../Assets/Icons/AboutMeIcon.svg";
import AboutMeContent from "./AboutMeContent";

const AboutMe = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.col_8}>
          <AboutMeContent />
        </div>
        <div className={classes.col_4}>
          <div className={classes.imgcontainer}>
            <img
              className={classes.img}
              src={AboutMeIcon}
              alt="Img Failed to load"
            />
            <div className={classes.imgbackground}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
