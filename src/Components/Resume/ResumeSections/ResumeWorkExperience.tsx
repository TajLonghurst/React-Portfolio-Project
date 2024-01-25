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
          Contracted Junior Frontend Developer (
          <span>
            <a
              onMouseOver={cursorHoverOver}
              onMouseLeave={cursorHoverLeave}
              className={classes.techlink}
              target="_blank"
              rel="noreferrer"
              href="https://datapoints.co.nz/"
            >
              Datapoints
            </a>
          </span>
          ) Auckland · Remote
        </h1>
        <p className={classes.date}>N O V  2 0 2 3 — C U R R E N T L Y</p>
        <p className={classes.items}>
          Developing React / Nextjs applications and creating UI/UX website
          designs with Figma for solutions with AI capabilities.
        </p>
      </div>
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
    </motion.div>
  );
};

export default ResumeWorkExperience;
