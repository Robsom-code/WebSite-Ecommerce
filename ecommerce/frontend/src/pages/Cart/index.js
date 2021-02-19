import React, { useContext } from 'react';

import'./style.css';

import CartProducts from './CartProduct';
import { CartContext } from '../../components/contexts/CartContext'

import { Link } from 'react-router-dom';

const Cart = () => {

    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    
    return ( 

            <div className = "all-grid">
                <div className="presentation">
                    <h1>Cart</h1>
                    <p>This is the Cart Page.</p>
                </div>

                <div className="ensure">
                    <div className="inner">
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="empty">
                                Your cart is empty
                            </div>
                        }

                        { checkout && 
                            <div className="checkout">
                                <p>Checkout successfull</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="total-box">
                            <div className="card">
                                <p className="tot-i">Total Items</p>
                                <h4 className=" mb-2">{itemCount}</h4>
                                <p className="tot-i">Total Payment</p>
                                <h3 className="mb-2">R$:{total}</h3>
                                <hr className="my-4"/>
                                <div className="options">
                                    <button type="button" className="btn btn-primary " onClick={handleCheckout}>CHECKOUT</button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                                </div>

                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        
     );
}
 
export default Cart;