import React from 'react';
import Modal from '../Modal/Modal';
import classes from './Extras.module.css';
import { AnimatePresence, motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const extra = (props) =>{
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
    x: "100vw",
  }
};
    const pageTransition = {
  transition : "linear"
};
    return(
 <div>
    <header className = {classes.header}>
        <h1 className = {classes.h1}>בחר תוספת
        </h1>
    </header>
    <div className = {classes.div}>
        <ul className = {classes.ul}>
            <li>
                <img src="black.jpg" className={classes.img}></img>
                <strong className = {classes.strong}>תירס</strong>
                <div className = {classes.div1}>
                    <ul className={classes.ul1}>
                        <li role="button" className={classes.li1}>
                            <span className={classes.span}></span>
                        </li>
                        <li role="button" className={classes.li1}>
                        <span ></span>
                        </li>
                        <li role="button" className={classes.li1}>
                        <span className={classes.span}></span>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <img src="https://acdn.foodbox.co.il/wp-content/uploads/sites/7/2019/12/23143726/corn.svg" className={classes.img}></img>
                <strong className = {classes.strong}>פטרות</strong>
                <div className = {classes.div1}>
                    <ul className={classes.ul1}>
                        <li role="button" className={classes.li1}>
                            <span className={classes.span}></span>
                        </li>
                        <li role="button" className={classes.li1}>
                        <span className={classes.span}></span>
                        </li>
                        <li role="button" className={classes.li1}>
                        <span className={classes.span}></span>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <img src="https://acdn.foodbox.co.il/wp-content/uploads/sites/7/2019/12/23143726/corn.svg" className={classes.img}></img>
                <strong className = {classes.strong}>זיתים</strong>
                <div className = {classes.div1}>
                    <ul className={classes.ul1}>
                        <li role="button" className={classes.li1}>
                            <span className={classes.span}></span>
                        </li>
                        <li role="button" className={classes.li1}>
                        <span className={classes.span}></span>
                        </li>
                        <li role="button" className={classes.li1}>
                        <span className={classes.span}></span>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    </div>
    );

}

export default extra;