// src/contexts/CartContext.js

import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create the CartProvider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
