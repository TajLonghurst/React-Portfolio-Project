import React, { useState, Fragment } from "react";
import classes from "./ProjectNote2Self.module.scss";
import UrbanAboutUs from "../../../Assets/Images/URBAN-About-Us.png";
import UrbanHome from "../../../Assets/Images/URBAN-Main.png";
import UrbanLogin from "../../../Assets/Images/URBAN-Login.png";
import ArrowRightIcon from "../../../Assets/Icons/WebIcons/RightBtnIcon.svg";
import ArrowLeftIcon from "../../../Assets/Icons/WebIcons/LeftBtnIcon.svg";

const data = [
  {
    id: 2,
    img: UrbanHome,
  },
  {
    id: 1,
    img: UrbanAboutUs,
  },
  {
    id: 3,
    img: UrbanLogin,
  },
];

const ProjectNote2Self = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = data.length;

  const nextImg = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const previousImg = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };

  if (data.length <= 0) {
    return null;
  }

  return (
    <Fragment>
      {/* We make a map() for <li/> and use the nth:child css  */}
      <img
        onClick={previousImg}
        className={classes.arrowIcon}
        src={ArrowLeftIcon}
        alt="failed"
      />
      <ul className={classes.photolist}>
        {data.map((item, index) => {
          return (
            <li
              key={item.id}
              className={
                index === slideIndex ? classes.photoactive : classes.photoitem
              }
            >
              {index === slideIndex && (
                <img
                  className={classes.middlephoto}
                  src={item.img}
                  alt="failed"
                />
              )}
              <div className={classes.overlaymiddle}></div>
            </li>
          );
        })}
      </ul>
      <img
        onClick={nextImg}
        className={classes.arrowIcon}
        src={ArrowRightIcon}
        alt="failed"
      />
    </Fragment>
  );
};

export default ProjectNote2Self;
