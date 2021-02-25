import React from 'react';
import {useContext} from 'react'

import { CartContext } from '../contexts/CartContext';




import './styles.css';

function Header() {

    const {itemCount} = useContext(CartContext);
    return (

        
            <header id="main-header">E-Commerce
            
            <a href="/cart" >Carrinho ({itemCount})</a>


            </header>
        
    );


}


export default Header;
