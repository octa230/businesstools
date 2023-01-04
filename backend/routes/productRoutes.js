const express = require('express')
const isAuth = require('../helpers/isAdmin')
const isAdmin = require('../helpers/isAuth')
const {
    getAll, AdminGetProducts, 
    getCategories, deleteProduct, 
    createProduct
} = require('../controllers/productCtrl')

const productRouter = express.Router() 

productRouter.get('/products/', getAll)
productRouter.get('/categories', getCategories)
productRouter.post('/create', isAdmin, createProduct)
productRouter.delete('/delete', isAdmin, deleteProduct)
productRouter.get('/admin-products', isAdmin, AdminGetProducts )


module.exports = productRouter