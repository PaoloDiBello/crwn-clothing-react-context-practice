import React, { createContext, useState, useEffect } from 'react';

import {
    addItemToCart,
    removeItemFromCart,
    filterItemsFromCart,
    getCartItemsCount
} from './cart.utils';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => { },
    cartItems: [],
    addItem: () => { },
    removeItem: () => { },
    clearItemFromCart: () => { },
    cartItemsCount: 0
});

export const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = (item) => setCartItems(filterItemsFromCart(cartItems, item))

    const toggleHidden = () => setHidden(!hidden);

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems))
    }, [cartItems])

    return (
        <CartContext.Provider
            value={{
                hidden,
                toggleHidden,
                cartItems,
                addItem,
                removeItem,
                clearItemFromCart,
                cartItemsCount
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;