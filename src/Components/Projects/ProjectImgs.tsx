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
  const [projectAnimation, setProjectAnimation] = useState(false);

  useEffect(() => {
    if (projectIsActive) {
      const timer = setTimeout(() => {
        setProjectAnimation(false);
      }, 1000);
      setProjectAnimation((prevState) => !prevState);
      console.log(timer);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [projectIsActive]);

  return (
    <div className={classes.container}>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {projectAnimation && (
          <motion.div
            variants={bgblock}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.bgblock}
          ></motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {projectIsActive.KurbNav && <ProjectKurbImgs />}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {projectIsActive.UrbanNav && <ProjectUrban />}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {projectIsActive.PortfolioNav && <ProjectProtfolio />}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {projectIsActive.Not2SelfNav && <ProjectNote2Self />}
      </AnimatePresence>
    </div>
  );
};

export default ProjectImgs;
