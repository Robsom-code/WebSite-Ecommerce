import React, { Component} from 'react';
import api from "../../services/api";
import { Link } from "react-router-dom";
import './style.css';

import ImageGallery from 'react-image-gallery';



export default class Main extends Component {
    state = {
        produto: [],
        productInfo: {},
        page: 1,
    }


    

    componentDidMount() {
        this.loadProducts();
    }


    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ produto: docs, productInfo, page });
    }


    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };


    nextPage = () => {
        const { page, productInfo } = this.state;
        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    lastPage = () => {
        const {  productInfo } = this.state;

        const pageNumber = productInfo.pages;

        this.loadProducts(pageNumber);
    }
    firstPage = () => {
        const { page} = this.state;
        if (page === 1) return;

        const pageNumber = 1;

        this.loadProducts(pageNumber);
    }
    midlePage = () => {
        const { page } = this.state;

        if (page > 1) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);

    }

 
    render() {
        
        
            const { produto, page, productInfo } = this.state;

            const images = [
                {
                  original: 'https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275_960_720.jpg',
                 
                },
                {
                  original: 'https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_960_720.jpg',
                 
                },
                {
                  original: 'https://cdn.pixabay.com/photo/2017/10/03/17/53/nature-2813487_960_720.jpg',
                  
                },
                {
                    original: 'https://ik.imagekit.io/angiogyn/wp-content/uploads/2020/05/AconselhamentoOncogen%C3%A9tico-960x300.jpg' ,
                }
              ];


        return (
        <div className="main">

            
            <ImageGallery items={images}
             showThumbnails={false}
             autoPlay={true} 
             showPlayButton={false}
             showFullscreenButton={false}
             slideDuration={1500}
             slideInterval={10000} 
              />
             
            

            <div className="product-list">{produto.map(produto => (

                <article key={produto._id} >
                    
                     
                <img className="img-product" src={produto.img} alt={produto.produto} ></img>
                    

                <h3>{produto.produto}</h3>
                <p>$:{produto.valor}</p>
                <Link className= "button" to={`/products/${produto._id}`}>Visualizar</Link>    
                <Link className="container" to={`/products/${produto._id}`}></Link>      
                              
                   

                    
                    

                </article>
            ))}
               
              
            </div>

                {/* botoes da paginação */}
            <div className="paginas">

                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <div className="paginates">

                        <button className="first" onClick={this.firstPage} disabled={page === 1}>1</button>
                        <button className="early" hidden={page === 1 || page === 2} onClick={this.prevPage}>{page - 1}</button>
                        <button className="page" hidden={page === 1} >{page}</button>
                        <button className="next" hidden={page === productInfo.pages} onClick={this.nextPage}>{page + 1}</button>
                        <button onClick={this.lastPage} hidden={page === productInfo.pages || page === productInfo.pages - 1} >{productInfo.pages}</button>
                    </div>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>


                </div>


                
            </div>

        )
    }
}



