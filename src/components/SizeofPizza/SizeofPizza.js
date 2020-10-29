import React from 'react';
import Modal from '../Modal/Modal';
import classes from './SizeofPizza.module.css';
import { AnimatePresence, motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const sizeofpizza = (props) =>{
  const changepage = () =>{
    console.log("Great");
     props.history.push('/ChooseExtras');
}
    const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100vw",
  }
};
//     const pageTransition = {
//      duration: 3
// };
    return(
  <motion.div     
     initial ="out"
     animate ="in"
     exit= "out"
     variants={pageVariants}
    // transiton={pageTransition}
     className = {classes.div1}>
    <header className = {classes.header}>
        <h1 className = {classes.h1}>בחר גודל
        </h1>
    </header>
    <div className={classes.div2} onClick ={changepage}>
        <h3 className={classes.h3}
            value    ={"22"}>S 22₪</h3>
        <button className = {classes.btnback}></button>
    </div>
    <div className={classes.div2} onClick ={changepage}>
      <h3 className={classes.h3}
          value    ={"45"}>L 45₪
      </h3>
      <button className = {classes.btnback}> 
      </button>
    </div>
    <div className={classes.div2} onClick ={changepage}>
      <h3 className={classes.h3}
          value    ={"60"}>XL 60₪
      </h3>
      <button className = {classes.btnback}>
      </button>
    </div>
  </motion.div>
    );

}

export default sizeofpizza;