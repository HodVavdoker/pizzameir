import React from 'react';
import classes from './StartOrder.module.css';

import { motion } from "framer-motion";

const startorder = (props) =>{
    console.log(props.pageVariants);
    return(
        <motion.div     
        initial="initial"
        animate="in"
        exit="out"
        
        variants={props.pageVariants}
        transition={props.pageTransition}>
        <div>
             <button className = {classes.btnback}
                     onClick = {props.goingback}></button>  
            <section>
                <header><h1 className = {classes.h1}>דרכי הזמנה</h1></header>
               <div>
                   <ul style={{listStyleType : "none"}}>
                   <li className = {classes.li}> 
                       <button className = {classes.Button}
                             
                               //onClick = {()=>props.opennextpage("/detailsdelivery")}>
                               onClick = {props.rotate}>
                                משלוח אלי</button>
                   </li>
                   <li className = {classes.li}>
                         <button className = {classes.Button1}>איסוף עצמי</button>
                   </li>
                   <li className = {classes.li}>
                         <button className = {classes.Button2}>משלוח עתידי</button>
                   </li>
                   </ul>
               </div>
            </section>
            
        </div>
        </motion.div>
    );
}
export default startorder;