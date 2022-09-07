import React, { useEffect, useState } from "react";
import { lazyPageLoader, PageLoader } from "../../Animations/LazyLoading";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { RootState } from "../../ReduxStore/Index";
import { uiActions } from "../../ReduxStore/ui-slice";
import classes from "./PageLoading.module.scss";

const PageLoading = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const initalLoad = useSelector((state: RootState) => state.ui.intialLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initalLoad) {
      const timer = setTimeout(() => setIsAnimated(false), 2000);
      setIsAnimated(true);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [initalLoad, dispatch]);

  const pageInitalView = () => {
    dispatch(uiActions.intialLoading());
  };

  return (
    <AnimatePresence
      initial={true}
      exitBeforeEnter={true}
      onExitComplete={() => pageInitalView()}
    >
      {isAnimated && (
        <motion.section
          variants={PageLoader}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={classes.container}
        >
          <div className={classes.content}>
            <h1 className={classes.text}>Taj Longhurst's Porfolio</h1>
            <AnimatePresence
              initial={true}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              <motion.div
                variants={lazyPageLoader}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={classes.loadingbar}
              ></motion.div>
            </AnimatePresence>
            <div className={classes.loadingbarshadow}></div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default PageLoading;
