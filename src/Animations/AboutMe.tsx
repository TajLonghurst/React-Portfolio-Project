export const switchtext = {
  hidden: {
    width: "20%",
  },
  visible: {
    width: "100%",
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  exit: {
    width: "20%",
    transition: {
      duration: 0.5,
    },
  },
};

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

export const pageimgLoadAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
