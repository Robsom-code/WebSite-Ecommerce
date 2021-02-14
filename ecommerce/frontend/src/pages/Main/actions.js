import React, { useState, useContext } from 'react';
// import Modal from '../../components/Modal/Modal';
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
            {/* <button className="add" onClick={() => setIsModalVisible(true)}>Adicionar ao Carrinho</button>
            {isModalVisible ? <h1><Modal onClose={() => setIsModalVisible(false)}>
                <h2>Teste</h2></Modal></h1> : null} */}

             
                    
            
                {
                    isInCart(product) && 
                    <button className="btn2"
                    onClick={() => increase(product) || window.location.reload() } 
                    className="btn btn-outline-primary btn-sm">Adicionar mais</button>
                }

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product) || window.location.reload()}
                    className="btn btn-primary btn-sm">Adicionar ao Carrinho</button>
                }

            </div>    

        
    )
}
export default Actions;