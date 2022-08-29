import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavItems.module.scss";
import { NavItemModel } from "../../Models/NavItemModel";
import useWindowSize from "../../Hooks/use-windowSize";
import useCursorHover from "../../Hooks/Cursor/use-cursorHover";
const NavItems: React.FC<NavItemModel> = (props) => {
  const { isTabletView } = useWindowSize();
  const { cursorHoverOver, cursorHoverLeave } = useCursorHover();

  return (
    <NavLink
      onMouseOver={cursorHoverOver}
      onMouseLeave={cursorHoverLeave}
      to={`${props.path}`}
      className={({ isActive }) =>
        isActive ? classes.navlinkactive : classes.navlink
      }
    >
      <div className={classes.navitem}>
        <img className={classes.icon} src={props.img} alt="Failed" />
        {!isTabletView && <p className={classes.navtext}>{props.label}</p>}
      </div>
    </NavLink>
  );
};

export default NavItems;
