import React, { Fragment, useEffect } from "react";
import Resume from "../Components/Resume/Resume";
import { useDispatch } from "react-redux";
import { uiActions } from "../ReduxStore/ui-slice";

const ResumePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.mobliePageTitle({ title: "Resume" }));
  }, [dispatch]);

  return (
    <Fragment>
      <Resume />
    </Fragment>
  );
};

export default ResumePage;
