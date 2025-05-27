import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    // Dummy product data (replace with API call)
    const dummyProducts = [
        {
            id: "1",
            name: "Product 1",
            price: 29.99,
            description: "This is a great product.",
            image: "/assets/product1.jpg",
        },
        {
            id: "2",
            name: "Product 2",
            price: 49.99,
            description: "This product is even better.",
            image: "/assets/product2.jpg",
        },
    ];

    useEffect(() => {
        const found = dummyProducts.find((p) => p.id === id);
        setProduct(found);
    }, [id]);

    if (!product) return <div className="product-container">Product not found</div>;

    return (
        <div className="product-container">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h1>{product.name}</h1>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <p>{product.description}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;
