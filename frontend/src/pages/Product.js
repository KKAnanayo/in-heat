import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className="product-container">
            <h2>Product Page</h2>
            <div className="product-list">
                {/* Add product cards here */}
                <div className="product-card">Product 1</div>
                <div className="product-card">Product 2</div>
            </div>
        </div>
    );
}

export default Product;