import React from "react";
import classes from "./ProjectImgsMobile.module.scss";
import URBAN from "../../Assets/Images/URBAN-Main.png";
import { Link } from "react-router-dom";

export const MOBILEPROJECTDATA = [
  {
    id: 1,
    img: URBAN,
    title: "URBAN",
    urlID: "URBAN",
  },
  {
    id: 2,
    img: URBAN,
    title: "KURB",
    urlID: "KURB",
  },
  {
    id: 3,
    img: URBAN,
    title: "NOTE2SELF",
    urlID: "NOTE2SELF",
  },
];

const ProjectImgsMobile = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.imglist}>
        {MOBILEPROJECTDATA.map((item) => {
          return (
            <Link key={item.id} to={`/MobileProject/${item.urlID}`}>
              <li className={classes.imgitems}>
                <div className={classes.bgblock}></div>
                <div className={classes.imgcontainer}>
                  <img
                    className={classes.img}
                    src={item.img}
                    alt="Failed to load"
                  />
                  <div className={classes.overlay}>
                    <div className={classes.overlaytext}>{item.title}</div>
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
