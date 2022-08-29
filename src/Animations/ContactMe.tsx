export const pageLoadAnimation = {
  hidden: {
    y: "-3vh",
    opacity: 0,
  },
  visible: {
    y: "0vh",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    y: "3vh",
    opacity: 0,
    transition: {
      delay: 0.6,
      duration: 0.5,
    },
  },
};
