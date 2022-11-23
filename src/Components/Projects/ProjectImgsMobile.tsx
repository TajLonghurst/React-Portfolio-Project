import React from "react";
import classes from "./ProjectImgsMobile.module.scss";
import { Link } from "react-router-dom";
import { ProjectObject } from "../../Data/ProjectObject";
import { motion } from "framer-motion";
import { staggerEffectParent, staggerEffectChild } from "../../Animations/ProjectView";

const ProjectImgsMobile = () => {
  return (
    <div className={classes.container}>
      {/* <div className={classes.header}>
        <span className={classes.bulletpoint}></span>
        <h1 className={classes.title}>My Projects</h1>
      </div> */}
      <motion.ul
        variants={staggerEffectParent}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={classes.imglist}
      >
        {ProjectObject.map((item) => {
          return (
            <motion.div key={item.projectID} variants={staggerEffectChild}>
              <Link to={`/MobileProject/${item.pathID}`}>
                <li className={classes.imgitems}>
                  <div className={classes.bgblock}></div>
                  <div className={classes.imgcontainer}>
                    <img className={classes.img} src={item.heroImg} alt="Failed to load" />
                    <div className={classes.overlay}>
                      <div className={classes.overlaytext}>{item.label}</div>
                    </div>
                  </div>
                </li>
              </Link>
            </motion.div>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default ProjectImgsMobile;
