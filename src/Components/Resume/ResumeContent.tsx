import React from "react";
import classes from "./ResumeContent.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Index";
import ResumeEducation from "./ResumeSections/ResumeEducation";
import ResumeWorkExperience from "./ResumeSections/ResumeWorkExperience";
import ResumeUdemyCourse from "./ResumeSections/ResumeUdemyCourse";
import ResumeReferances from "./ResumeSections/ResumeReferances";
import ResumeSkills from "./ResumeSections/ResumeSkills";

const ResumeContent = () => {
  const isActive = useSelector((state: RootState) => state.ui.ResumeList);
  return (
    <div className={classes.container}>
      {isActive[0].isActive && <ResumeEducation />}
      {isActive[1].isActive && <ResumeWorkExperience />}
      {isActive[2].isActive && <ResumeSkills />}
      {isActive[3].isActive && <ResumeUdemyCourse />}
      {isActive[4].isActive && <ResumeReferances />}
    </div>
  );
};

export default ResumeContent;
