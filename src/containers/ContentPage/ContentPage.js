import React from 'react';
import classes from './ContentPage.css';
import HomeContentPage from '../../components/home/HomeContentPage/HomeContentPage';
import ProductContentPage from '../../components/products/ProductContentPage/ProductContentPage';

const contentPage = (props) => {

    var content = null;

    if (props.title === 'Products')
        content = <ProductContentPage/>;
    else if (props.title === 'Home')
        content = <HomeContentPage />;

    return (
        <div className={classes.Wrapper}>
            <h1>
                <span>{props.title}</span>
                <input placeholder='Search'></input>
            </h1>
            <hr/>
            <div className={classes.Content}>
                {content}
            </div>
        </div>
    );
}

export default contentPage;