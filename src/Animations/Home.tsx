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
      duration: 0.3,
    },
  },
};

export const pageLoadAnimationBackground = {
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
    y: "6vh",
    opacity: 0,
    transition: {
      delay: 0.6,
      duration: 0.5,
    },
  },
};

export const opacityLoadAnimationHome = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

export const opacityLoadAnimationHomeSecond = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.9,
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
