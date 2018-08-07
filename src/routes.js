import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import App from './App';
import Callback from './services/Auth/Callback/Callback';
import Auth from './services/Auth/Auth';
import history from './services/History/history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={(props) => <App auth={auth} page='Home' {...props} />} />
          <Route path="/Home" render={(props) => <App auth={auth} page='Home' {...props} />} />
          <Route path="/About" render={(props) => <App auth={auth} page='About' {...props} />} />
          <Route path="/Contact" render={(props) => <App auth={auth} page='Contact' {...props} />} />
          <Route path="/Dashboard" render={(props) => <App auth={auth} page='Dashboard' {...props} />} />
          <Route path="/SalesOrders" render={(props) => <App auth={auth} page='Sales Orders' {...props} />} />
          <Route path="/Customers" render={(props) => <App auth={auth} page='Customers' {...props} />} />
          <Route path="/Products" render={(props) => <App auth={auth} page='Products' {...props} />} />
          <Route path="/Inventory" render={(props) => <App auth={auth} page='Inventory' {...props} />} />
          <Route path="/PurchaseOrders" render={(props) => <App auth={auth} page='Purchase Orders' {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </Switch>
      </Router>
  );
}
