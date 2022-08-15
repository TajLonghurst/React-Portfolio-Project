// import React, { useState } from "react";
import classes from "./AboutMeContent.module.scss";
import GithuhIcon from "../../Assets/Icons/WebIcons/GithubIcon.svg";
import LinkinedIcon from "../../Assets/Icons/WebIcons/LinkedinIcon.svg";
import Button from "../UI/Buttons/Button";
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
    <div className={classes.contentbody}>
      <div className={classes.header}>
        <span className={classes.bulletpoint}></span>
        <h1 className={classes.title}>About Me</h1>
      </div>
      <div className={classes.content}>
        <p className={classes.aboutmetext}>
          Madison Blackstone is a director of brand marketing, with experience
          managing global teams and multi-million-dollar campaigns. Her
          background in brand strategy, visual design, and account management
          inform her mindful but competitive approach. Madison Blackstone is a
          director of brand marketing, with experience managing global teams and
          multi-million-dollar campaigns. Her background in brand strategy,
          visual design, and account management inform her mindful but
          competitive approach. Madison Blackstone is a director of brand
          marketing, with experience managing global teams and
          multi-million-dollar campaigns. Her background in brand strategy,
          visual design, and account management inform her mindful but
          competitive approach.
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
          <a
            href="https://www.linkedin.com/login"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={classes.icon}
              src={LinkinedIcon}
              alt="Icon Failed"
            />
          </a>
        </li>
      </ul>
      <Button type="button">Contact Me</Button>
    </div>
  );
};

export default AboutMeContent;
