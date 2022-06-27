import EducationIcon from "../Assets/Icons/EducationIcon.svg";
import WorkIcon from "../Assets/Icons/WorkIcon.svg";
import SkilsIcon from "../Assets/Icons/SkillsIcon.svg";
import UdemyIcon from "../Assets/Icons/UdemyIcon.svg";
import ReferancesIcon from "../Assets/Icons/ReferancesIcon.svg";
import { ResumeNavModel } from "../Models/ResumeNavModel";

export const ResumeNavItems: ResumeNavModel[] = [
  {
    id: "nav1",
    icon: EducationIcon,
    label: "Education",
    isActive: true,
  },
  {
    id: "nav2",
    icon: WorkIcon,
    label: "Work Experience",
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
    label: "Referances",
    isActive: false,
  },
];
