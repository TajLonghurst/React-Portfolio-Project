import React from "react";
import classes from "./ResumeReferances.module.scss";
import { motion } from "framer-motion";
import { body } from "../../../Animations/Resume";

const ResumeReferances = () => {
  return (
    <motion.div variants={body} initial="hidden" animate="visible" exit="exit">
      <div className={classes.body}>
        <h1 className={classes.header}>
          Arjinder Singh from (
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
          ) Trainer/Teacher
        </h1>
        <p className={classes.items}>
          arjinder.singh@techtorium.ac.nz | 02040204021
        </p>
      </div>
    </motion.div>
  );
};

export default ResumeReferances;
