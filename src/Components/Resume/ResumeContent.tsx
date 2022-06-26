import React from "react";
import classes from "./ResumeContent.module.scss";
import ResumeEducation from "./ResumeSections/ResumeEducation";

const ResumeContent = () => {
  return (
    <div className={classes.container}>
      <ResumeEducation />
    </div>
  );
};

export default ResumeContent;
