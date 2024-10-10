export const FadeInEffect = {
  variants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.15,
        duration: 0.05,
      },
    },
  },
  initial: "hidden",
  animate: "visible",
  //   viewport: {
  //     once: false,
  //   },
};

export const FadeSlideInEffect = {
  variants: {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  initial: "hidden",
  //   whileInView: "visible",
  transition: {
    delay: 0.15,
    duration: 0.5,
  },
  //   viewport: {
  //     once: false,
  //   },
};
