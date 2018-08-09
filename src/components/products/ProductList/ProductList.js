import React from 'react'
import classes from './ProductList.css';

const productList = (props) =>
{
    return(
        <div className={classes.List}>
            <table>
                <thead>
                    <tr>
                        <th>Sku</th>
                        <th>Name</th>
                        <th>UPC</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product =>
                        <tr key={product.id}>
                            <td>{product.sku}</td>
                            <td>{product.name}</td>
                            <td>{product.upc}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default productList;