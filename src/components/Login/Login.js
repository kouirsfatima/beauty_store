import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login clicked with:', { email, password });
        // Example: You can call an authentication function here
    };

    return (
        <div>
            <section className="login-page">
                <div className="login">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h1 className="login-title">Login</h1>

                        <div className="login-content">
                            <div className="login-box">
                                <i className="ri-user-3-line login-icon"></i>
                                <div className="login-box-input">
                                    <input
                                        type="email"
                                        className="login-input"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder=" "
                                    />
                                    <label htmlFor="login-email" className="login-label">
                                        Email
                                    </label>
                                </div>
                            </div>

                            <div className="login-box">
                                <i className="ri-lock-2-line login-icon"></i>
                                <div className="login-box-input">
                                    <input
                                        type="password"
                                        className="login-input"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder=" "
                                    />
                                    <label htmlFor="login-pass" className="login-label">
                                        Password
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="login-check">
                            <div className="login-check-group">
                                <input type="checkbox" className="login-check-input" id="remember-me" />
                                <label htmlFor="remember-me" className="login-check-label">
                                    Remember Me
                                </label>
                            </div>
                            <button type="button" className="login-forget">
                                Forgot Password?
                            </button>
                        </div>

                        <button type="submit" className="login-button">
                            Login
                        </button>
                        <p className="login-register">
                            Don't have an account? <Link to="/signup">Signup</Link>
                        </p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;
