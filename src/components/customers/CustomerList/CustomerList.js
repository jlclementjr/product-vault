import React from 'react'
import classes from './CustomerList.css';

const customerList = (props) =>
{
    return(
        <div className={classes.List}>
            <table>
                <thead>
                    <tr>
                        <th>CustomerID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.customers.map(customer =>
                        <tr key={customer.id}>
                            <td>{customer.customerId}</td>
                            <td>{customer.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default customerList;