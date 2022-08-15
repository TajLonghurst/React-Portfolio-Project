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
      delay: 3.2,
      duration: 0.2,
    },
  },
};

export const img = {
  hidden: {
    x: "0%",
  },
  visible: {
    x: "0%",
  },
  exit: {
    x: "12rem",
    opacity: 0,
    transition: {
      duration: 1.5,
    },
  },
};

export const textSending = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const textSent = {
  hidden: {
    display: "none",
    opacity: 0,
  },
  visible: {
    display: "block",
    opacity: 1,
    transition: {
      delay: 1.5,
    },
  },
  exit: {
    opacity: 0,
  },
};
