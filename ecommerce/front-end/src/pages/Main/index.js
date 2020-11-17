import React, {Component} from 'react';
import api from "../../services/api";
import { Link } from "react-router-dom";
import './style.css';

export default class Main extends Component{
    state = {
        produto: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount(){
        this.loadProducts();
    }


    loadProducts = async (page = 1)=>{
        const response = await api.get(`/products?page=${page}`);

        const {docs, ...productInfo} = response.data;

        this.setState({produto: docs, productInfo, page});
    }


    prevPage = () =>{
        const {page, productInfo} = this.state;

        if (page ===1 ) return;

        const pageNumber = page -1;

        this.loadProducts(pageNumber);
    };


    nextPage = () =>{
        const {page, productInfo} = this.state;
        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    lastPage = () =>{
        const{page, productInfo} = this.state;

        const pageNumber = productInfo.pages;

        this.loadProducts(pageNumber);
    }
    firstPage = () =>{
        const{page, productInfo} = this.state;
        if (page ===1 ) return;

        const pageNumber = 1;

        this.loadProducts(pageNumber);
    }
    midlePage = ()=>{
        const{page, productInfo} = this.state;
        
        if(page > 1) return;

        const pageNumber = page + 1;
        
        this.loadProducts(pageNumber);

    }




    render(){
        const {produto, page, productInfo} = this.state;

     return(
    <div className="product-list">{produto.map(produto =>(
        <article key= {produto._id}>
            <h1>{produto.produto}</h1>
            <p>$:{produto.valor}</p>

            <Link to={`/products/${produto._id}`}>Acessar</Link>
        </article>
        ))}
        <div className= "actions">

            <button disabled= {page === 1} onClick={this.prevPage}>Anterior</button>
            <div className = "paginates">
                <button className = "first" onClick={this.firstPage} disabled = {page === 1}>1</button>
                <button className = "early" hidden = {page === 1 || page ===2 } onClick={this.prevPage}>{page - 1}</button>
                <button className = "page"  hidden = {page === 1} >{page}</button>
                <button className = "next" hidden = {page === productInfo.pages} onClick={this.nextPage}>{page + 1}</button>
                <button onClick={this.lastPage} hidden = {page == productInfo.pages || page == productInfo.pages - 1 } >{productInfo.pages}</button>
            </div>   
            <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
            
            
        </div>   
         
            </div>
    
     )}
}


