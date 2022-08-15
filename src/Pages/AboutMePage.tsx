import React, { Fragment } from "react";
// import { AnimatePresence } from "framer-motion";
import AboutMe from "../Components/AboutMe/AboutMe";
// import PageLoading from "../Components/LazyLoading/PageLoading";

const AboutMePage = () => {
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
      <AboutMe />
    </Fragment>
  );
};

export default AboutMePage;
