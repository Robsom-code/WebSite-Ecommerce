import React from 'react';
import {useContext} from 'react'

import { CartContext } from '../contexts/CartContext';

import './styles.css';




function Header() {

    const {itemCount} = useContext(CartContext);
    return (

        
            <header id="main-header">

            <a href="/">
            <img className="logo"  src="https://i.ibb.co/qkLGmx4/Whats-App-Image-2021-02-26-at-20.png" alt="Logo"  />
            </a>

            <div className="count">
            <a href="/cart" className="cart" ><img src="https://i.ibb.co/X7fVx02/carrinho-de-compras-de-design-xadrez-1-1.png" alt="carrinho" /> <p>{itemCount}</p></a>
            </div>

            {/* <div className="media">

            <ul>
                <li><a href="https://github.com/robsom-code" target="_blank"><img src="https://www.flaticon.com/svg/vstatic/svg/733/733553.svg?token=exp=1614803558~hmac=d73184191e4ad5d071a84ec17a24034b"/> </a> </li>
                <li><a href="/" ><img src="https://www.flaticon.com/svg/vstatic/svg/145/145807.svg?token=exp=1614803691~hmac=3fa49e1556bab0b6c8c281b2556fdeb6"/> </a></li>
                <li><a href="/" ><img src="https://www.flaticon.com/svg/vstatic/svg/145/145802.svg?token=exp=1614803868~hmac=f18f08513970144555034bc4a0ae3cb5"/> </a></li>
            </ul>
            
            </div> */}

            </header>
        
    );


}


export default Header;
