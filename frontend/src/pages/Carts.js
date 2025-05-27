import React, { useState } from "react";
import "./Cart.css";

function Cart() {
    // Dummy cart items (replace with real state or API)
    const [cartItems, setCartItems] = useState([
        {
            id: "1",
            name: "Product 1",
            price: 29.99,
            quantity: 2,
            image: "/assets/product1.jpg",
        },
        {
            id: "2",
            name: "Product 2",
            price: 49.99,
            quantity: 1,
            image: "/assets/product2.jpg",
        },
    ]);

    const handleQuantityChange = (id, newQty) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, newQty) } : item
            )
        );
    };

    const handleRemove = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                    <p>${item.price.toFixed(2)}</p>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            handleQuantityChange(item.id, parseInt(e.target.value))
                                        }
                                    />
                                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <h3>Total: ${totalPrice.toFixed(2)}</h3>
                        <button className="checkout-btn" onClick={() => alert("Proceed to checkout")}>
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
