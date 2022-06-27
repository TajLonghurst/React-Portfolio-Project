import ResumeIcon from "../Assets/Icons/ResumeIcon.svg";
import AboutMeIcon from "../Assets/Icons/AboutMeIcon.svg";
import HomeIcon from "../Assets/Icons/HomeIcon.svg";
import ContactIcon from "../Assets/Icons/ContactIcon.svg";
import ProjectsIcon from "../Assets/Icons/ProjectsIcon.svg";
import { NavItemModel } from "../Models/NavItemModel";

export const navobjectlist: NavItemModel[] = [
  {
    id: "NavOne",
    icon: HomeIcon,
    label: "Home",
    path: "/",
  },
  {
    id: "NavTwo",
    icon: AboutMeIcon,
    label: "About Me",
    path: "/AboutMe",
  },
  {
    id: "NavThree",
    icon: ResumeIcon,
    label: "Resume",
    path: "/Resume",
  },
  {
    id: "NavFour",
    icon: ProjectsIcon,
    label: "Projects",
    path: "/Projects",
  },
  {
    id: "NavFive",
    icon: ContactIcon,
    label: "Contact",
    path: "/Contact",
  },
];
