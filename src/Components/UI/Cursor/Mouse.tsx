import { motion, AnimatePresence } from "framer-motion";
import classes from "./Mouse.module.scss";
import useCursor from "../../../Hooks/Cursor/use-cursor";
import { useSelector } from "react-redux";
import { RootState } from "../../../ReduxStore/Index";
import useWindowSize from "../../../Hooks/use-windowSize";

const Mouse = () => {
  const { isTabletView } = useWindowSize();

  const varaintType = useSelector(
    (state: RootState) => state.cursor.varaintType
  );
  const { variants } = useCursor();
  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      {!isTabletView && (
        <motion.div
          variants={variants}
          animate={varaintType}
          className={classes.cursor}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mouse;
