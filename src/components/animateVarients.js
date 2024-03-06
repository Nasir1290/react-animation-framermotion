const circleVariants = {
    initial: {
      opacity: 0,
      x: "-100vh",
    },
    animate: {
      opacity: 1,
      x:0,
      transition: {
        duration: 1.4,
        type: "spring",
        bounce: .2,
      },
    },
  };
export {circleVariants}