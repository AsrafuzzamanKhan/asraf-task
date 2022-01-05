import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
        totalQuantity = totalQuantity + cart.length;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart border shadow-sm p-3 mb-5 bg-body rounded text-start'>
            <h5>Order Summary</h5>
            <h5>Items Ordered: {totalQuantity}</h5>
            <p>Total: {total.toFixed(2)} </p>
            <p>Shipping:{shipping.toFixed(2)} </p>
            <p>Tax:{tax.toFixed(2)} </p>
            <p>Grand Total: {grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;