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
import { pageLoadAnimation } from "../../Animations/ProjectView";

const ProjectImgs = () => {
  const projectIsActive = useSelector((state: RootState) => state.ui);
  const [projectAnimation, setProjectAnimation] = useState(true);

  const { UrbanNav, KurbNav, PortfolioNav, Not2SelfNav } = projectIsActive;

  useEffect(() => {
    if (UrbanNav || KurbNav || PortfolioNav || Not2SelfNav) {
      const timer = setTimeout(() => {
        setProjectAnimation(false);
      }, 1000);
      setProjectAnimation((prevState) => !prevState);
      //console.log(timer);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [UrbanNav, KurbNav, PortfolioNav, Not2SelfNav]);

  return (
    <motion.div
      variants={pageLoadAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.container}
    >
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {/* {projectAnimation && (
          <motion.div
            variants={bgblock}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.bgblock}
          ></motion.div>
        )} */}
      </AnimatePresence>
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {KurbNav && <ProjectKurbImgs />}
      </AnimatePresence>
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {UrbanNav && <ProjectUrban />}
      </AnimatePresence>
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {PortfolioNav && <ProjectProtfolio />}
      </AnimatePresence>
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {Not2SelfNav && <ProjectNote2Self />}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectImgs;
