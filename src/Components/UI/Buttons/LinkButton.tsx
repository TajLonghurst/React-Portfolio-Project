import React from "react";
import { LinkButtonModel } from "../../../Models/LinkButtonModel";
import classes from "./LinkButton.module.scss";
import RightArrowIcon from "../../../Assets/Icons/WebIcons/RightArrowIcon.svg";
import useCursorHover from "../../../Hooks/Cursor/use-cursorHover";

const LinkButton: React.FC<LinkButtonModel> = (props) => {
  const { cursorHoverOver, cursorHoverLeave } = useCursorHover();

  return (
    <a
      onMouseOver={cursorHoverOver}
      onMouseLeave={cursorHoverLeave}
      href={props.href}
      rel={props.rel}
      target={props.target}
    >
      <button className={classes.btn}>
        <div className={classes.btncontent}>
          <p className={classes.btntext}>{props.children}</p>
          <img className={classes.arrowicon} src={RightArrowIcon} alt="" />
        </div>
      </button>
    </a>
  );
};

export default LinkButton;
