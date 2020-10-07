import React from 'react';
import data from './data';
let total = 0;
class Cart extends React.Component{
     printingCart =() =>{
        const cart = this.props.cart;
        const cartItems =  data.filter((item) =>{
            return cart.hasOwnProperty(item.productId) && cart[item.productId] > 0
        });
        cartItems.map((item) =>{
            total  = total + (item.price)*(cart[item.productId]);
        })
        return(
                <div>
                    <table className='table-class'>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>  
                    {cartItems.map((element)=>
                        <tr>
                        <th>{element.product}</th>
                        <th>{cart[element.productId]}</th>
                        <th>{(element.price)*(cart[element.productId])}</th>
                        </tr>
                    )}
                    </table>
                    
                </div>
                
        );
    };
    render(){
        return (
            <div>
                <h2 className='your-cart'>Your Cart</h2>
                {this.printingCart()}
                <h3 className ='total'>Total: {total}</h3>
            </div>
        )
        
    }
}
export default Cart;