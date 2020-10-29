import React, { Component } from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";
import { motion } from "framer-motion";
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  render() {
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
      duration: 1.3,
    };
    return (
      <>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
          <div
            className={classes.Modal}
            style={{
              transform: this.props.show
                ? "translateY(0)"
                : "translateY(-100vh)",
              opacity: this.props.show ? "1" : "0",
            }}
          >
            {this.props.children}
          </div>
        </motion.div>
      </>
    );
  }
}
export default Modal;
