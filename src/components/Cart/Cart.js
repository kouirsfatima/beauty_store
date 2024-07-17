import React, { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import pymentmethode1 from '../../assets/pymrntmethod1.jpeg';
import pymentmethode2 from '../../assets/pymenntmethod2.jpeg';
import pymentmethode3 from '../../assets/pymentmethode3.jpeg';
import './cart.css';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const handleCheckout = () => {
        // Implement checkout logic here
        console.log('Checkout');
    };

    // Calculate total price of items in cart
    const cartTotal = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart-container">
            <h2 className="cart-header">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.primaryImage} alt={item.name} />
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p>${item.price}</p>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
                    </div>
                    <h2>Payment Method</h2>
                    <div className="payment-method">
                        <img src={pymentmethode1} alt="Payment method 1" />
                        <img src={pymentmethode2} alt="Payment method 2" />
                        <img src={pymentmethode3} alt="Payment method 3" />
                    </div>
                    <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                </>
            )}
        </div>
    );
};

export default Cart;
