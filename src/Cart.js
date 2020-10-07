import React from 'react';
import data from './data';
class Cart extends React.Component{
     printingCart =() =>{
        const cart = this.props.cart;
        const cartItems =  data.filter((item) =>{
            return cart.hasOwnProperty(item.productId) && cart[item.productId] > 0
        });
        let total = cartItems.reduce((acc,item) =>
            acc + (item.price)*(cart[item.productId]),0)
        
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
                    <h3 className ='total'>Total: {total}</h3>
                </div>
                
        );
    };
    render(){
        return (
            <div>
                <h2 className='your-cart'>Your Cart</h2>
                {this.printingCart()}
            </div>
        )
        
    }
}
export default Cart;