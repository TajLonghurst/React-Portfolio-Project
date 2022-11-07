import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from "../UI/Buttons/Button";
import classes from "./HeroHeader.module.scss";
import { motion } from "framer-motion";
import { opacityLoadAnimationHomeSecond } from "../../Animations/Home";

const HeroHeader = () => {
  const { socialMediaType } = useParams();

  const welcomeText = socialMediaType ? ` Hello, from ${socialMediaType}` : "Welcome";

  return (
    <motion.div
      variants={opacityLoadAnimationHomeSecond}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={classes.headercontainer}>
        <div className={classes.header}>
          <span className={classes.bulletpoint}></span>
          <p className={classes.welcometext}>{welcomeText}</p>
        </div>
        <h1 className={classes.title}>
          I'm <span className={classes.titlecolor}>Taj </span>
          Longhurst
        </h1>
        <p className={classes.smallheader}>A self-motivated Graduate Developer</p>
      </div>
      <div className={classes.btnpostion}>
        <NavLink to="/Projects">
          <Button type="button">View Projects</Button>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default HeroHeader;
