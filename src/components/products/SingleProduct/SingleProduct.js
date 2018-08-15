import React, {Component} from 'react';
import Auxi from '../../../hoc/Auxi';
import {Link} from 'react-router-dom';
import classes from './SingleProduct.css';

class SingleProduct extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }

    toggleEditMode()
    {
        if (this.state.isEditing)
            this.setState({isEditing: false});
        else
            this.setState({isEditing: true});
    }



    render(){

        var editLink = <Link className={classes.Links} to={'/products/' + this.props.product.sku + '/edit'} onClick={() => this.toggleEditMode()}>Edit</Link>;
        var sku = <span>{this.props.product.sku}</span>;
        var productName = <span className={classes.ProductName}>{this.props.product.name}</span>

        if (this.state.isEditing){
            editLink = <Link className={classes.Links} to={'/products/' + this.props.product.sku} onClick={() => this.toggleEditMode()}>Save</Link>;
            sku = <span><input className={classes.EditInput} value={this.props.product.sku}/></span>;
            productName = <span><input className={classes.EditInput} value={this.props.product.name}/></span>;
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