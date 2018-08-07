import React from 'react';
import classes from './Navbar.css';
import { NavLink } from 'react-router-dom';

const navbar = (props) => {

        const loggedIn = props.isAuthenticated();

        //Check for Login
        var leftBar = null;

        if (loggedIn){
            leftBar = (
                <div className = {classes.LeftBar}>
                    <NavLink className = {classes.NavLink} to='/Dashboard' onClick={() => props.clicked('Dashboard')}>Dashboard</NavLink>
                    <NavLink className = {classes.NavLink} to='/SalesOrders' onClick={() => props.clicked('Sales Orders')}>Sales Orders</NavLink>
                    <NavLink className = {classes.NavLink} to='/Customers' onClick={() => props.clicked('Customer')}>Customers</NavLink>
                    <NavLink className = {classes.NavLink} to='/Products' onClick={() => props.clicked('Products')}>Products</NavLink>
                    <NavLink className = {classes.NavLink} to='/Inventory' onClick={() => props.clicked('Inventory')}>Inventory</NavLink>
                    <NavLink className = {classes.NavLink} to='/PurchaseOrders' onClick={() => props.clicked('Purchase Orders')}>Purchase Orders</NavLink>
                </div>
            )
        } 

        var userDisplay = <NavLink className = {classes.NavLink} to='' onClick={() => props.login()}>Login</NavLink>;
        if (loggedIn){
            userDisplay =  <NavLink className = {classes.NavLink} to='' onClick={() => props.logout()}>Logout</NavLink> 
        }

        return (
        <div className = {classes.Wrapper}>
            {leftBar}
            <div className={classes.RightBar}>
                { userDisplay }
                <div className = {classes.NavLink} to='/User' onClick={() => props.login()}>
                    <img src={require('../../resources/icons/user-icon-26.png')} alt='user-icon'/>
                </div>
            </div>
        </div>
        )
}

export default navbar;