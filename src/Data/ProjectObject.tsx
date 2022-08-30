import { ProjectModel } from "../Models/ProjectModel";
import URBANHOME from "../Assets/Images/URBAN-Main.png";
import URBANLOGIN from "../Assets/Images/URBAN-Login.png";
import URBANABOUTUS from "../Assets/Images/URBAN-About-Us.png";
import KURBHOME from "../Assets/Images/KurbHome.png";
import KURBPRODUCTS from "../Assets/Images/KurbProducts.png";
import KURBINDVIDUALPRODUCTS from "../Assets/Images/KurbInvidualProducts.png";
import NOTESHOME from "../Assets/Images/NotesHome.png";
import NOTESCREATENOTE from "../Assets/Images/NotesCreateNote.png";
import NOTESVIEWNOTE from "../Assets/Images/NotesViewNote.png";

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
    heroImg: KURBHOME,
    images: [
      {
        id: 1,
        img: KURBHOME,
      },
      {
        id: 2,
        img: KURBPRODUCTS,
      },
      {
        id: 3,
        img: KURBINDVIDUALPRODUCTS,
      },
    ],
  },
  {
    projectID: 3,
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
    projectID: 4,
    label: "NOTE2SELF",
    pathID: "NOTE2SELF",
    heroImg: NOTESHOME,
    images: [
      {
        id: 1,
        img: NOTESHOME,
      },
      {
        id: 2,
        img: NOTESCREATENOTE,
      },
      {
        id: 3,
        img: NOTESVIEWNOTE,
      },
    ],
  },
];
