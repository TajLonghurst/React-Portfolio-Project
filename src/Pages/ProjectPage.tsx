import React, { Fragment, useEffect } from "react";
import Projects from "../Components/Projects/Projects";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../ReduxStore/ui-slice";

const ProjectPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.mobliePageTitle({ title: "Projects" }));
  }, [dispatch]);

  return (
    <Fragment>
      <Projects />
      <Outlet />
    </Fragment>
  );
};

export default ProjectPage;
