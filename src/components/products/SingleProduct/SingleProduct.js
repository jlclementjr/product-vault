import React, {Component} from 'react';
import Auxi from '../../../hoc/Auxi';
import {Link} from 'react-router-dom';
import classes from './SingleProduct.css';

let tempSku;
let tempName;

class SingleProduct extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isEditing: false
        }
        tempSku = this.props.product.sku;
        tempName = this.props.product.name; 
    }

    toggleEditMode()
    {
        if (this.state.isEditing)
            this.setState({isEditing: false});
        else
            this.setState({isEditing: true});
    }

    onEditSku(newSku){
        tempSku = newSku;
    }

    onEditName(newName){
        tempName = newName;
    }

    render(){

        var editLink = <Link className={classes.Links} to={'/products/' + this.props.product.sku + '/edit'} onClick={() => this.toggleEditMode()}>Edit</Link>;
        var sku = <span>{this.props.product.sku}</span>;
        var productName = <span className={tempName}>{this.props.product.name}</span>

        if (this.state.isEditing){
            editLink = <Link className={classes.Links} to={'/products/' + this.props.product.sku} onClick={() => this.toggleEditMode()}>Save</Link>;
            sku = <span><input onChange={this.onEditSku} className={classes.EditInput} value={tempSku}/></span>;
            productName = <span><input className={classes.EditInput} value={tempName}/></span>;
        }

        

        return(
            <Auxi>
                <div className={classes.Wrapper}>
                    <Link className={classes.Links} to='/products/all' onClick={this.props.backClick}>Back</Link>
                    {editLink}
                    <h2>{sku}<span> - </span>{productName}</h2>
                    <p><span>UPC: {this.props.product.upc}</span></p>
                </div>
            </Auxi>
        );
    }
}

export default SingleProduct;