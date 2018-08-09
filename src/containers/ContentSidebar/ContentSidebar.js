import React from 'react';
import classes from './ContentSidebar.css';

const contentSidbar = (props) =>
{
    return(
        <div className={classes.Wrapper}>
            <h3>Menu</h3>
            {props.links}
        </div>
    );
}

export default contentSidbar;