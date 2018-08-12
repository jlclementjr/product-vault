import React, {Component} from 'react';
import Auxi from '../../../hoc/Auxi';

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
                <h2><span>{this.props.product.sku}</span> - <span>{this.props.product.name}</span></h2>
            </Auxi>
        );
    }
}

export default SingleProduct;