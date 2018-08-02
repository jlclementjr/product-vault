import React from 'react';
import classes from './Navbar.css';
import { NavLink } from 'react-router-dom';

const navbar = (props) => {
        return (
        <div className = {classes.Wrapper}>
            <div className = {classes.LeftBar}>
                <NavLink className = {classes.NavLink} to='/Dashboard' onClick={() => props.clicked('Dashboard')}>Dashboard</NavLink>
                <NavLink className = {classes.NavLink} to='/SalesOrders' onClick={() => props.clicked('Sales Orders')}>Sales Orders</NavLink>
                <NavLink className = {classes.NavLink} to='/Customers' onClick={() => props.clicked('Customer')}>Customers</NavLink>
                <NavLink className = {classes.NavLink} to='/Products' onClick={() => props.clicked('Products')}>Products</NavLink>
                <NavLink className = {classes.NavLink} to='/Inventory' onClick={() => props.clicked('Inventory')}>Inventory</NavLink>
                <NavLink className = {classes.NavLink} to='/PurchaseOrders' onClick={() => props.clicked('Purchase Orders')}>Purchase Orders</NavLink>
            </div>
            <div className={classes.RightBar}>
                <NavLink className = {classes.NavLink} to='/User'>
                    <img src={require('../../resources/icons/user-icon-26.png')} alt='user-icon'/>
                </NavLink>
            </div>
        </div>
        )
}

export default navbar;