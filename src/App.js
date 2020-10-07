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
    for(let i = 0;i < data.length;i++){
      var pro = data[i];
      quantities[pro.productId] = pro.quantity;
      cart[pro.productId] = 0;
    }
    this.state ={
      quantities: quantities,
      cart:cart,
      page: 'list'
    }
  }
  quantityChange = (pdtId,quant) =>{
    const newQ = {...this.state.quantities};
    newQ[pdtId] = quant;
    this.setState({
      quantities: newQ
    });
  }
  addingToCart = (pdtId) =>{
    const newQ = {...this.state.cart};
    newQ[pdtId] = newQ[pdtId] + 1;
    this.setState({
      cart: newQ
    });
  }
  checkOut = () =>{
    this.setState({
      page: 'checkout'
    });
  }
  render() {
    return (
      <div>
        <Header/>
        {this.state.page === 'list'
        ?<ProductListPage quantities ={this.state.quantities}
                           onQuantityChange={this.quantityChange}
                           onAddingCart={this.addingToCart}
                           onCheckOut={this.checkOut}/>
        : <CheckOutPage cart={this.state.cart}/>}
      </div>
    );
  }
}

export default App;
