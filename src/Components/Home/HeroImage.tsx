import React from "react";
import classes from "./HeroImage.module.scss";
// import AboutMeIcon from "../../Assets/Icons/WebIcons/AboutMeIcon.svg";
import Pfp from "../../Assets/Images/Taj-Longhurst-AboutPage.png";
import { motion } from "framer-motion";
import { pageLoadAnimationBackground, opacityLoadAnimationHome } from "../../Animations/Home";

const HeroImage = () => {
  return (
    <motion.div className={classes.imgcontainer}>
      <motion.div
        variants={pageLoadAnimationBackground}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={classes.imgbackground}
      ></motion.div>
      <motion.img
        variants={opacityLoadAnimationHome}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={classes.img}
        src={Pfp}
        alt="Failed"
      />
    </motion.div>
  );
};

export default HeroImage;
