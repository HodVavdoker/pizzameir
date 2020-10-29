import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import classes from './PizzaIngredient.module.css';

class PizzaIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'full' ):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ( 'half' ):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ( 'quarter' ):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

// BurgerIngredient.propTypes = {
//     type: PropTypes.string.isRequired
// };

export default PizzaIngredient;