import React, { Fragment } from "react";
import classes from "./ResumeNav.module.scss";
import { ResumeNavModel } from "../../Models/ResumeNavModel";
import { useDispatch } from "react-redux";
import { uiActions } from "../../ReduxStore/ui-slice";

const ResumeNav: React.FC<ResumeNavModel> = (props) => {
  const dispatch = useDispatch();
  const ResumeNavOnClickHandler = () => {
    dispatch(uiActions.ResumeClickHandler({ id: props.id }));
  };

  const isActiveStyle = props.isActive
    ? classes.navitemsactive
    : classes.navitems;

  return (
    <Fragment>
      <li className={isActiveStyle}>
        <img src={props.icon} className={classes.navicon} alt="Failed" />
        <p onClick={ResumeNavOnClickHandler} className={classes.navtitle}>
          {props.label}
        </p>
      </li>
    </Fragment>
  );
};

export default ResumeNav;
