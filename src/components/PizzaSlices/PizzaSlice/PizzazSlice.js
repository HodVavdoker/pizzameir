import React from 'react';
import Button from '../../UI/Button/Button';
import styled from 'styled-components';
import classes from './PizzaSlice.module.css';


const pizzaSlice = (props) => (

    <div className={classes.PizzaSlice}>
        <div className={classes.Label}>{props.label}</div>
        <Button btnType="Right"></Button>
        <Button btnType="Left" ></Button>
        <Button btnType="Full" ></Button>    
      
    </div>
);

export default pizzaSlice;