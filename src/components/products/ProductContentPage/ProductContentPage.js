import React, {Component} from 'react';
import ProductList from '../ProductList/ProductList';
import SingleProduct from '../SingleProduct/SingleProduct';
import ContentSidebar from '../../../containers/ContentSidebar/ContentSidebar';
import Auxi from '../../../hoc/Auxi';
import { NavLink } from 'react-router-dom';
import classes from '../../../containers/ContentSidebar/ContentSidebar.css'

const url = 'http://localhost:64070/api/products';

class ProductContentPage extends Component 
{
    constructor (props) {
        super(props);
        this.state = {
            isSingleProduct: false,
            singleProductID: 0,
            isLoading: true,
            products: null,
            singleProduct: null,
            isFetchError: false
        }
    }

    componentDidMount()
    {
        var myHeaders = new Headers();
        myHeaders.append('authorization', 'Bearer AccessToken');

        if (this.state.isSingleProduct)
            this.FetchSingleProduct(myHeaders, this.state.singleProductID);
        else
            this.FetchAllProducts(myHeaders);
    }

    FetchAllProducts(myHeaders){
        fetch(url, myHeaders)
        .then(response => response.json())
        .catch(err => this.handleFetchError(err))
        .then(products => this.setState({products, isLoading: false}));
    }

    FetchSingleProduct(myHeaders, productID){
        const newUrl = url + '/' + productID.toString();
        fetch(newUrl, myHeaders)
        .then(response => response.json())
        .catch(err => this.handleFetchError(err))
        .then(singleProduct => this.setState({singleProduct, isLoading: false}));
    }

    handleFetchError(error){
        console.log('Handling error.' + error);
        this.setState({isFetchError: true});
    }

    handleClickedProductFromList = (productID) =>{
        this.setState({
            isLoading: true,
            singleProductID: productID,
            isSingleProduct: true
        })
        var myHeaders = new Headers();
        myHeaders.append('authorization', 'Bearer AccessToken');
        this.FetchSingleProduct(myHeaders, productID);
    }

    render(){
        
        var content = <div>Loading...</div>;

        if (!this.state.isLoading){
            if (!this.state.isFetchError)
            {
                if (this.state.isSingleProduct)
                    content = <SingleProduct product={this.state.singleProduct}/>
                else
                    content = <ProductList products={this.state.products} clicked={this.handleClickedProductFromList.bind(this)}/>
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