import React from "react";
import classes from "./ResumeSkills.module.scss";
import { motion } from "framer-motion";
import { body } from "../../../Animations/Resume";

const ResumeSkills = () => {
  return (
    <motion.div variants={body} initial="hidden" animate="visible" exit="exit">
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
              <li className={classes.itemtitle}>Packages</li>
              <li className={classes.item}>Redux</li>
              <li className={classes.item}>Axois</li>
              <li className={classes.item}>Framer-Motion</li>
              <li className={classes.item}>JWT Auth</li>
              <li className={classes.item}>JOI validation</li>
            </ul>
          </div>
          <div className={classes.col}>
            <ul className={classes.list}>
              <li className={classes.itemtitle}>Backend</li>
              <li className={classes.item}>NodeJS</li>
              <li className={classes.item}>Express</li>
              <li className={classes.item}>MongoDB</li>
              <li className={classes.item}>Mongoose</li>
              <li className={classes.item}>GraphQL</li>
              <li className={classes.item}>Prisma</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeSkills;
