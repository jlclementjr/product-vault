import React, {Component} from 'react';
import Auxi from '../../../hoc/Auxi';
import {Link} from 'react-router-dom';
import classes from './SingleProduct.css';

class SingleProduct extends Component {

    constructor (props) {
        super(props);
        this.state = {
            product: this.props.product
        }
    }

    render(){
        return(
            <Auxi>
                <div className={classes.Wrapper}>
                    <Link className={classes.Links} to='/products/all' onClick={this.props.backClick}>Back</Link> 
                    <Link className={classes.Links} to={'/products/' + this.props.product.sku + '/edit'}>Edit</Link>
                    <h2><span>{this.props.product.sku}</span> - <span className={classes.ProductName}>{this.props.product.name}</span></h2>
                    <p><span>UPC: {this.props.product.upc}</span></p>
                </div>
            </Auxi>
        );
    }
}

export default SingleProduct;