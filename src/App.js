import React, { Component } from 'react';
import Auxi from './hoc/Auxi';
import Navbar from './containers/Navbar/Navbar';
import ContentPage from './containers/ContentPage/ContentPage';
import products from './apiDemo/Products';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      currentContentPage: 'Dashboard',
      productList: products
    }
  }

  addProduct(productToAdd){
    var newProductList = [...this.state.productList];
    newProductList.push(productToAdd);
    this.setState({productList: newProductList});
  }

  changeContentPageHandler = (newPage) => {
    this.setState({currentContentPage: newPage});
  }

  render() {
    return (
      <div>
        <Auxi>
          <Navbar clicked={this.changeContentPageHandler.bind(this)} />
          <ContentPage title={this.state.currentContentPage}/>
        </Auxi>
      </div>
    );
  }
}

export default App;
