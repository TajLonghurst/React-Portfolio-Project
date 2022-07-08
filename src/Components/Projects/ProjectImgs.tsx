import React from "react";
import classes from "./ProjectImgs.module.scss";
import ArrowRightIcon from "../../Assets/Icons/WebIcons/RightBtnIcon.svg";
import ArrowLeftIcon from "../../Assets/Icons/WebIcons/LeftBtnIcon.svg";
import ProjectKurbImgs from "./Projectimgs/ProjectKurbImgs";
import ProjectUrban from "./Projectimgs/ProjectUrbanImgs";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Index";
import ProjectProtfolio from "./Projectimgs/ProjectProtfolio";
import ProjectNote2Self from "./Projectimgs/ProjectNote2Self";

const ProjectImgs = () => {
  const projectIsActive = useSelector((state: RootState) => state.ui);
  return (
    <div className={classes.container}>
      <img className={classes.arrowIcon} src={ArrowLeftIcon} alt="failed" />
      <ul className={classes.photolist}>
        {projectIsActive.KurbNav && <ProjectKurbImgs />}
        {projectIsActive.UrbanNav && <ProjectUrban />}
        {projectIsActive.PortfolioNav && <ProjectProtfolio />}
        {projectIsActive.Not2SelfNav && <ProjectNote2Self />}
      </ul>
      <img className={classes.arrowIcon} src={ArrowRightIcon} alt="failed" />
    </div>
  );
};

export default ProjectImgs;
