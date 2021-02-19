import React, { useContext } from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../components/icons'
import'./style.css';
import {CartContext} from '../../components/contexts/CartContext';



const CartItem = ({product}) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <div className="product-grid">
            <div className="p-img">
            <img className="img-block" src={product.img} alt= {product.produto} ></img>
            </div>
            <div className="p-details">
                <h5 className="mb-1">{product.produto}</h5>
                <p className="mb-2">Price: {(product.valor)} </p>
                
            </div>
            <div className="qnty ">
                 <p className="qnty_inner">Qty: {product.quantity}</p>
            </div>
            <div className="btn">
                 <button 
                 onClick={() => increase(product)}
                 className="plus">
                 </button>

                 {
                     product.quantity > 1 &&
                     <button
                    onClick={() => decrease(product)}
                    className="minus">
                        
                    </button>
                 }

                {
                     product.quantity === 1 &&
                     <button
                    onClick={() => removeProduct(product)}
                    className="trash">
                        <TrashIcon width={"20px"}/>
                    </button>
                 }
                 
            </div>
        </div>
     );
}
 
export default CartItem;