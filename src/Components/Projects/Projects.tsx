import React from "react";
import ProjectImgs from "./ProjectImgs";
import ProjectNav from "./ProjectNav";
import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={classes.container}>
      <div className={classes.bgblock}></div>
      <div className={classes.row}>
        <div className={classes.col}>
          <ProjectNav />
          <ProjectImgs />
        </div>
      </div>
    </section>
  );
};

export default Projects;
