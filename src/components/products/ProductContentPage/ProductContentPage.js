import React, {Component} from 'react';
import ProductList from '../ProductList/ProductList';
import SingleProduct from '../SingleProduct/SingleProduct';
import ContentSidebar from '../../../containers/ContentSidebar/ContentSidebar';
import Auxi from '../../../hoc/Auxi';
import { NavLink } from 'react-router-dom';
import classes from '../../../containers/ContentSidebar/ContentSidebar.css'
import { url, headers } from '../../../services/Api/ApiConfig';

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
        if (this.state.isSingleProduct)
            this.FetchSingleProduct(this.state.singleProductID);
        else
            this.FetchAllProducts();
    }

    FetchAllProducts(){

        fetch(url, { method:'GET' }, headers)
        .then(response => response.json())
        .catch(err => this.handleFetchError(err))
        .then(products => this.setState({products, isLoading: false}));
    }

    FetchSingleProduct(productID){
        const newUrl = url + '/' + productID.toString();
        fetch(newUrl, { method: 'GET' }, headers)
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
        this.FetchSingleProduct(productID);
    }

    handleBackToProductListClick = () =>{
        this.setState({
            isLoading: true,
            isSingleProduct: false
        });

        this.FetchAllProducts();
    }

    filterProductListByCategory = (category) =>{
        console.log('Filter Product List by Category');
        this.setState({
            isLoading: true,
            isSingleProduct: false
        })

        this.FetchAllProducts();
    }

    render(){
        
        var content = <div>Loading...</div>;

        if (!this.state.isLoading){
            if (!this.state.isFetchError)
            {
                if (this.state.isSingleProduct)
                    content = <SingleProduct product={this.state.singleProduct} 
                    backClick={this.handleBackToProductListClick.bind(this)}
                    handleError={this.handleFetchError.bind(this)}
                    />
                else
                    content = <ProductList products={this.state.products} clicked={this.handleClickedProductFromList.bind(this)}/>
            }else{
                content = <div>Oops! Something went wrong...</div>
            }
        }

        var links = (
            <div>
                <NavLink className={classes.NavLink} to='/products/all' onClick={() => this.filterProductListByCategory()}>All Products</NavLink>
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