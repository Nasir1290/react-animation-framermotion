const circleVariants = {
  initial: {
    opacity: 0,
    x: "-100vh",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      type: "spring",
      bounce: .2,
    },
  },
};

const exitAnimation = {
  x: "-100vw",
  transition: {
    ease: "easeInOut",
    duration: 1,
  }
}

export { circleVariants,exitAnimation };