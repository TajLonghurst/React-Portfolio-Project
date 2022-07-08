import ResumeIcon from "../Assets/Icons/WebIcons/ResumeIcon.svg";
import AboutMeIcon from "../Assets/Icons/WebIcons/AboutMeIcon.svg";
import HomeIcon from "../Assets/Icons/WebIcons/HomeIcon.svg";
import ContactIcon from "../Assets/Icons/WebIcons/ContactIcon.svg";
import ProjectsIcon from "../Assets/Icons/WebIcons/ProjectsIcon.svg";
import { NavItemModel } from "../Models/NavItemModel";

export const navobjectlist: NavItemModel[] = [
  {
    id: "NavOne",
    img: HomeIcon,
    label: "Home",
    path: "/",
  },
  {
    id: "NavTwo",
    img: AboutMeIcon,
    label: "About Me",
    path: "/AboutMe",
  },
  {
    id: "NavThree",
    img: ResumeIcon,
    label: "Resume",
    path: "/Resume",
  },
  {
    id: "NavFour",
    img: ProjectsIcon,
    label: "Projects",
    path: "/Projects",
  },
  {
    id: "NavFive",
    img: ContactIcon,
    label: "Contact",
    path: "/Contact",
  },
];
