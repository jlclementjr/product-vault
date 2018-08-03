import React from 'react';
import classes from './ContentPage.css';
import ProductContentPage from '../../components/products/ProductContentPage/ProductContentPage';

const contentPage = (props) => {

    var page = null;

    if (props.title === 'Products')
        page = <ProductContentPage/>;

    return (
        <div className={classes.Content}>
            <h1>
                <span>{props.title}</span>
                <input placeholder='Search'></input>
            </h1>
            <hr/>
            {page}
        </div>
    );
}

export default contentPage;