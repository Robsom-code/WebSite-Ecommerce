import React, { createContext, useState } from 'react';
import api from '../../services/api';


export const ProductsContext = createContext()


const ProductsContextProvider = ({children}) => {


    const [products] = useState([api.get("/products")]);
    
    
    return ( 
        <ProductsContext.Provider value={ {products} } >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;