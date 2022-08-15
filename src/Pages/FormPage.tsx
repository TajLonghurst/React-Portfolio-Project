import React, { useEffect, useState, Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import Form from "../Components/ContactMe/Form";
import PageLoading from "../Components/LazyLoading/PageLoading";

const FormPage = () => {
  //   const [isAnimated, setIsAnimated] = useState(false);

  //   useEffect(() => {
  //     const timer = setTimeout(() => setIsAnimated(false), 2000);
  //     setIsAnimated(true);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, []);

  return (
    <Fragment>
      {/* <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isAnimated && <PageLoading />}
      </AnimatePresence> */}
      <Form />
    </Fragment>
  );
};

export default FormPage;
