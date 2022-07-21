import React, { Fragment } from "react";
import classes from "./ResumeWorkExperience.module.scss";

const ResumeWorkExperience = () => {
  return (
    <Fragment>
      <div className={classes.body}>
        <h1 className={classes.header}>
          Kitchen Porter, (
          <span>
            <a
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
          J A N U A R Y 2 0 2 1 — J A N U A R Y 2 0 2 2
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
          Student Teacher Assistant, (
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
          ) , Auckland
        </h1>
        <p className={classes.date}>J U LY 2 0 2 0 — J U LY 2 0 2 0</p>
        <p className={classes.items}>
          Providing support during college student induction workshops. Assisted
          lecturers with teaching various programming tasks.
        </p>
      </div>
    </Fragment>
  );
};

export default ResumeWorkExperience;
