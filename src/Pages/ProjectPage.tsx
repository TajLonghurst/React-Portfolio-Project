import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Projects from "../Components/Projects/Projects";

const ProjectPage = () => {
  return (
    <Fragment>
      <Projects />
      <Outlet />
    </Fragment>
  );
};

export default ProjectPage;
