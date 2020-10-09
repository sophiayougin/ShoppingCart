import React from 'react';

class Item extends React.Component {
  addToCart = ()=>{
    this.props.onQuantityChange(this.props.productId,this.props.quantity - 1);
    this.props.onAddingCart(this.props.productId);
  }
  
    render() {
      return (
        <div className='items'>
            <div className='product'>
            <h2>{this.props.product}</h2>
            <p>Price:Rs.{this.props.price}</p>
            <p>Qantity:{this.props.quantity}</p>
            <hr></hr>
            </div>   
            <div className='button-class'>
              <button className="addcart-button"
               disabled={this.props.quantity === 0}
               onClick={this.addToCart}>Add to Cart</button>
            </div>
        </div>
      );
    }
}
export default Item;