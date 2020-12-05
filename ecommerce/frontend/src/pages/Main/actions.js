import React, {useState} from 'react';
import Modal from '../../components/Modal/Modal';
import './style.css';

function Actions(){
    const[isModalVisible, setIsModalVisible] = useState(false);
    return(
        <div className = "actions">
            <button className="add" onClick={() => setIsModalVisible(true)}>Adicionar ao Carrinho</button>
            {isModalVisible ? <h1><Modal onClose={() =>setIsModalVisible(false)}>
                <h2>Teste</h2></Modal></h1> : null}
            
        </div>
    )
}
export default Actions;