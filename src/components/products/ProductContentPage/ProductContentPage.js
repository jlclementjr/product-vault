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
            isLoading: true,
            products: null,
        }
    }

    componentDidMount()
    {
        fetch('http://localhost:64070/api/products')
        .then(response => response.json())
        .then(products => this.setState({products, isLoading: false}));
    }


    render(){
        
        var list = <div>Loading...</div>;
        if (!this.state.isLoading && this.state.products)
            list = <ProductList products={this.state.products}/>
    
        return(
            <Auxi>
                <ContentSidebar />
                {list}
            </Auxi>
        );
    }
}

export default ProductContentPage;