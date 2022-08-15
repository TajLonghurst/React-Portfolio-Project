import React from "react";
import classes from "./ProjectImgsMobile.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../ReduxStore/ui-slice";
import { ProjectObject } from "../../Data/ProjectObject";

const ProjectImgsMobile = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(uiActions.ProjectMobileView({ isActive: true }));
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <span className={classes.bulletpoint}></span>
        <h1 className={classes.title}>My Projects</h1>
      </div>
      <ul className={classes.imglist}>
        {ProjectObject.map((item) => {
          return (
            <Link
              onClick={onClickHandler}
              key={item.projectID}
              to={`MobileProject/${item.pathID}`}
            >
              <li className={classes.imgitems}>
                <div className={classes.bgblock}></div>
                <div className={classes.imgcontainer}>
                  <img
                    className={classes.img}
                    src={item.heroImg}
                    alt="Failed to load"
                  />
                  <div className={classes.overlay}>
                    <div className={classes.overlaytext}>{item.label}</div>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectImgsMobile;
