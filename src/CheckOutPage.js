import React from 'react';
import Cart from './Cart';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
class CheckOutPage extends React.Component{
    render() {
        const cart = this.props.cart;
       return(
           <div>
             <Cart cart={cart}/>
             <div className='checkout-buttons'>
                <Popup trigger={<button className='viewcart-button'> Proceed to Buy</button>}>
                <div>Purchase confirmed !!</div>
                </Popup>
                <button className='viewcart-button'
                        onClick={this.props.onUpdateCart}>
                        Update cart
                </button>
             </div>
           </div>
       );
    }
}
export default CheckOutPage