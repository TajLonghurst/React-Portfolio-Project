import React from "react";
import classes from "./Resume.module.scss";
import ResumeNav from "./ResumeNav";
import EducationIcon from "../../Assets/Icons/EducationIcon.svg";
import WorkIcon from "../../Assets/Icons/WorkIcon.svg";
import SkilsIcon from "../../Assets/Icons/SkillsIcon.svg";
import UdemyIcon from "../../Assets/Icons/UdemyIcon.svg";
import ReferancesIcon from "../../Assets/Icons/ReferancesIcon.svg";
import { ResumeNavModel } from "../../Models/ResumeNavModel";
import ResumeContent from "./ResumeContent";

export const ResumeNavItems: ResumeNavModel[] = [
  {
    id: "nav1",
    icon: EducationIcon,
    label: "Education",
  },
  {
    id: "nav2",
    icon: WorkIcon,
    label: "Work Experience",
  },
  {
    id: "nav3",
    icon: SkilsIcon,
    label: "Skills",
  },
  {
    id: "nav4",
    icon: UdemyIcon,
    label: "Udemy Course",
  },
  {
    id: "nav5",
    icon: ReferancesIcon,
    label: "Referances",
  },
];

const Resume = () => {
  return (
    <div className={classes.container}>
      {/* <div className={classes.header}>
        <span className={classes.bulletpoint}></span>
        <h1 className={classes.title}>Resume</h1>
      </div> */}
      <div className={classes.row}>
        <div className={classes.col_3}>
          <ul className={classes.navlist}>
            {ResumeNavItems.map((item) => {
              return (
                <ResumeNav
                  key={item.id}
                  icon={item.icon}
                  id={item.id}
                  label={item.label}
                />
              );
            })}
          </ul>
        </div>
        <div className={classes.col_9}>
          <ResumeContent />
        </div>
      </div>
    </div>
  );
};

export default Resume;
