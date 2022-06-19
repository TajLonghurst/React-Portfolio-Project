import classes from "./NavBar.module.scss";
import NavItems from "./NavItems";
import ResumeIcon from "../../Assets/Icons/ResumeIcon.svg";
import AboutMeIcon from "../../Assets/Icons/AboutMeIcon.svg";
import HomeIcon from "../../Assets/Icons/HomeIcon.svg";
import ContactIcon from "../../Assets/Icons/ContactIcon.svg";
import ProjectsIcon from "../../Assets/Icons/ProjectsIcon.svg";
import { NavItemModel } from "../../Models/NavItemModel";
import useWindowSize from "../../Hooks/use-windowSize";
import { Fragment } from "react";

export const navItems: NavItemModel[] = [
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

const NavBar = () => {
  const { isMobileView } = useWindowSize();

  const navClasses = !isMobileView ? classes.nav : classes.mobilenav;

  return (
    <Fragment>
      {isMobileView && (
        <div className={classes.moblienavlogopostion}>
          <div className={classes.mobilenavbar}>
            <div className={classes.mobilenavlogo}>Taj Longhurst</div>
          </div>
        </div>
      )}
      <nav className={navClasses}>
        <div className={classes.navbar}>
          <div className={classes.navlogo}>Taj Longhurst</div>
          <ul className={classes.navlist}>
            {navItems.map((items) => {
              return (
                <NavItems
                  key={items.id}
                  id={items.id}
                  icon={items.icon}
                  label={items.label}
                  path={items.path}
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
