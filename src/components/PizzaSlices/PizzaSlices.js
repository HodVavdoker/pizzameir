import React from 'react';

import classes from './PizzaSlices.module.css';
import PizzaSlice from './PizzaSlice/PizzazSlice';

const controls = [
    { label: 'half', type: 'half' },
    { label: 'full', type: 'full' },
    { label: 'quarter', type: 'quarter' },
];

const pizzaSlices = (props) => (
    <div className={classes.pizzaSlices}>
        <p>Current Price: <strong>Price !</strong></p>
        {controls.map(ctrl => (
            <PizzaSlice 
                key={ctrl.label} 
                label={ctrl.label}/>
        ))}
        <button 
            className={classes.OrderButton}
            onClick={props.ordered}>ADD To Shopping Cart</button>
    </div>
);

export default pizzaSlices;