import React from "react";
import ProjectImgs from "./ProjectImgs";
import ProjectImgsMobile from "./ProjectImgsMobile";
import ProjectNav from "./ProjectNav";
import classes from "./Projects.module.scss";
import useWindowSize from "../../Hooks/use-windowSize";

const Projects = () => {
  const { isSmallDesktopView } = useWindowSize();

  const container = isSmallDesktopView
    ? classes.container
    : classes.containermobile;
  return (
    <section className={container}>
      <div className={classes.row}>
        {!isSmallDesktopView && <ProjectImgsMobile />}
        {isSmallDesktopView && <ProjectNav />}
        {isSmallDesktopView && <ProjectImgs />}
      </div>
    </section>
  );
};

export default Projects;
