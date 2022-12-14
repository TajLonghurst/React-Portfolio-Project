// import React, { useState } from "react";
import classes from "./AboutMeContent.module.scss";
import GithuhIcon from "../../Assets/Icons/WebIcons/GithubIcon.svg";
import LinkinedIcon from "../../Assets/Icons/WebIcons/LinkedinIcon.svg";
import Button from "../UI/Buttons/Button";
import { motion } from "framer-motion";
import { pageLoadAnimation } from "../../Animations/AboutMe";
import { NavLink } from "react-router-dom";
// import ExpandMoreIcon from "../../Assets/Icons/WebIcons/ExpandMoreIcon.svg";

const AboutMeContent = () => {
  // const [expanedText, setExpandedText] = useState(false);

  // const expandedTextHandeler = () => {
  //   setExpandedText((prevState) => !prevState);
  // };

  // const btnStyle = expanedText ? classes.openiconrotate : classes.openicon;

  // const textStyle = expanedText ? classes.null : classes.fade;

  // const contentStyle = expanedText ? classes.null : classes.contentclosed;

  return (
    <motion.div
      variants={pageLoadAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.contentbody}
    >
      <div className={classes.header}>
        <span className={classes.bulletpoint}></span>
        <h1 className={classes.title}>About Me</h1>
      </div>
      <div className={classes.content}>
        <p className={classes.aboutmetext}>
          Hello and thanks for stopping by. After a few years of study, I’m now looking for
          opportunities to break into the web development industry. I lean towards front-end and my
          strengths are in React with Redux. More recently, I’ve also skilled up in NodeJS.
          Everything you see here on my website, I’ve put together myself. And while I can’t pretend
          to have a ton of experience, I can tell you that I’m a hard worker, I love problem solving
          and I’m keen to learn. So, please take a look around. If you like what you see, hit me up.
          I’d be more than happy to talk.
        </p>
        {/* <div className={textStyle}></div> */}
      </div>

      {/* <div className={classes.btnpostion}>
        <img
          onClick={expandedTextHandeler}
          className={btnStyle}
          src={ExpandMoreIcon}
          alt="btn Failed"
        />
      </div> */}
      <ul className={classes.medialinks}>
        <li className={classes.mediaitems}>
          <a
            className={classes.iconlink}
            href="https://github.com/TajLonghurst"
            target="_blank"
            rel="noreferrer"
          >
            <img className={classes.icon} src={GithuhIcon} alt="Icon Failed" />
          </a>
        </li>
        <li className={classes.mediaitems}>
          <a href="https://nz.linkedin.com/in/tajlonghurst" target="_blank" rel="noreferrer">
            <img className={classes.icon} src={LinkinedIcon} alt="Icon Failed" />
          </a>
        </li>
      </ul>
      <NavLink to="/Contact">
        <Button type="button">Contact Me</Button>
      </NavLink>
    </motion.div>
  );
};

export default AboutMeContent;
