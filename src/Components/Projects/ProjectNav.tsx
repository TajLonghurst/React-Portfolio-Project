import React, { useState, useEffect } from "react";
import classes from "./ProjectNav.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Index";
import { uiActions } from "../../ReduxStore/ui-slice";

const ProjectNav = () => {
  const navIsActive = useSelector((state: RootState) => state.ui);
  const [projectAnimation, setProjectAnimation] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (navIsActive) {
      const timer = setTimeout(() => {
        setProjectAnimation(false);
      }, 1400);
      setProjectAnimation((prevState) => !prevState);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [navIsActive]);

  // Urban
  const UrbanStyles = navIsActive.UrbanNav
    ? classes.navitemactive
    : classes.navitem;

  const UrbanDotStyle = navIsActive.UrbanNav ? classes.activedot : classes.dot;

  //Krub
  const KurbStyles = navIsActive.KurbNav
    ? classes.navitemactive
    : classes.navitem;

  const KurbDotStyle = navIsActive.KurbNav ? classes.activedot : classes.dot;

  //Protfolio
  const PortfolioStyles = navIsActive.PortfolioNav
    ? classes.navitemactive
    : classes.navitem;

  const PortfolioDotStyle = navIsActive.PortfolioNav
    ? classes.activedot
    : classes.dot;

  //Note2Self
  const NoteStyles = navIsActive.Not2SelfNav
    ? classes.navitemactive
    : classes.navitem;

  const NoteDotStyle = navIsActive.Not2SelfNav
    ? classes.activedot
    : classes.dot;

  const projectBtnOnClickHandler = (name: string) => {
    dispatch(uiActions.ProjectsClickHandler({ name: name }));
  };

  const style = !projectAnimation ? "visible" : "none";

  return (
    <div className={classes.postion}>
      <ul style={{ pointerEvents: `${style}` }} className={classes.navlist}>
        <li
          onClick={() => projectBtnOnClickHandler("URBAN")}
          className={UrbanStyles}
        >
          <div className={UrbanDotStyle}></div>
          <div className={classes.title}>URBAN</div>
        </li>
        <li
          onClick={() => projectBtnOnClickHandler("KURB")}
          className={KurbStyles}
        >
          <div className={KurbDotStyle}></div>
          <div className={classes.title}>KURB</div>
        </li>
        <li
          onClick={() => projectBtnOnClickHandler("PORTFOLIO")}
          className={PortfolioStyles}
        >
          <div className={PortfolioDotStyle}></div>
          <div className={classes.title}>PORTFOLIO</div>
        </li>
        <li
          onClick={() => projectBtnOnClickHandler("NOTE2SELF")}
          className={NoteStyles}
        >
          <div className={NoteDotStyle}></div>
          <div className={classes.title}>NOTE2SELF</div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectNav;
