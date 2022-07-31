export const overlaymiddle = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const bgblock = {
  hidden: {
    zIndex: 5,
    width: "0%",
  },
  visible: {
    zIndex: 5,
    width: "100%",
    transition: {
      type: "spring",
      damping: "21",
      stiffness: 100,
    },
  },
  exit: {
    zIndex: 5,
    width: "0%",
    transition: {
      type: "spring",
      damping: "21",
      stiffness: 100,
    },
  },
};

export const body = {
  hidden: {
    display: "none",
  },
  visible: {
    display: "block",
    transition: {
      delay: 1,
    },
  },
  exit: {
    display: "none",
    transition: {
      delay: 1,
    },
  },
};

export const mobilebody = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    y: "100vh",
    transition: {
      duration: 1,
    },
  },
};
