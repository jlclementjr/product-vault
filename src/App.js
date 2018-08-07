import React, { Component } from 'react';
import Auxi from './hoc/Auxi';
import Navbar from './containers/Navbar/Navbar';
import ContentPage from './containers/ContentPage/ContentPage';
import products from './apiDemo/Products';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      currentContentPage: this.props.page,
      productList: products
    }
  }

  goTo(route) {
    this.props.history.replace(`/${route}`);
    this.changeContentPageHandler(route);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  changeContentPageHandler = (newPage) => {
    this.setState({currentContentPage: newPage});
  }

  render() {
    const {isAuthenticated} = this.props.auth;

    return (
      <div>
        <Auxi>
          <Navbar isAuthenticated={ isAuthenticated } 
                  login={this.login.bind(this)}
                  logout={this.logout.bind(this)}
                  //clicked={this.changeContentPageHandler.bind(this)}
                  clicked={this.goTo.bind(this)} />
          <ContentPage isAuthenticated={isAuthenticated} title={this.state.currentContentPage}/>
        </Auxi>
      </div>
    );
  }
}

export default App;
