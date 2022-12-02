import React, { Fragment, useState } from "react";
import classes from "./ProjectCRUD.module.scss";
import ArrowRightIcon from "../../../Assets/Icons/WebIcons/RightBtnIcon.svg";
import ArrowLeftIcon from "../../../Assets/Icons/WebIcons/LeftBtnIcon.svg";
// import BorderlessBtn from "../../UI/Buttons/BorderlessBtn";
import LinkButton from "../../UI/Buttons/LinkButton";
import { motion, AnimatePresence } from "framer-motion";
import { body, overlaymiddle } from "../../../Animations/ProjectView";
import { ProjectObject } from "../../../Data/ProjectObject";
import useCursorHover from "../../../Hooks/Cursor/use-cursorHover";

const ProjectCRUD = () => {
  const { cursorHoverOver, cursorHoverLeave } = useCursorHover();
  const [slideIndex, setSlideIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const length = ProjectObject[1].images.length;

  console.log();

  const nextImg = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const previousImg = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };

  const onMouseOverHandler = () => {
    setIsHover(true);
    cursorHoverOver();
  };
  const onMouseLeaveHandler = () => {
    setIsHover(false);
    cursorHoverLeave();
  };

  if (length <= 0) {
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
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseLeaveHandler}
            onClick={previousImg}
            className={classes.arrowIcon}
            src={ArrowLeftIcon}
            alt="failed"
          />
          <ul className={classes.photolist}>
            {ProjectObject[4].images.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={index === slideIndex ? classes.photoactive : classes.photoitem}
                >
                  {index === slideIndex && (
                    <img className={classes.middlephoto} src={item.img} alt="failed" />
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
            <AnimatePresence initial={false} exitBeforeEnter={false} onExitComplete={() => null}>
              {!isHover && (
                <motion.div
                  variants={overlaymiddle}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={classes.overlaytext}
                >
                  CRUD
                </motion.div>
              )}
            </AnimatePresence>
          </ul>
          <img
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseLeaveHandler}
            onClick={nextImg}
            className={classes.arrowIcon}
            src={ArrowRightIcon}
            alt="failed"
          />
        </div>
        <ul className={classes.context}>
          <li>
            <LinkButton href={ProjectObject[4].githuhLink} target="_blank" rel="noreferrer">
              GitHub Project
            </LinkButton>
          </li>
          {/* <li>
            <BorderlessBtn
              color="#bbbbbb"
              href={ProjectObject[4].liveViewLink}
              target="_blank"
              rel="noreferrer"
            >
              Live View
            </BorderlessBtn>
          </li> */}
        </ul>
      </motion.div>
    </Fragment>
  );
};

export default ProjectCRUD;