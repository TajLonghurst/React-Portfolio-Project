import { useDispatch } from "react-redux";
import { cursorActions } from "../../ReduxStore/cursor-slice";

const useCursorHover = () => {
  const dispatch = useDispatch();

  const cursorHoverOver = () => {
    dispatch(cursorActions.onButtonHover({ hoverType: "buttonHover" }));
  };
  const cursorHoverLeave = () => {
    dispatch(cursorActions.onButtonHover({ hoverType: "default" }));
  };
  return { cursorHoverOver, cursorHoverLeave };
};

export default useCursorHover;
