import React from 'react';
import classes from './ListofButtons.module.css';

const listofbuttons = (props) => {
    return(
        <div>
                <button className= {classes.Button}
                        
                        onClick = {props.clicked}>
                        להתחיל בהזמנה</button>     
                <button className= {classes.Button1}
                        
                        onClick = {()=>props.opennextpage("/Menu")}>
                        
                        תפריט</button>   
                <button className= {classes.Button2}
                        onClick = {props.showextras}
                        //onClick = {()=>props.opennextpage("/Sales")}
                        >מבצעים</button>
        </div>
    );
}
export default listofbuttons;