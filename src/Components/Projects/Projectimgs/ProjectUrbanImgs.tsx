import classes from "./ProjectUrbanImgs.module.scss";
import UrbanAboutUs from "../../../Assets/Images/URBAN-About-Us.png";
import UrbanHome from "../../../Assets/Images/URBAN-Main.png";
import UrbanLogin from "../../../Assets/Images/URBAN-Login.png";
import ArrowRightIcon from "../../../Assets/Icons/WebIcons/RightBtnIcon.svg";
import ArrowLeftIcon from "../../../Assets/Icons/WebIcons/LeftBtnIcon.svg";
import { Fragment, useState } from "react";
import Button from "../../UI/Button";
import BorderlessBtn from "../../UI/BorderlessBtn";

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

const ProjectUrban = () => {
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
    <div className={classes.body}>
      <div className={classes.imgview}>
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
          <div className={classes.overlaytext}>URBAN</div>
        </ul>
        <img
          onClick={nextImg}
          className={classes.arrowIcon}
          src={ArrowRightIcon}
          alt="failed"
        />
      </div>
      <ul className={classes.context}>
        <li>
          <Button>GitHub Project</Button>
        </li>
        <li>
          <BorderlessBtn
            color="#bbbbbb"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Live View
          </BorderlessBtn>
        </li>
      </ul>
    </div>
  );
};

export default ProjectUrban;
