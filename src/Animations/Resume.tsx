export const body = {
  hidden: {
    y: "-5%",
    display: "none",
    opacity: 0,
  },
  visible: {
    display: "block",
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  exit: {
    y: "10%",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
