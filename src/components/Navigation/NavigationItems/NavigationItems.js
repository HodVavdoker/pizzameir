import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/HomePage" active>HomePage</NavigationItem>
        <NavigationItem link="/Menu">Menu</NavigationItem>
        <NavigationItem link="/CheckOut">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;