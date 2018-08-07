import React, {Component} from 'react';
import ProductList from '../ProductList/ProductList';
import Products from '../../../apiDemo/Products';
import ContentSidebar from '../../../containers/ContentSidebar/ContentSidebar';
import Auxi from '../../../hoc/Auxi';

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
            <Auxi>
                <ContentSidebar />
                <ProductList products={this.state.products}/>
            </Auxi>
        );
    }
}

export default ProductContentPage;