export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
