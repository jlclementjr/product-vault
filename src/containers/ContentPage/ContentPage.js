import React from 'react';
import classes from './ContentPage.css';
import HomeContentPage from '../../components/home/HomeContentPage/HomeContentPage';
import ProductContentPage from '../../components/products/ProductContentPage/ProductContentPage';
import CustomerContentPage from '../../components/customers/CustomerContentPage/CustomerContentPage';

const contentPage = (props) => {

    var content = null;

    switch (props.title){
        case 'Home':
        content = <HomeContentPage />
        break;
        case 'Products':
        content = <ProductContentPage/>
        break;
        case 'Customers':
        content = <CustomerContentPage />
        break;
        default:
        content = <HomeContentPage />
    }

    if (props.title !== 'Home' && props.title !== 'About' && props.title !== 'Contact'){
        if (!props.isAuthenticated){
            content = <HomeContentPage />
        }
    }

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