import React, { Fragment } from "react";
import classes from "./ProjectKurbImgs.module.scss";
import UrbanAboutUs from "../../../Assets/Images/URBAN-About-Us.png";
import UrbanHome from "../../../Assets/Images/URBAN-Main.png";
import UrbanLogin from "../../../Assets/Images/URBAN-Login.png";

const ProjectKurbImgs = () => {
  return (
    <Fragment>
      <li className={classes.photoitem}>
        <img className={classes.leftphoto} src={UrbanAboutUs} alt="failed" />
        <div className={classes.overlayleft}></div>
      </li>
      <li className={classes.photoitem}>
        <img className={classes.middlephoto} src={UrbanHome} alt="failed" />
        <div className={classes.overlaymiddle}>
          <div className={classes.logo}>KURB</div>
        </div>
      </li>
      <li className={classes.photoitem}>
        <img className={classes.rightphoto} src={UrbanLogin} alt="failed" />
        <div className={classes.overlayright}></div>
      </li>
    </Fragment>
  );
};

export default ProjectKurbImgs;
