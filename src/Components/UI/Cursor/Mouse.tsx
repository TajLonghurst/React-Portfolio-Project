import { motion } from "framer-motion";
import classes from "./Mouse.module.scss";
import useCursor from "../../../Hooks/Cursor/use-cursor";
import { useSelector } from "react-redux";
import { RootState } from "../../../ReduxStore/Index";

const Mouse = () => {
  const varaintType = useSelector(
    (state: RootState) => state.cursor.varaintType
  );
  const { variants } = useCursor();
  return (
    <motion.div
      variants={variants}
      animate={varaintType}
      className={classes.cursor}
    ></motion.div>
  );
};

export default Mouse;
