import React from "react";
import classes from "./Hero.module.scss";
import HeroHeader from "./HeroHeader";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.row}>
        <div className={classes.col_img}>
          <HeroImage />
        </div>
        <div className={classes.col_header}>
          <HeroHeader />
        </div>
      </div>
    </section>
  );
};

export default Hero;
