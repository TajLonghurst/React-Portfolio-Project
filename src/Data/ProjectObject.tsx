import { ProjectModel } from "../Models/ProjectModel";
import URBANHOME from "../Assets/Images/URBAN-Main.png";
import URBANLOGIN from "../Assets/Images/URBAN-Login.png";
import URBANABOUTUS from "../Assets/Images/URBAN-About-Us.png";

export const ProjectObject: ProjectModel[] = [
  {
    projectID: 1,
    label: "URBAN",
    pathID: "URBAN",
    heroImg: URBANHOME,
    images: [
      {
        id: 1,
        img: URBANHOME,
      },
      {
        id: 2,
        img: URBANLOGIN,
      },
      {
        id: 3,
        img: URBANABOUTUS,
      },
    ],
  },
  {
    projectID: 2,
    label: "KURB",
    pathID: "KURB",
    heroImg: URBANHOME,
    images: [
      {
        id: 1,
        img: URBANHOME,
      },
      {
        id: 2,
        img: URBANLOGIN,
      },
      {
        id: 3,
        img: URBANABOUTUS,
      },
    ],
  },
  {
    projectID: 4,
    label: "PORTFOLIO",
    pathID: "PORTFOLIO",
    heroImg: URBANHOME,
    images: [
      {
        id: 1,
        img: URBANHOME,
      },
      {
        id: 2,
        img: URBANLOGIN,
      },
      {
        id: 3,
        img: URBANABOUTUS,
      },
    ],
  },
  {
    projectID: 3,
    label: "NOTE2SELF",
    pathID: "NOTE2SELF",
    heroImg: URBANHOME,
    images: [
      {
        id: 1,
        img: URBANHOME,
      },
      {
        id: 2,
        img: URBANLOGIN,
      },
      {
        id: 3,
        img: URBANABOUTUS,
      },
    ],
  },
];