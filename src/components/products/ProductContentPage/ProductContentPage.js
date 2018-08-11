import React, {Component} from 'react';
import ProductList from '../ProductList/ProductList';
import ContentSidebar from '../../../containers/ContentSidebar/ContentSidebar';
import Auxi from '../../../hoc/Auxi';
import { NavLink } from 'react-router-dom';
import classes from '../../../containers/ContentSidebar/ContentSidebar.css'

class ProductContentPage extends Component 
{
    constructor (props) {
        super(props);
        this.state = {
            isLoading: true,
            products: null,
            isFetchError: false
        }
    }

    componentDidMount()
    {
        var myHeaders = new Headers();
        myHeaders.append('authorization', 'Bearer AccessToken');

        fetch('http://localhost:64070/api/products', myHeaders)
        .then(response => response.json())
        .catch(err => this.handleFetchError(err))
        .then(products => this.setState({products, isLoading: false}));
    }

    handleFetchError(error){
        console.log('Handling error.' + error);
        this.setState({isFetchError: true});
    }

    render(){
        
        var content = <div>Loading...</div>;

        if (!this.state.isLoading){
            if (!this.state.isFetchError){
                content = <ProductList products={this.state.products}/>
            }else{
                content = <div>Oops! Something went wrong...</div>
            }
        }

        var links = (
            <div>
                <NavLink className={classes.NavLink} to='/products/all'>All Products</NavLink>
                <NavLink className={classes.NavLink} to='/products/categories'>Categories</NavLink>
            </div>
        )

        return(
            <Auxi>
                <ContentSidebar links={links} />
                {content}
            </Auxi>
        );
    }
}

export default ProductContentPage;