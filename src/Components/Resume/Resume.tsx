import React from "react";
import classes from "./Resume.module.scss";
import ResumeNav from "./ResumeNav";
import ResumeContent from "./ResumeContent";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Index";
import { motion } from "framer-motion";
import { pagenavLoadAnimationResume } from "../../Animations/Resume";

const Resume = () => {
  const resumeList = useSelector((state: RootState) => state.ui.ResumeList);
  return (
    <section className={classes.container}>
      {/* <div className={classes.header}>
        <span className={classes.bulletpoint}></span>
        <h1 className={classes.title}>Resume</h1>
      </div> */}
      <div className={classes.row}>
        <div className={classes.col_3}>
          <motion.ul
            variants={pagenavLoadAnimationResume}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.navlist}
          >
            {resumeList.map((item) => {
              return (
                <ResumeNav
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  icon={item.icon}
                  isActive={item.isActive}
                />
              );
            })}
          </motion.ul>
        </div>
        <div className={classes.col_9}>
          <ResumeContent />
        </div>
      </div>
    </section>
  );
};

export default Resume;
