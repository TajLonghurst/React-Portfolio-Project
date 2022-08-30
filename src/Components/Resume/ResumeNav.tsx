import React, { Fragment } from "react";
import { ResumeNavModel } from "../../Models/ResumeNavModel";
import { useDispatch } from "react-redux";
import { uiActions } from "../../ReduxStore/ui-slice";
import useCursorHover from "../../Hooks/Cursor/use-cursorHover";
import classes from "./ResumeNav.module.scss";

const ResumeNav: React.FC<ResumeNavModel> = (props) => {
  const { cursorHoverOver, cursorHoverLeave } = useCursorHover();
  const dispatch = useDispatch();
  const ResumeNavOnClickHandler = () => {
    dispatch(uiActions.ResumeClickHandler({ id: props.id }));
  };

  const Styles = props.isActive ? classes.navitemactive : classes.navitem;
  const dotStyle = props.isActive ? classes.activedot : classes.dot;

  return (
    <Fragment>
      <li className={Styles}>
        <div className={dotStyle}></div>
        <div
          onMouseOver={cursorHoverOver}
          onMouseLeave={cursorHoverLeave}
          className={classes.title}
          onClick={ResumeNavOnClickHandler}
        >
          {props.label}
        </div>
        {/* <img src={props.icon} className={classes.navicon} alt="Failed" /> */}
      </li>
    </Fragment>
  );
};

export default ResumeNav;
