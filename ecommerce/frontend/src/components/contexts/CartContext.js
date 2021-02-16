import React, { createContext, useReducer } from 'react';
import { CartReducer, sumItems } from './CartReducer';


export const CartContext = createContext()

const localStorageCart = localStorage.getItem('cart');
const cartItems = JSON.parse(localStorageCart) || [];
const initialState = { cartItems, ...sumItems(cartItems), checkout: false };

function CartContextProvider({ children }) {

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const increase = payload => {
        dispatch({ type: 'INCREASE', payload : payload });
    };

    const decrease = payload => {
        dispatch({ type: 'DECREASE', payload });
    };

    const addProduct = payload => {
        dispatch({ type: 'ADD_ITEM', payload : payload });
    };

    const removeProduct = payload => {
        dispatch({ type: 'REMOVE_ITEM', payload });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR' });
    };

    const handleCheckout = () => {
        console.log('CHECKOUT', state);
        dispatch({ type: 'CHECKOUT' });
    };

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...state
    };

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
}
 
export default CartContextProvider;