const mongoose = require('mongoose')

const ProductModel = new mongoose.Schema({

    name: {type: String, required: true},
    code: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    Stock: {type: Number, required: true},
})

const Product = mongoose.model('Product', ProductModel)
export default Product