import React, { Fragment, useEffect } from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import { useDispatch } from "react-redux";
import { uiActions } from "../ReduxStore/ui-slice";

const AboutMePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.mobliePageTitle({ title: "About Me" }));
  }, [dispatch]);

  return (
    <Fragment>
      <AboutMe />
    </Fragment>
  );
};

export default AboutMePage;
