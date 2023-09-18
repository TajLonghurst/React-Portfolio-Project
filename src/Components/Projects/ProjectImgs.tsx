import React, { useEffect, useState, useRef } from "react";
import classes from "./ProjectImgs.module.scss";
import ProjectKurbImgs from "./Projectimgs/ProjectKurbImgs";
import ProjectUrban from "./Projectimgs/ProjectUrbanImgs";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Index";
import ProjectProtfolio from "./Projectimgs/ProjectProtfolio";
import ProjectMaritimeRoom from "./Projectimgs/ProjectMaritimeRoom";
import { AnimatePresence, motion } from "framer-motion";
import { bgblock } from "../../Animations/ProjectView";
import { pageLoadAnimation } from "../../Animations/ProjectView";
import ProjectAirbnb from "./Projectimgs/ProjectAirbnb";

const ProjectImgs = () => {
  const projectIsActive = useSelector((state: RootState) => state.ui);
  const [projectAnimation, setProjectAnimation] = useState(false);
  const firstUpdate = useRef(false);

  const {
    UrbanNav,
    KurbNav,
    PortfolioNav,
    MaritimeRoomNav: Not2SelfNav,
    AirBnb,
  } = projectIsActive;

  useEffect(() => {
    let timer: any;
    if (firstUpdate.current === true) {
      if (UrbanNav || KurbNav || PortfolioNav || Not2SelfNav || AirBnb) {
        timer = setTimeout(() => {
          setProjectAnimation(false);
        }, 1000);
        setProjectAnimation((prevState) => !prevState);
      }
    } else {
      firstUpdate.current = true;
    }
    return () => {
      clearTimeout(timer);
    };
  }, [UrbanNav, KurbNav, PortfolioNav, Not2SelfNav, AirBnb]);

  return (
    <motion.div
      variants={pageLoadAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.container}
    >
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
        {KurbNav && <ProjectKurbImgs />}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {UrbanNav && <ProjectUrban />}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {PortfolioNav && <ProjectProtfolio />}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {Not2SelfNav && <ProjectMaritimeRoom />}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {AirBnb && <ProjectAirbnb />}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectImgs;
