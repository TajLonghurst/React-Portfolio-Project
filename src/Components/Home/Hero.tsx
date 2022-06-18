import React from "react";
import classes from "./Hero.module.scss";
import HeroHeader from "./HeroHeader";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.col}>
          <HeroImage />
        </div>
        <div className={classes.col}>
          <HeroHeader />
        </div>
      </div>
    </div>
  );
};

export default Hero;
