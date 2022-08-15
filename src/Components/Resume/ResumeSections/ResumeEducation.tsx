import React from "react";
import classes from "./ResumeEducation.module.scss";
import { motion } from "framer-motion";
import { body } from "../../../Animations/Resume";

const ResumeEducation = () => {
  return (
    <motion.div variants={body} initial="hidden" animate="visible" exit="exit">
      <div className={classes.body}>
        <h1 className={classes.header}>
          Diploma Software Development [Level 6], (
          <span>
            <a
              className={classes.techlink}
              target="_blank"
              rel="noreferrer"
              href="https://techtorium.ac.nz/"
            >
              Techtorium
            </a>
          </span>
          ) New Zealand Institute Of Information Technology, Auckland, Auckland
        </h1>
        <p className={classes.date}>
          J A N U A R Y 2 0 2 1 — D E C E M B E R 2 0 2 1
        </p>
        <ul className={classes.list}>
          <li className={classes.items}>Programming principles / Python</li>
          <li className={classes.items}>
            Software Release management / Github, Azure
          </li>
          <li className={classes.items}>
            Advanced Web Development / ASP.NET, HTML5, CSS3, JavaScript
          </li>
          <li className={classes.items}>Game Development / Unity, C#</li>
          <li className={classes.items}>Emerging Technology / Python</li>
          <li className={classes.items}>Mobile App Development / Xamarin</li>
        </ul>
      </div>
      <div className={classes.body}>
        <h1 className={classes.header}>
          Diploma Information Systems [Level 5], (
          <span>
            <a
              className={classes.techlink}
              target="_blank"
              rel="noreferrer"
              href="https://techtorium.ac.nz/"
            >
              Techtorium
            </a>
          </span>
          ) New Zealand Institute Of Information Technology, Auckland, Auckland
        </h1>
        <p className={classes.date}>
          J A N U A R Y 2 0 2 0 — D E C E M B E R 2 0 2 0
        </p>
        <ul className={classes.list}>
          <li className={classes.items}>
            Programming principles / C# Basic & Advanced
          </li>
          <li className={classes.items}>Ethics & professionalism practices</li>
          <li className={classes.items}>Data management Systems / MySQL</li>
          <li className={classes.items}>
            Web development / HTML5, CSS3, JAVASCRIPT, BOOTSTRAP
          </li>
          <li className={classes.items}>
            Computer fundamentals / Web hosting, IIS, Lamp
          </li>
          <li className={classes.items}>
            Digital asset management / GitHub, Azure app services
          </li>
          <li className={classes.items}>
            Business analysis / agile, waterfall
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ResumeEducation;
