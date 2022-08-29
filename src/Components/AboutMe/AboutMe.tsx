import React from "react";
import classes from "./AboutMe.module.scss";
import AboutMeIcon from "../../Assets/Icons/WebIcons/AboutMeIcon.svg";
import AboutMeContent from "./AboutMeContent";
import { pageimgLoadAnimation } from "../../Animations/AboutMe";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className={classes.container}>
      <div className={classes.row}>
        <div className={classes.col_8}>
          <AboutMeContent />
        </div>
        <div className={classes.col_4}>
          <motion.div
            variants={pageimgLoadAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.imgcontainer}
          >
            <img
              className={classes.img}
              src={AboutMeIcon}
              alt="Img Failed to load"
            />
            <div className={classes.imgbackground}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
