export const lazyPageLoader = {
  hidden: {
    width: "0%",
  },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const PageLoader = {
  hidden: {
    // x: "-100%",
  },
  visible: {
    // x: "0%",
    transition: {
      duration: 1,
    },
  },
  exit: {
    // x: "100%",
    opacity: 0,
    transition: {
      delay: 1.3,
      duration: 1,
    },
  },
};
