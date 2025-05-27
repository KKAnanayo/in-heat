import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to In-Heat</h1>
                <p>Find the hottest deals on your favorite products!</p>
            </header>

            <section className="home-featured">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    {/* Sample cards — replace with real data or map API */}
                    <div className="product-card">
                        <img src="/assets/product1.jpg" alt="Product 1" />
                        <h3>Product 1</h3>
                        <p>$29.99</p>
                    </div>
                    <div className="product-card">
                        <img src="/assets/product2.jpg" alt="Product 2" />
                        <h3>Product 2</h3>
                        <p>$49.99</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
