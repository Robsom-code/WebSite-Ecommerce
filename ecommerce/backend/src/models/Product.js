const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({

    produto:{
        type:String,
        required: true,
    },

    description:{
        type:String,
        required: true,
    },
    valor:{
        type:Number,
        require:true,
    },
    

});
ProductSchema.plugin(mongoosePaginate);
mongoose.model("Product", ProductSchema);