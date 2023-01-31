const asyncHandler = require('express-async-handler')
const express = require('express')
const Product = require('../models/productModel')


//getAll Products

const getAll = asyncHandler(async (req, res)=> {
    const products = await Product.find()
    res.send(products)
}) 

//create product

const createProduct = asyncHandler(async(req, res) =>{
    const newProduct = new Product({
        name: req.body.name,
        image: req.body.image,
        code: req.body.code,
        stock: req.body.stock,
        color: req.body.color,
        price: req.body.price,
        supplier: req.body.supplier,
        category: req.body.category

    })
    const product = await newProduct.save();
    res.send({message: 'Product Added', product})
})


//update product

const updateProduct = asyncHandler(async(req, res) => {
    const productId = req.params._id;
    const product = await Product.findById(productId);
    if(product){
        product.name = req.body.name,
        product.code = req.body.code,
        product.image = req.body.image,
        product.stock = req.body.stock,
        product.price = req.body.price,
        product.color = req.body.price,
        product.category = req.body.category,
        product.supplier = req.body.supplier
        await product.save()
        res.send({message: 'Product Updated'})
    }else{
        res.status(404).send({message: 'Product not Found'})
    }
})

//delete product

const deleteProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        await product.remove();
        res.send({message: 'Product deleted'})
    } else{
        res.status(404).send('Product couldn\'t be found')
    }
})


//Admin access get products

const PAGESIZE = 6

const AdminGetProducts = asyncHandler(async(req, res) =>{
    const { query } = req;
    const page = query.page || 1
    const pageSize = query.pageSize || PAGESIZE;

    const products = await Product.find()
        .skip(pageSize *(page - 1))
        .limit(pageSize)

    const countProducts = await Product.countDocuments();
    res.send({
        products,
        countProducts,
        page,
        pages: Math.ceil(countProducts/ pageSize) 
    });
})

const getCategories = asyncHandler(async(req, res)=>{
    const categories = await Product.find().distinct('category')
    res.send(categories)
})

async function singleProduct(req, res){
const product = await Product.findOne({code: req.params.code})

if(product){
    res.send(product)
} else {
    res.status(404).send({message: 'product not found'})
}
}

module.exports = {
    getAll, createProduct, 
    updateProduct, deleteProduct, 
    AdminGetProducts,
    getCategories, singleProduct
}