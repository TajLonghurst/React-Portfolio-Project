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
    githuhLink: "https://github.com/TajLonghurst/React-SignUp-Project",
    liveViewLink: "https://react-signup-project.firebaseapp.com/",
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
    githuhLink: "https://github.com/TajLonghurst/React-Products-Project",
    liveViewLink: "https://react-product-project.firebaseapp.com/",
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
    githuhLink: "https://github.com/TajLonghurst/React-Portfolio-Project",
    liveViewLink: "",
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
    githuhLink: "https://github.com/TajLonghurst/React-Notes-Project",
    liveViewLink: "https://react-notes-project-bcd48.firebaseapp.com/",
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
