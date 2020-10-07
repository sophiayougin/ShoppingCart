import React from 'react';
import Cart from './Cart';
class CheckOutPage extends React.Component{
    render() {
        const cart = this.props.cart;
       return(
           <div>
             <Cart cart={cart}/>  
           </div>
       );
    }
}
export default CheckOutPage