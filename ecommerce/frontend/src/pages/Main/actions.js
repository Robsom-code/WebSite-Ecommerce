import React, { useState, useContext } from 'react';
import Modal from '../../components/Modal/Modal';
import {CartContext} from '../../components/contexts/CartContext';
import './style.css';

function Actions({product}) {

    const {addProduct, cartItems, increase} = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item._id === product._id);
    }
    
    const [isModalVisible, setIsModalVisible] = useState(false);
   

    return (
        <div className="actions">
            <button className="add" onClick={() => setIsModalVisible(true)}>Adicionar ao Carrinho</button>
            {isModalVisible ? <h1><Modal onClose={() => setIsModalVisible(false)}>
                <h2>Teste</h2></Modal></h1> : null}

            <div className = "text-right">   
                    
            
            {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)} 
                    className="btn btn-outline-primary btn-sm">Add more</button>
                }

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm">Add to cart</button>
                }

            </div>    

        </div>
    )
}
export default Actions;