import React from "react";
import ProjectImgs from "./ProjectImgs";
import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={classes.container}>
      <div className={classes.row}>
        <div className={classes.col}>
          <div className={classes.projectcontent}>
            <ProjectImgs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
