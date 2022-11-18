import React, { Fragment, useEffect } from "react";
import Form from "../Components/ContactMe/Form";
import { uiActions } from "../ReduxStore/ui-slice";
import { useDispatch } from "react-redux";

const FormPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.mobliePageTitle({ title: "Contact Me" }));
  }, [dispatch]);

  return (
    <Fragment>
      <Form />
    </Fragment>
  );
};

export default FormPage;
