import React, {Component} from 'react';
import Auxi from '../../../hoc/Auxi';
import {Link} from 'react-router-dom';

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
                <div><Link to='/products/all' onClick={this.props.backClick}>Back</Link></div>
                <h2><span>{this.props.product.sku}</span> - <span>{this.props.product.name}</span></h2>
            </Auxi>
        );
    }
}

export default SingleProduct;