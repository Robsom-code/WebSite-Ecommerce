const { query } = require('express');
const mongoose = require('mongoose');
const requireDIr = require('require-dir');




const Product = mongoose.model("Product");

module.exports = {

    //select no DB
     async index(req,res){

        const{page = 1} = req.query;
        const product = await Product.paginate({}, {page, limit: 10});
    
        return res.json(product);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },


    //create no DB
    async store(req,res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async destroy (req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send("sucesso");
        
    },
    async apagar(req, res){
        await Product.remove();

        return res.send("sucesso");
    },
    
    
    
};