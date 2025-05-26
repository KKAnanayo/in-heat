import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>in-heat</h1>
                <nav>
                    <ul>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </header>

            <section className="hero-section">
                <div className="hero-text">
                    <h2>Heat Up Your Style</h2>
                    <p>Shop our latest fashion drops and stay fresh every season.</p>
                    <button>Shop Now</button>
                </div>
            </section>
        </div>
    );
}

export default Home;
