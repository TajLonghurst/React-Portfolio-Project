import { useState, useEffect } from "react";
import useWindowSize from "../use-windowSize";

const useCursor = () => {
  const { isTabletView } = useWindowSize();
  const [mouseOnPage, setMouseOnPage] = useState("block");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
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
        // duration: 0,
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
        // duration: 0,
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
