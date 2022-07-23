import React, { useState, Fragment } from "react";
import classes from "./ProjectNote2Self.module.scss";
import UrbanAboutUs from "../../../Assets/Images/URBAN-About-Us.png";
import UrbanHome from "../../../Assets/Images/URBAN-Main.png";
import UrbanLogin from "../../../Assets/Images/URBAN-Login.png";
import ArrowRightIcon from "../../../Assets/Icons/WebIcons/RightBtnIcon.svg";
import ArrowLeftIcon from "../../../Assets/Icons/WebIcons/LeftBtnIcon.svg";
import BorderlessBtn from "../../UI/BorderlessBtn";
import LinkButton from "../../UI/LinkButton";
import { motion, AnimatePresence } from "framer-motion";
import { overlaymiddle } from "../../../Animations/ProjectView";
import { body } from "../../../Animations/ProjectView";

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
  const [isHover, setIsHover] = useState(false);
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
      <div className={classes.bgblock}></div>
      <motion.div
        variants={body}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={classes.body}
      >
        <div className={classes.imgview}>
          <img
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
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
                    index === slideIndex
                      ? classes.photoactive
                      : classes.photoitem
                  }
                >
                  {index === slideIndex && (
                    <img
                      className={classes.middlephoto}
                      src={item.img}
                      alt="failed"
                    />
                  )}
                  <AnimatePresence
                    initial={false}
                    exitBeforeEnter={false}
                    onExitComplete={() => null}
                  >
                    {!isHover && (
                      <motion.div
                        variants={overlaymiddle}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={classes.overlaymiddle}
                      ></motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
            <AnimatePresence
              initial={false}
              exitBeforeEnter={false}
              onExitComplete={() => null}
            >
              {!isHover && (
                <motion.div
                  variants={overlaymiddle}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={classes.overlaytext}
                >
                  NOTE2SELF
                </motion.div>
              )}
            </AnimatePresence>
          </ul>
          <img
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={nextImg}
            className={classes.arrowIcon}
            src={ArrowRightIcon}
            alt="failed"
          />
        </div>
        <ul className={classes.context}>
          <li>
            <LinkButton href="#" target="_blank" rel="noreferrer">
              GitHub Project
            </LinkButton>
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
      </motion.div>
    </Fragment>
  );
};

export default ProjectNote2Self;
