export const cartPopEffect = {
  hidden: {
    opacity: 0,
    overflow: "hidden",
  },
  visible: {
    opacity: 1,
    overflow: "none",
    height: "100%",
    "&::before": {
      background: "red",
    },
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const test = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    "&::before": {
      background: "red",
    },
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
