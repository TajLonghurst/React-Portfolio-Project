import React from "react";
import ProjectImgs from "./ProjectImgs";
import ProjectNav from "./ProjectNav";
import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={classes.container}>
      <div className={classes.row}>
        {/* <div className={classes.bgblock}></div> */}
        <ProjectNav />
        <ProjectImgs />
      </div>
    </section>
  );
};

export default Projects;
