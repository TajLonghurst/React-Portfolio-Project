import React, { Fragment } from "react";
// import { AnimatePresence } from "framer-motion";
import Resume from "../Components/Resume/Resume";
// import PageLoading from "../Components/LazyLoading/PageLoading";

const ResumePage = () => {
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
      <Resume />
    </Fragment>
  );
};

export default ResumePage;
