//require library
const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

//Schema for Product(field:id, name,quantity) with timeStamps
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Product = mongoose.model('Product',productSchema);
//exporting Schema
module.exports = Product;