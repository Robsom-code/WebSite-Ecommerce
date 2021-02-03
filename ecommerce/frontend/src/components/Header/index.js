import React from 'react';
import {useContext} from 'react'

import { CartContext } from '../contexts/CartContext';




import './styles.css';

function Header() {

    const {itemCount} = useContext(CartContext);
    return (

        <div>
            <header id="main-header">E-Commerce
            
            <a href="/cart" >Carrinho ({itemCount})</a>


            </header>
        </div>
    );


}


export default Header;
