// Import necessary modules and CSS
import React from 'react';
import './Signup.css'; // Assuming this is your CSS file relative to Signup.js

function Signup(){

    return (
        <div>
            <section className="signup-page">
                <div className="login">
                    <form className="login-form">
                        <h1 className="login-title">Signup</h1>

                        <div className="login-content">
                            {/* First Name input */}
                            <div className="login-box">
                                <i className="ri-user-3-line login-icon"></i>
                                <div className="login-box-input">
                                    <input
                                        type="text"
                                        className="login-input"
                                        name="first_name"
                                        required
                                        placeholder=" "
                                    />
                                    <label htmlFor="first_name" className="login-label">
                                        First Name
                                    </label>
                                </div>
                            </div>

                            {/* Last Name input */}
                            <div className="login-box">
                                <i className="ri-user-3-line login-icon"></i>
                                <div className="login-box-input">
                                    <input
                                        type="text"
                                        className="login-input"
                                        name="last_name"
                                        required
                                        placeholder=" "
                                    />
                                    <label htmlFor="last_name" className="login-label">
                                        Last Name
                                    </label>
                                </div>
                            </div>

                            {/* Email input */}
                            <div className="login-box">
                                <i className="ri-mail-line login-icon"></i>
                                <div className="login-box-input">
                                    <input
                                        type="email"
                                        className="login-input"
                                        name="email"
                                        required
                                        placeholder=" "
                                    />
                                    <label htmlFor="email" className="login-label">
                                        Email
                                    </label>
                                </div>
                            </div>

                            {/* Password input */}
                            <div className="login-box">
                                <i className="ri-lock-2-line login-icon"></i>
                                <div className="login-box-input">
                                    <input
                                        type="password"
                                        className="login-input"
                                        name="password"
                                        required
                                        placeholder=" "
                                    />
                                    <label htmlFor="password" className="login-label">
                                        Password
                                    </label>
                                </div>
                            </div>

                            {/* Address input */}
                            <div className="login-box">
                                <i className="ri-home-3-line login-icon"></i>
                                <div className="login-box-input">
                                    <input
                                        type="text"
                                        className="login-input"
                                        name="address"
                                        required
                                        placeholder=" "
                                    />
                                    <label htmlFor="address" className="login-label">
                                        Address
                                    </label>
                                </div>
                            </div>

                            {/* Phone number input */}
                            <div className="login-box">
                                <i className="ri-phone-line login-icon"></i>
                                <div className="login-box-input">
                                    <input
                                        type="tel"
                                        className="login-input"
                                        name="phone"
                                        required
                                        placeholder=" "
                                    />
                                    <label htmlFor="phone" className="login-label">
                                        Phone number
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Signup button and login link */}
                        <button type="submit" className="login-button">
                            Signup
                        </button>
                        <p className="login-register">
                            Already have an account? <a href="/login">Login</a>
                        </p>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Signup;
