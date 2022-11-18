import React from "react";
import ProjectImgs from "./ProjectImgs";
import ProjectImgsMobile from "./ProjectImgsMobile";
import ProjectNav from "./ProjectNav";
import classes from "./Projects.module.scss";
import useWindowSize from "../../Hooks/use-windowSize";
import { AnimatePresence } from "framer-motion";

const Projects = () => {
  const { isSmallDesktopView } = useWindowSize();

  const container = isSmallDesktopView ? classes.container : classes.containermobile;
  return (
    <section className={container}>
      <div className={classes.row}>
        {!isSmallDesktopView && <ProjectImgsMobile />}
        {isSmallDesktopView && <ProjectNav />}
        <AnimatePresence initial={true} exitBeforeEnter={true} onExitComplete={() => null}>
          {isSmallDesktopView && <ProjectImgs />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
