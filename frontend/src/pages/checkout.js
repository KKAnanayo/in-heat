import React from 'react';
import './Checkout.css';

function Checkout() {
    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <form>
                <input type="text" placeholder="Shipping Address" required />
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="ZIP Code" required />
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;