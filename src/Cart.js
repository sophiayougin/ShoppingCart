import React from 'react';
import data from './data';
class Cart extends React.Component{
     printCart =() =>{
        const cart = this.props.cart;
        const cartItems =  data.filter((item) =>{
            return cart.hasOwnProperty(item.productId) && cart[item.productId] > 0
        });
        let total = cartItems.reduce((acc,item) =>
            acc + (item.price)*(cart[item.productId]),0)
        
        return(
                <div className='tablediv'>
                    <table className='table-class'>
                      <tr class="table-head">
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>  
                    {cartItems.map((element)=>
                        <tr>
                        <th>{element.product}</th>
                        <th>{cart[element.productId]}</th>
                        <th>Rs: {(element.price)*(cart[element.productId])}</th>
                        </tr>
                    )}
                        <tr>
                        <th></th>
                        <th></th>
                        <th className='total'>Total: Rs: {total}</th>  
                        </tr>
                    </table>
                </div>
                
        );
    };
    render(){
        return (
            <div>
                {this.printCart()}
            </div>
        )
        
    }
}
export default Cart;