import React, {Component} from 'react';
import api from "../../services/api";


export default class Product extends Component{
    state = {
        produto: {},
    }
    async componentDidMount(){
        const{id} = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({produto: response.data});
    }
    render(){
        const {produto} = this.state;

        return(
            <div className = "product-info">
                <h1>{produto.produto}</h1>
                <p>{produto.description}</p>

                <h3>Preço R$:{produto.valor}</h3>
        
                
            </div>

        );
    }
}