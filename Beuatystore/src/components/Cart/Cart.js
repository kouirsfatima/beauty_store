import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Cart.css'; // Assuming this is your CSS file relative to Checkout.js

const Checkout = () => {
    // State for form inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    // State for payment information
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Example: Handle checkout logic here (e.g., submit to server, process payment)
        console.log('Form submitted with:', {
            firstName,
            lastName,
            email,
            address,
            phone,
            cardNumber,
            expiryDate,
            cvv
        });
        // Reset form fields or navigate to confirmation page
    };

    return (
        <div>
            <section className="checkout-page">
                <div className="checkout">
                    <form className="checkout-form" onSubmit={handleSubmit}>
                        <h1 className="checkout-title">Checkout</h1>

                        {/* Shipping Information */}
                        <div className="checkout-section">
                            <h2 className="checkout-section-title">Shipping Information</h2>
                            <div className="checkout-input-group">
                                <input
                                    type="text"
                                    className="checkout-input"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    className="checkout-input"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    placeholder="Last Name"
                                />
                            </div>
                            <input
                                type="email"
                                className="checkout-input"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Email"
                            />
                            <input
                                type="text"
                                className="checkout-input"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                placeholder="Address"
                            />
                            <input
                                type="tel"
                                className="checkout-input"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                placeholder="Phone Number"
                            />
                        </div>

                        {/* Payment Information */}
                        <div className="checkout-section">
                            <h2 className="checkout-section-title">Payment Information</h2>
                            <input
                                type="text"
                                className="checkout-input"
                                name="cardNumber"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                required
                                placeholder="Card Number"
                            />
                            <div className="checkout-input-group">
                                <input
                                    type="text"
                                    className="checkout-input"
                                    name="expiryDate"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    required
                                    placeholder="MM/YYYY"
                                />
                                <input
                                    type="text"
                                    className="checkout-input"
                                    name="cvv"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    required
                                    placeholder="CVV"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="checkout-button">
                            Place Order
                        </button>

                        {/* Back to Shopping Link */}
                        <p className="checkout-back">
                            <Link to="/products">Back to Shopping</Link>
                        </p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Checkout;
