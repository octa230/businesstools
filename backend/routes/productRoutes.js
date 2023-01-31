const express = require('express')
const {isAuth} = require('../helpers/isAuth')
const {isAdmin} = require('../helpers/isAuth')
const {
    getAll, AdminGetProducts, 
    getCategories, deleteProduct, 
    createProduct, singleProduct
} = require('../controllers/productCtrl')

const productRouter = express.Router() 

productRouter.get('/products/', getAll)
productRouter.get('/categories', getCategories)
productRouter.post('/create', createProduct)
productRouter.get('/api/product/code/', singleProduct)
productRouter.delete('/delete', isAdmin, deleteProduct)
productRouter.get('/admin-products', isAdmin, AdminGetProducts )


module.exports = productRouter