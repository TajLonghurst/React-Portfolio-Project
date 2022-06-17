import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./NavItems.module.scss";
import { NavItemModel } from "../../Models/NavItemModel";
import { motion } from "framer-motion";

const NavItems: React.FC<NavItemModel> = (props) => {
  const [selectedTabID, setSelectedTabID] = useState<string>();
  return (
    <Fragment>
      <Link
        onClick={() => setSelectedTabID(props.id)}
        to={`${props.path}`}
        className={classes.navlink}
      >
        <div className={classes.navitem}>
          <img className={classes.icon} src={props.icon} alt="Failed" />
          <p className={classes.navtext}>{props.label}</p>
        </div>
        {props.id === selectedTabID ? (
          <motion.div className={classes.underline} layoutId="underline" />
        ) : null}
      </Link>
    </Fragment>
  );
};

export default NavItems;
