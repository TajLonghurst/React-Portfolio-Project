import { ProjectModel } from "../Models/ProjectModel";
import URBANHOME from "../Assets/Images/URBAN-Main.png";
import URBANLOGIN from "../Assets/Images/URBAN-Login.png";
import URBANABOUTUS from "../Assets/Images/URBAN-About-Us.png";
import KURBHOME from "../Assets/Images/KurbHome.png";
import KURBPRODUCTS from "../Assets/Images/KurbProducts.png";
import KURBINDVIDUALPRODUCTS from "../Assets/Images/KurbInvidualProducts.png";
import PORTFOLIOSHOME from "../Assets/Images/ProtfolioHome.png";
import PORTFOLIORESUME from "../Assets/Images/ProtfolioResume.png";
import PORTFOLIOCONTACT from "../Assets/Images/ProtfolioContact.png";
import AirbnbHome from "../Assets/Images/AirBnbHome.png";
import AirbnbFilter from "../Assets/Images/AirBnbFilter.png";
import AirbnbIndvidual from "../Assets/Images/AirbnbIndvidual.png";
import MaritimeRoomHome from "../Assets/Images/MaritimeHomePage.png";
import MaritimeRoomMeetings from "../Assets/Images/MaritimeMeetingsPage.png";
import MaritimeRoomContact from "../Assets/Images/maritimeContactPage.png";

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
    heroImg: PORTFOLIOSHOME,
    githuhLink: "https://github.com/TajLonghurst/React-Portfolio-Project",
    liveViewLink: "https://deploytaj.com/",
    images: [
      {
        id: 1,
        img: PORTFOLIOSHOME,
      },
      {
        id: 2,
        img: PORTFOLIORESUME,
      },
      {
        id: 3,
        img: PORTFOLIOCONTACT,
      },
    ],
  },
  {
    projectID: 4,
    label: "MARITIME ROOM",
    pathID: "MARITIMEROOM",
    heroImg: MaritimeRoomHome,
    githuhLink: "",
    liveViewLink: "https://www.maritimeroom.co.nz/",
    images: [
      {
        id: 1,
        img: MaritimeRoomHome,
      },
      {
        id: 2,
        img: MaritimeRoomMeetings,
      },
      {
        id: 3,
        img: MaritimeRoomContact,
      },
    ],
  },
  {
    projectID: 5,
    label: "AIRBNB",
    pathID: "AIRBNB",
    heroImg: AirbnbHome,
    githuhLink: "https://github.com/TajLonghurst/Nextjs-Airbnb-Project",
    liveViewLink: "https://nextjs-bnbair-project.vercel.app/",
    images: [
      {
        id: 1,
        img: AirbnbHome,
      },
      {
        id: 2,
        img: AirbnbIndvidual,
      },
      {
        id: 3,
        img: AirbnbFilter,
      },
    ],
  },
];
