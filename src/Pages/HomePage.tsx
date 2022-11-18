import React, { Fragment, useEffect } from "react";
import Hero from "../Components/Home/Hero";
import { useDispatch } from "react-redux";
import { uiActions } from "../ReduxStore/ui-slice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.mobliePageTitle({ title: "Taj Longhurst" }));
  }, [dispatch]);

  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
};

export default HomePage;
