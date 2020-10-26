import React from 'react';
import Modal from '../Modal/Modal';
import classes from './Pizza.module.css';
import { AnimatePresence, motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const pizza = (props) =>{

    const changepage = () =>{
      console.log("Great");
       props.history.push('/ChooseSize');
    }
    const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  }
};
    const pageTransition = {
  transition : "linear"
};
    return(
                <motion.div     initial ="out"
                                animate ="in"
                                exit= "out"
                                variants={pageVariants}
                                transiton={pageTransition}
                                className = {classes.div1}>
            <header className = {classes.header}>
                <h1 className = {classes.h1}>פיצות</h1>
            </header>
            <div className={classes.div2} onClick ={changepage}>
            <h3 className={classes.h3}>פיצה עבה</h3>
            <button className = {classes.btnback}></button>
            </div>
            <div className={classes.div2} onClick ={changepage}>
               <h3 className={classes.h3}>פיצה דקה</h3>
               <button className = {classes.btnback}></button>
                            </div>
            <div className={classes.div2} onClick ={changepage}>
                <h3 className={classes.h3}>פיצה טבע</h3>
                <button className = {classes.btnback}></button>
            </div>
        </motion.div>
    );

}

export default pizza;