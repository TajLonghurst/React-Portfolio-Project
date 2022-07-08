import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavItems.module.scss";
import { NavItemModel } from "../../Models/NavItemModel";
import useWindowSize from "../../Hooks/use-windowSize";

const NavItems: React.FC<NavItemModel> = (props) => {
  const { isTabletView } = useWindowSize();
  return (
    <NavLink
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
