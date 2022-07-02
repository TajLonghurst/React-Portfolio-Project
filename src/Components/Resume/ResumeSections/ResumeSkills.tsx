import React from "react";
import classes from "./ResumeSkills.module.scss";
// import HTML from "../../../Assets/Icons/Logos/html-1.svg";
// import CSS from "../../../Assets/Icons/Logos/css-3.svg";
// import SCSS from "../../../Assets/Icons/Logos/css-3.svg";
// import JavaScript from "../../../Assets/Icons/Logos/logo-javascript.svg";
// import TypeScript from "../../../Assets/Icons/Logos/typescript.svg";
// import ReactJs from "../../../Assets/Icons/Logos/react-2.svg";
// import Redux from "../../../Assets/Icons/Logos/redux.svg";
// import BootStrap from "../../../Assets/Icons/Logos/redux.svg";
// import Figma from "../../../Assets/Icons/Logos/figma-1.svg";
// import GitHub from "../../../Assets/Icons/Logos/github-icon-1.svg";
// import FireBase from "../../../Assets/Icons/Logos/github-icon-1.svg";
// import NodeJs from "../../../Assets/Icons/Logos/nodejs-1.svg";

const ResumeSkills = () => {
  return (
    <div className={classes.body}>
      <div className={classes.row}>
        <div className={classes.col}>
          <ul className={classes.list}>
            <li className={classes.itemtitle}>Frontend</li>
            <li className={classes.item}>React</li>
            <li className={classes.item}>Javascript</li>
            <li className={classes.item}>Typescript</li>
            <li className={classes.item}>Scss</li>
            <li className={classes.item}>Bootstrap</li>
            <li className={classes.item}>Figma</li>
          </ul>
        </div>
        <div className={classes.col}>
          <ul className={classes.list}>
            <li className={classes.itemtitle}>Libarys</li>
            <li className={classes.item}>Redux</li>
            <li className={classes.item}>Axois</li>
            <li className={classes.item}>Framer-Motion</li>
            <li className={classes.item}>React-Router</li>
            <li className={classes.item}>Email JS</li>
          </ul>
        </div>
        <div className={classes.col}>
          <ul className={classes.list}>
            <li className={classes.itemtitle}>Backend</li>
            {/* <li className={classes.item}>NodeJs</li>
            <li className={classes.item}>MongoDB</li>
            <li className={classes.item}>Express</li>
            <li className={classes.item}>GraphQL</li> */}
            <li className={classes.item}>None . . .</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeSkills;
