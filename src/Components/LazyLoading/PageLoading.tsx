import React from "react";
import classes from "./PageLoading.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { lazyPageLoader, PageLoader } from "../../Animations/LazyLoading";

const PageLoading = () => {
  return (
    <motion.section
      variants={PageLoader}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.container}
    >
      <div className={classes.content}>
        <h1 className={classes.text}>Taj Longhurst Porfolio</h1>
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
  );
};

export default PageLoading;
