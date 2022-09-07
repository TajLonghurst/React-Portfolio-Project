import React, { Fragment } from "react";
import Projects from "../Components/Projects/Projects";
import { Outlet } from "react-router-dom";

const ProjectPage = () => {
  return (
    <Fragment>
      <Projects />
      <Outlet />
    </Fragment>
  );
};

export default ProjectPage;
