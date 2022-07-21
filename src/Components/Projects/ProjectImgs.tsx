import React, { useEffect, useState } from "react";
import classes from "./ProjectImgs.module.scss";
import ProjectKurbImgs from "./Projectimgs/ProjectKurbImgs";
import ProjectUrban from "./Projectimgs/ProjectUrbanImgs";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Index";
import ProjectProtfolio from "./Projectimgs/ProjectProtfolio";
import ProjectNote2Self from "./Projectimgs/ProjectNote2Self";
import { AnimatePresence, motion } from "framer-motion";
import { bgblock } from "../../Animations/ProjectView";

const ProjectImgs = () => {
  const projectIsActive = useSelector((state: RootState) => state.ui);

  return (
    <div className={classes.container}>
      {false && (
        <motion.div
          key={2}
          variants={bgblock}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={classes.bgblock}
        ></motion.div>
      )}
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {projectIsActive.UrbanNav && <ProjectKurbImgs />}
        {projectIsActive.KurbNav && <ProjectUrban />}
        {projectIsActive.PortfolioNav && <ProjectProtfolio />}
        {projectIsActive.Not2SelfNav && <ProjectNote2Self />}
      </AnimatePresence>
    </div>
  );
};

export default ProjectImgs;
