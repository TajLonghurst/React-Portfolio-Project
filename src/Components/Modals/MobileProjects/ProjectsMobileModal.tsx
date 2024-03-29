import { useEffect, useState } from "react";
import classes from "./ProjectMobileModal.module.scss";
import XIcon from "../../../Assets/Icons/WebIcons/ExitIcon.svg";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { mobilebody } from "../../../Animations/ProjectView";
import { ProjectObject } from "../../../Data/ProjectObject";
import { images } from "../../../Models/ProjectModel";
import BorderlessBtn from "../../UI/Buttons/BorderlessBtn";

const ProjectsMobileModal = () => {
  const navigate = useNavigate();
  const { projectID } = useParams();
  const [imgData, setImgData] = useState<images[]>([]);
  const [hrefLink, setHerfLink] = useState<string>();
  const [liveViewLink, setliveViewLink] = useState<string>();
  const [ProjectName, setProjectName] = useState<string>();

  const MaritimeProjectIsActive =
    ProjectName === "MARITIME ROOM" ? false : true;

  useEffect(() => {
    for (let i = 0; i < ProjectObject.length; i++) {
      if (projectID === ProjectObject[i].pathID) {
        return (
          setImgData(ProjectObject[i].images),
          setHerfLink(ProjectObject[i].githuhLink),
          setliveViewLink(ProjectObject[i].liveViewLink),
          setProjectName(ProjectObject[i].label)
        );
      }
    }
  }, [projectID]);

  const onCloseHandler = () => {
    navigate("/Projects");
  };

  return (
    <motion.div
      className={classes.body}
      variants={mobilebody}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={classes.topbar}></div>
      <div className={classes.nav}>
        <h1 className={classes.title}>{ProjectName}</h1>
        <img
          onClick={onCloseHandler}
          className={classes.exiticon}
          src={XIcon}
          alt="X"
        />
      </div>
      <ul className={classes.imglist}>
        {imgData.map((item) => {
          return (
            <li key={item.id} className={classes.imgitem}>
              <img className={classes.img} src={item.img} alt="Failed" />
            </li>
          );
        })}
      </ul>
      <div className={classes.btncontent}>
        {MaritimeProjectIsActive && (
          <BorderlessBtn
            color="#bbbbbb"
            target="_blank"
            rel="noreferrer"
            href={hrefLink || "#"}
          >
            Github Project
          </BorderlessBtn>
        )}
        <BorderlessBtn
          target="_blank"
          rel="noreferrer"
          href={liveViewLink || "#"}
        >
          Live View
        </BorderlessBtn>
      </div>
    </motion.div>
  );
};

export default ProjectsMobileModal;
