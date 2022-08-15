import React, { useEffect, useState, Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import Projects from "../Components/Projects/Projects";
import PageLoading from "../Components/LazyLoading/PageLoading";

const ProjectPage = () => {
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
      <Projects />
      <Outlet />
    </Fragment>
  );
};

export default ProjectPage;
