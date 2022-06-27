import React from "react";
import classes from "./ResumeContent.module.scss";
import ResumeEducation from "./ResumeSections/ResumeEducation";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Index";

const ResumeContent = () => {
  const isActive = useSelector((state: RootState) => state.ui.ResumeList);
  return (
    <div className={classes.container}>
      {isActive[0].isActive && <ResumeEducation />}
    </div>
  );
};

export default ResumeContent;
