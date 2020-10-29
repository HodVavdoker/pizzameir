import React from "react";
import classes from "./Pizza.module.css";
import { motion } from "framer-motion";
const pizza = (props) => {
  const changepage = () => {
    console.log("Great");
    props.history.push("/ChooseSize");
  };
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
    ease: "anticipate",
    duration: 1,
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
      transiton={pageTransition}
      className={classes.div1}
    >
      <header className={classes.header}>
        <h1 className={classes.h1}>פיצות</h1>
      </header>
      <div className={classes.div2} onClick={changepage}>
        <h3 className={classes.h3}>פיצה עבה</h3>
        <button className={classes.btnback}></button>
      </div>
      <div className={classes.div2} onClick={changepage}>
        <h3 className={classes.h3}>פיצה דקה</h3>
        <button className={classes.btnback}></button>
      </div>
      <div className={classes.div2} onClick={changepage}>
        <h3 className={classes.h3}>פיצה טבע</h3>
        <button className={classes.btnback}></button>
      </div>
    </motion.div>
  );
};

export default pizza;
