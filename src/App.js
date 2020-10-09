import React from 'react';
import './App.css';
import Header from './Header';
import data from './data';
import ProductListPage from './ProductListPage';
import CheckOutPage from './CheckOutPage';
class App extends React.Component {
  constructor(props) {
    super(props);
    var quantities = {};
    var cart = {};
    const listingPage = 'listing_page';
    data.forEach((item)=>{
      quantities[item.productId] = item.quantity;
      cart[item.productId] = 0;
    });
    this.state ={
      quantities: quantities,
      cart: cart,
      page: listingPage
    }
  }
  quantityChangeHandler = (pdtId,quant) =>{
    const newQ = {...this.state.quantities};
    newQ[pdtId] = quant;
    this.setState({
      quantities: newQ
    });
  }
  addToCart = (pdtId) =>{
    const newQ = {...this.state.cart};
    newQ[pdtId] = newQ[pdtId] + 1;
    this.setState({
      cart: newQ
    });
  }
  makeCheckOutPage = () =>{ 
    const checkOutPage = 'checkout_page';
    this.setState({
      page: checkOutPage
    });
  }
  makeProductListPage = () =>{
    const listingPage = 'listing_page';
    this.setState({
      page: listingPage
    });
  }
  render() {
    return (
      <div>
        <Header/>
        {this.state.page === 'listing_page'
        ?<ProductListPage quantities ={this.state.quantities}
                           onQuantityChange={this.quantityChangeHandler}
                           onAddingCart={this.addToCart}
                           onCheckOut={this.makeCheckOutPage}/>
        : <CheckOutPage cart={this.state.cart}
                        onUpdateCart={this.makeProductListPage}/>}
      </div>
    );
  }
}
export default App;
