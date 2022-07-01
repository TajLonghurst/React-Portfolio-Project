import React from "react";
import classes from "./ResumeContent.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Index";
import ResumeEducation from "./ResumeSections/ResumeEducation";
import ResumeWorkExperience from "./ResumeSections/ResumeWorkExperience";
import ResumeUdemyCourse from "./ResumeSections/ResumeUdemyCourse";

const ResumeContent = () => {
  const isActive = useSelector((state: RootState) => state.ui.ResumeList);
  return (
    <div className={classes.container}>
      {isActive[0].isActive && <ResumeEducation />}
      {isActive[1].isActive && <ResumeWorkExperience />}
      {isActive[3].isActive && <ResumeUdemyCourse />}
    </div>
  );
};

export default ResumeContent;
