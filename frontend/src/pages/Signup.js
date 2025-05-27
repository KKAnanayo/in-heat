import React, { useState } from "react";
import "./Register.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        // TODO: Connect with backend registration logic
        console.log("Registering:", { name, email, password });
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleRegister}>
                <h2>Create Account</h2>
                <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    );
}

export default Register
