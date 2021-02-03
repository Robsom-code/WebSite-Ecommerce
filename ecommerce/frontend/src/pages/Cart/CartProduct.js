import React, { useContext } from 'react';

import {CartContext} from '../../components/contexts/CartContext';

import CartItem from './CartItem';


const CartProducts = () => {

    const { cartItems } = useContext(CartContext);

    return ( 
        <div className="Container">
            <div className="card card-body border-0">

                {
                    cartItems.map(produto =>  <CartItem key={produto._id} product={produto}/>)
                }

            </div>
        </div>

     );
}
 
export default CartProducts;