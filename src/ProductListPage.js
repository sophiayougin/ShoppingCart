import React from 'react';
import Item from './Item';
import data from './data';
 class ProductListPage extends React.Component{
     render() {
        const quantities = this.props.quantities;
        return(
            <div className='productlistpage'>
                {data.map((item) =>
                <Item 
                    key={item.productId}
                    product={item.product}
                    price={item.price}
                    quantity={quantities[item.productId]}
                    onQuantityChange={this.props.onQuantityChange}
                    onAddingCart={this.props.onAddingCart}
                    productId={item.productId}
                    />
                )}
                <div className='viewcart-class'>
                    <button className='viewcart-button' 
                            onClick={this.props.onCheckOut}>
                            View Cart
                    </button>
                </div>
                
            </div>
        );
     }
 }
 export default ProductListPage