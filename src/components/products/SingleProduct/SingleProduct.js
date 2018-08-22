import React, {Component} from 'react';
import Auxi from '../../../hoc/Auxi';
import {Link} from 'react-router-dom';
import classes from './SingleProduct.css';
import { url, headers } from '../../../services/Api/ApiConfig';

class SingleProduct extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isEditing: false,
            isLoading: false,

            product: this.props.product,

            tempSku: this.props.product.sku,
            tempName: this.props.product.name,
            tempUpc: this.props.product.upc
        }
    }

    toggleEditMode()
    {
        if (this.state.isEditing){
            this.updateProduct();
            this.setState({isEditing: false});
        }
        else
            this.setState({isEditing: true});
    }

    onEditSku(event){
        this.setState({tempSku: event.target.value});
    }

    onEditName(event){
        this.setState({tempName: event.target.value});
    }

    onEditUpc(event){
        this.setState({tempUpc: event.target.value});
    }

    handleFetchError(error){
        console.log(error);
    }

    updateProduct(){
        console.log(JSON.stringify(this.state.product));
        fetch(
            url, { 
              method: 'PUT',
              body: JSON.stringify(this.state.product)},
            headers)
        .then(response => response.json())
        .catch(err => this.handleFetchError(err))
        .then(product => this.setState({product, isLoading: false}))
        .then(product => console.log('New Product: ' + JSON.stringify(product)));

        console.log('Product Updated');
    }

    render(){

        var editLink = <Link className={classes.Links} to={'/products/' + this.props.product.sku + '/edit'} onClick={() => this.toggleEditMode()}>Edit</Link>;
        var sku = <span>{this.props.product.sku}</span>;
        var productName = <span className={classes.ProductName}>{this.props.product.name}</span>
        var upc = <span>UPC: {this.props.product.upc}</span>

        if (this.state.isEditing){
            editLink = <Link className={classes.Links} to={'/products/' + this.state.product.sku} onClick={() => this.toggleEditMode()}>Save</Link>;
            sku = <span><input onChange={(event) => this.onEditSku(event)} className={classes.EditInput} value={this.state.tempSku}/></span>;
            productName = <span><input onChange={(event) => this.onEditName(event)} className={classes.InputProductName} value={this.state.tempName}/></span>;
            upc = <span>UPC <input onChange={(event) => this.onEditUpc(event)} className={classes.EditInput} value={this.state.tempUpc}/></span>
        }

        

        return(
            <Auxi>
                <div className={classes.Wrapper}>
                    <Link className={classes.Links} to='/products/all' onClick={this.props.backClick}>Back</Link>
                    {editLink}
                    <h2>{sku}<span> - </span>{productName}</h2>
                    <p>{upc}</p>
                </div>
            </Auxi>
        );
    }
}

export default SingleProduct;