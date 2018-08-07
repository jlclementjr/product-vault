import React from 'react';
import classes from './ContentSidebar.css';
import { NavLink } from 'react-router-dom';

const contentSidbar = (props) =>
{
    return(
        <div className={classes.Wrapper}>
            <h3>Menu</h3>
            <NavLink className={classes.NavLink} to='/products/all'>All Products</NavLink>
            <NavLink className={classes.NavLink} to='/products/categories'>Categories</NavLink>
        </div>
    );
}

export default contentSidbar;