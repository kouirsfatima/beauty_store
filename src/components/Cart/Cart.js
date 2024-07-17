import React, { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import './cart.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart } = useContext(CartContext);

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
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
                        <Link to="/checkout" className="btn btn-primary checkout-btn">Checkout</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
