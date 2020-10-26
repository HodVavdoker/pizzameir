import React, { useState } from 'react';
import classes from './StartOrder.module.css';
import { useHistory } from "react-router-dom";

const startorder = (props) =>{
    //let history = useHistory();

    // const openDetailsDelivery = () => {
        
    //     history.push('/detailsdelivery');
        
    // }
    return(
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
    );
}
export default startorder;