import { useState, useEffect } from "react";
import useWindowSize from "../use-windowSize";
import { useCursorModal } from "../../Models/useCursorModal";

//Line 8 to 11 are caluclations of finding the width and height of the page and dividing it in haft to center the custome cursor in the middle of the page on first render.
// As well as -17px from the width if any of the scroll bars are active.

const scrollbar = window.scrollbars;

const screenWidthY = !scrollbar ? window.innerWidth : window.innerWidth - 17;
const screenWidthX = window.innerHeight + 10;
const hotSpotX = screenWidthY / 2;
const hotSpotY = screenWidthX / 2;

const useCursor = () => {
  const { isTabletView } = useWindowSize();
  const [mouseOnPage, setMouseOnPage] = useState("block");
  const [mousePosition, setMousePosition] = useState<useCursorModal>({
    x: hotSpotX,
    y: hotSpotY,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    if (!isTabletView) {
      window.addEventListener("mousemove", mouseMove);
      document.documentElement.addEventListener("mouseenter", () =>
        setMouseOnPage("block")
      );
      document.documentElement.addEventListener("mouseleave", () =>
        setMouseOnPage("none")
      );
    }

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.documentElement.removeEventListener("mouseleave", () =>
        setMouseOnPage("none")
      );
    };
  }, [isTabletView]);

  const variants = {
    default: {
      display: mouseOnPage,
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      border: "3px solid #6300ff",
      transition: {
        type: "spring",
        damping: "130",
        stiffness: 1000,
      },
    },
    buttonHover: {
      display: mouseOnPage,
      opacity: 0.3,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      border: "3px solid #3a3a3a",
      width: 50,
      height: 50,
      transition: {
        type: "spring",
        damping: "130",
        stiffness: 1000,
      },
    },
  };
  return {
    variants,
  };
};

export default useCursor;
