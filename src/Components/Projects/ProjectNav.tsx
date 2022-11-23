import React, { useState, useEffect, useRef } from "react";
import classes from "./ProjectNav.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Index";
import { uiActions } from "../../ReduxStore/ui-slice";
import { motion } from "framer-motion";
import { pagenavLoadAnimation } from "../../Animations/ProjectView";
import useCursorHover from "../../Hooks/Cursor/use-cursorHover";

const ProjectNav = () => {
  const { cursorHoverOver, cursorHoverLeave } = useCursorHover();
  const navIsActive = useSelector((state: RootState) => state.ui);
  const [projectAnimation, setProjectAnimation] = useState(false);
  const firstRender = useRef(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (firstRender.current) {
      if (navIsActive) {
        const timer = setTimeout(() => {
          setProjectAnimation(false);
        }, 1400);
        setProjectAnimation((prevState) => !prevState);
        return () => {
          clearTimeout(timer);
        };
      }
    } else {
      firstRender.current = true;
    }
  }, [navIsActive]);

  // Urban
  const UrbanStyles = navIsActive.UrbanNav ? classes.navitemactive : classes.navitem;

  const UrbanDotStyle = navIsActive.UrbanNav ? classes.activedot : classes.dot;

  //Krub
  const KurbStyles = navIsActive.KurbNav ? classes.navitemactive : classes.navitem;

  const KurbDotStyle = navIsActive.KurbNav ? classes.activedot : classes.dot;

  //Protfolio
  const PortfolioStyles = navIsActive.PortfolioNav ? classes.navitemactive : classes.navitem;

  const PortfolioDotStyle = navIsActive.PortfolioNav ? classes.activedot : classes.dot;

  //Note2Self
  const NoteStyles = navIsActive.Not2SelfNav ? classes.navitemactive : classes.navitem;

  const NoteDotStyle = navIsActive.Not2SelfNav ? classes.activedot : classes.dot;

  const CRUDStyles = navIsActive.CRUD ? classes.navitemactive : classes.navitem;

  const CRUDDotStyle = navIsActive.CRUD ? classes.activedot : classes.dot;

  const projectBtnOnClickHandler = (name: string) => {
    dispatch(uiActions.ProjectsClickHandler({ name: name }));
  };

  const style = !projectAnimation ? "visible" : "none";

  return (
    <motion.div className={classes.postion}>
      <motion.ul
        variants={pagenavLoadAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ pointerEvents: `${style}` }}
        className={classes.navlist}
      >
        <li className={UrbanStyles}>
          <div className={UrbanDotStyle}></div>
          <div
            onMouseOver={cursorHoverOver}
            onMouseLeave={cursorHoverLeave}
            className={classes.title}
            onClick={() => projectBtnOnClickHandler("URBAN")}
          >
            URBAN
          </div>
        </li>
        <li className={KurbStyles}>
          <div className={KurbDotStyle}></div>
          <div
            onMouseOver={cursorHoverOver}
            onMouseLeave={cursorHoverLeave}
            className={classes.title}
            onClick={() => projectBtnOnClickHandler("KURB")}
          >
            KURB
          </div>
        </li>
        <li className={PortfolioStyles}>
          <div className={PortfolioDotStyle}></div>
          <div
            onMouseOver={cursorHoverOver}
            onMouseLeave={cursorHoverLeave}
            className={classes.title}
            onClick={() => projectBtnOnClickHandler("PORTFOLIO")}
          >
            PORTFOLIO
          </div>
        </li>
        <li className={NoteStyles}>
          <div className={NoteDotStyle}></div>
          <div
            onMouseOver={cursorHoverOver}
            onMouseLeave={cursorHoverLeave}
            className={classes.title}
            onClick={() => projectBtnOnClickHandler("NOTE2SELF")}
          >
            NOTE2SELF
          </div>
        </li>
        <li className={CRUDStyles}>
          <div className={CRUDDotStyle}></div>
          <div
            onMouseOver={cursorHoverOver}
            onMouseLeave={cursorHoverLeave}
            className={classes.title}
            onClick={() => projectBtnOnClickHandler("CRUD")}
          >
            CRUD
          </div>
        </li>
      </motion.ul>
    </motion.div>
  );
};

export default ProjectNav;
