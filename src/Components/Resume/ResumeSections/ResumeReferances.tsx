import React, { Fragment } from "react";
import classes from "./ResumeReferances.module.scss";

const ResumeReferances = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default ResumeReferances;
