import React from "react";
import BorderlessBtn from "../../UI/Buttons/BorderlessBtn";
import classes from "./ResumeUdemyCourse.module.scss";
import { motion } from "framer-motion";
import { body } from "../../../Animations/Resume";

const ResumeUdemyCourse = () => {
  return (
    <motion.div variants={body} initial="hidden" animate="visible" exit="exit">
      <div className={classes.body}>
        <h1 className={classes.header}>
          React - The Complete Guide (incl Hooks, React Router, Redux)
        </h1>
        <p className={classes.date}>
          J A N U A R Y 2 0 2 2 — M A R C H 2 0 2 2
        </p>

        <ul className={classes.list}>
          <li className={classes.items}>48 hours on-demand video</li>
          <li className={classes.items}>50 articles</li>
          <li className={classes.items}>92 downloadable resources</li>
          <li className={classes.items}>
            By Maximilian Schwarzmüller, Academind
          </li>
        </ul>
        <BorderlessBtn
          target="_blank"
          rel="noreferrer"
          href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
        >
          View Course
        </BorderlessBtn>
      </div>
      <div className={classes.body}>
        <h1 className={classes.header}>
          NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno, MongoDB)
        </h1>
        <p className={classes.date}>J U L Y 2 0 2 2 — P E R E S E N T</p>
        <ul className={classes.list}>
          <li className={classes.items}>40.5 hours on-demand video</li>
          <li className={classes.items}>63 articles</li>
          <li className={classes.items}>499 downloadable resources</li>
          <li className={classes.items}>
            By Maximilian Schwarzmüller, Academind
          </li>
        </ul>
        <BorderlessBtn
          target="_blank"
          rel="noreferrer"
          href="https://www.udemy.com/course/nodejs-the-complete-guide/"
        >
          View Course
        </BorderlessBtn>
      </div>
    </motion.div>
  );
};

export default ResumeUdemyCourse;
