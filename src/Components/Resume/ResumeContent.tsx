import React from "react";
import classes from "./ResumeContent.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Index";
import ResumeEducation from "./ResumeSections/ResumeEducation";
import ResumeWorkExperience from "./ResumeSections/ResumeWorkExperience";
import ResumeUdemyCourse from "./ResumeSections/ResumeUdemyCourse";
import ResumeReferances from "./ResumeSections/ResumeReferances";
import ResumeSkills from "./ResumeSections/ResumeSkills";
import { AnimatePresence } from "framer-motion";

const ResumeContent = () => {
  const isActive = useSelector((state: RootState) => state.ui.ResumeList);
  return (
    <div className={classes.container}>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isActive[0].isActive && <ResumeEducation />}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isActive[1].isActive && <ResumeWorkExperience />}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isActive[2].isActive && <ResumeSkills />}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isActive[3].isActive && <ResumeUdemyCourse />}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isActive[4].isActive && <ResumeReferances />}
      </AnimatePresence>
    </div>
  );
};

export default ResumeContent;
