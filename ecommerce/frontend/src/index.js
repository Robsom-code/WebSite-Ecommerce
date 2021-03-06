import React from 'react';

import ReactDOM from 'react-dom';

import "./components/Modal/styles.css";

import App from './App';

import * as serviceWorker from './serviceWorker';



// import ProductsContextProvider from './components/contexts/ProductsContext';
import CartContextProvider from './components/contexts/CartContext';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.render(
  
    <HelmetProvider>
      <CartContextProvider>
      <App/>
      </CartContextProvider>
    </HelmetProvider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
