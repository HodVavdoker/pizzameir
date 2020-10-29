import React from "react";
import { motion } from "framer-motion";

export const MotionDiv = ({
  children,
  duration = 0.6,
  ease = "anticipate",
}) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: ease,
    duration: duration,
  };
  const pageStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
  };
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};
