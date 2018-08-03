import React, {Component} from 'react';
import ProductList from '../ProductList/ProductList';
import Products from '../../../apiDemo/Products';

class ProductContentPage extends Component 
{
    constructor (props) {
        super(props);
        this.state = {
            products: Products
        }
    }

    render(){
        return(
            <ProductList products={this.state.products}/>
        );
    }
}

export default ProductContentPage;