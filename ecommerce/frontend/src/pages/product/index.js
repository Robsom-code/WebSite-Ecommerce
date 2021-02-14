import React, {Component, TextField} from 'react';
import api from "../../services/api";
import './style.css';
import Action from '../Main/actions';
import Actions from '../Main/actions';

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
                <div className= "product">

                <h1 >{produto.produto}</h1>

                <img className="img-product" src={produto.img} ></img>

                <p>Descrição: {produto.description}</p>
                    
                </div>
                
                <div className = "b-t-1">
                
                <h2>Por R$:{produto.valor}</h2>
                <a className= "comprar"  href="/cart" >Comprar</a>
                <Actions className="btn"  product = {produto._id} product = {produto} />
                
                <div className="CEP">
                <input  placeholder="00000-000"></input>
                <button>Ok</button>
                
                <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/" target="_blank">Não sei o CEP</a>
                
                </div>
                </div>
                
                
            </div>

        );
    }
}