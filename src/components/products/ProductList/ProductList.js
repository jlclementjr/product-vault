import React from 'react'
import classes from './ProductList.css';
import { withCommas } from '../../../helpers/numberFormatter';

const productList = (props) =>
{
    return(
        <div className={classes.List}>
            <table>
                <thead>
                    <th>Sku</th>
                    <th>Name</th>
                    <th id={classes.NumberColumn}>Base Price</th>
                    <th>Inventoried</th>
                    <th>UPC</th>
                </thead>
                <tbody>
                    {props.products.map(product =>
                        <tr key={product.id}>
                            <td>{product.sku}</td>
                            <td>{product.name}</td>
                            <td className={classes.NumberColumn}>{withCommas(product.price.toFixed(2))}</td>
                            <td>{product.inventoried.toString()}</td>
                            <td>{product.upc}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default productList;