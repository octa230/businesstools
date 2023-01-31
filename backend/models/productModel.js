const mongoose = require('mongoose')

const ProductModel = new mongoose.Schema({

    name: {type: String, required: true},
    code: {type: String, required: true},
    image: {type: String},
    category: {type: String, required: true},
    supplier: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    color:{type: String, required: true},
},
{
    timestamps: true
})

const Product = mongoose.model('Product', ProductModel)
module.exports = Product