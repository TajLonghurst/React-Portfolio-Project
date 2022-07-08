import React, { Fragment } from "react";
import classes from "./ProjectPortfolio.module.scss";
import UrbanAboutUs from "../../../Assets/Images/URBAN-About-Us.png";
import UrbanHome from "../../../Assets/Images/URBAN-Main.png";
import UrbanLogin from "../../../Assets/Images/URBAN-Login.png";

const data = [
  {
    id: 1,
    img: UrbanAboutUs,
  },
  {
    id: 2,
    img: UrbanHome,
  },
  {
    id: 3,
    img: UrbanLogin,
  },
];

const ProjectProtfolio = () => {
  return (
    <Fragment>
      {/* We make a map() for <li/> and use the nth:child css  */}

      {data.map((item) => {
        return (
          <li key={item.id} className={classes.photoitem}>
            <img className={classes.middlephoto} src={item.img} alt="failed" />
            <div className={classes.overlaymiddle}></div>
          </li>
        );
      })}
    </Fragment>
  );
};

export default ProjectProtfolio;
