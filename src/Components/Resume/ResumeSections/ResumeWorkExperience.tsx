import React from "react";
import classes from "./ResumeWorkExperience.module.scss";
import { motion } from "framer-motion";
import { body } from "../../../Animations/Resume";
import useCursorHover from "../../../Hooks/Cursor/use-cursorHover";

const ResumeWorkExperience = () => {
  const { cursorHoverOver, cursorHoverLeave } = useCursorHover();
  return (
    <motion.div variants={body} initial="hidden" animate="visible" exit="exit">
      <div className={classes.body}>
        <h1 className={classes.header}>
          Contracted Junior Developer (
          <span>
            <a
              onMouseOver={cursorHoverOver}
              onMouseLeave={cursorHoverLeave}
              className={classes.techlink}
              target="_blank"
              rel="noreferrer"
              href="https://thewebcompany.digital/"
            >
              TheWebCo
            </a>
          </span>
          ) Auckland · Remote
        </h1>
        <p className={classes.date}>
          M A Y  2 0 2 3 — S E P T E M B E R  2 0 2 3
        </p>
        <p className={classes.items}>
          Developed a Wordpress & Elementor website. Liaised with project
          manager, UI/UX designer, <br /> web developers and the client.
        </p>
      </div>
      <div className={classes.body}>
        <h1 className={classes.header}>
          Kitchen Porter (
          <span>
            <a
              onMouseOver={cursorHoverOver}
              onMouseLeave={cursorHoverLeave}
              className={classes.techlink}
              target="_blank"
              rel="noreferrer"
              href="https://www.andiamoeatery.co.nz"
            >
              Andiamo
            </a>
          </span>
          ) Bar & Restaurant, Auckland
        </h1>
        <p className={classes.date}>
          F E B R U A R Y  2 0 2 1 — M A R C H  2 0 2 2
        </p>
        <p className={classes.items}>
          Providing quick and efficient service, delivering dishes to customers
          in a friendly and timely manner. Liaising with chefs and management,
          setting up tables, cleaning/preparing eating utensils and general
          restaurant duties.
        </p>
      </div>
      <div className={classes.body}>
        <h1 className={classes.header}>
          Student Teacher Assistant (
          <span>
            <a
              onMouseOver={cursorHoverOver}
              onMouseLeave={cursorHoverLeave}
              className={classes.techlink}
              target="_blank"
              rel="noreferrer"
              href="https://techtorium.ac.nz/"
            >
              Techtorium
            </a>
          </span>
          ) , Auckland
        </h1>
        <p className={classes.date}>J U L Y  2 0 2 0 — J U L Y  2 0 2 0</p>
        <p className={classes.items}>
          Providing support during college student induction workshops. Assisted
          lecturers with teaching various programming tasks.
        </p>
      </div>
    </motion.div>
  );
};

export default ResumeWorkExperience;
