import React from "react";
import classes from "./ProjectMobileModal.module.scss";
import XIcon from "../../Assets/Icons/WebIcons/ExitIcon.svg";
import { useNavigate, useParams } from "react-router-dom";

const ProjectsMobileModal = () => {
  const navigate = useNavigate();
  const { projectID } = useParams();
  return (
    <div className={classes.body}>
      <div className={classes.topbar}></div>
      <div className={classes.nav}>
        <h1 className={classes.title}>{projectID}</h1>
        <img
          onClick={() => navigate("/")}
          className={classes.exiticon}
          src={XIcon}
          alt="X"
        />
      </div>
    </div>
  );
};

export default ProjectsMobileModal;
