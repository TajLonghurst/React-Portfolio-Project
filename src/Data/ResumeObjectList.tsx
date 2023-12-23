import EducationIcon from "../Assets/Icons/WebIcons/EducationIcon.svg";
import WorkIcon from "../Assets/Icons/WebIcons/WorkIcon.svg";
import SkilsIcon from "../Assets/Icons/WebIcons/SkillsIcon.svg";
import UdemyIcon from "../Assets/Icons/WebIcons/UdemyIcon.svg";
import ReferancesIcon from "../Assets/Icons/WebIcons/ReferancesIcon.svg";
import { ResumeNavModel } from "../Models/ResumeNavModel";

export const ResumeNavItems: ResumeNavModel[] = [
  {
    id: "nav2",
    icon: WorkIcon,
    label: "Work Experience",
    isActive: true,
  },
  {
    id: "nav1",
    icon: EducationIcon,
    label: "Education",
    isActive: false,
  },
  {
    id: "nav3",
    icon: SkilsIcon,
    label: "Skills",
    isActive: false,
  },
  {
    id: "nav4",
    icon: UdemyIcon,
    label: "Udemy Course",
    isActive: false,
  },
  {
    id: "nav5",
    icon: ReferancesIcon,
    label: "References",
    isActive: false,
  },
];
