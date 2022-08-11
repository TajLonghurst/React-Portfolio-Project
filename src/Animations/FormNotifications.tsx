export const container = {
  hidden: {
    y: "-10vh",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      //   duration: 0.5,
    },
  },
  exit: {
    y: "5vh",
    opacity: 0,
    transition: {
      delay: 2,
      duration: 0.2,
    },
  },
};
