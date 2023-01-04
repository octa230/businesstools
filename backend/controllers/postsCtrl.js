const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')


const getAllPosts = asyncHandler(async()=>{
 const posts = await Post.find()
 res.send(posts)
})

const getUserPosts = asyncHandler(async()=>{
let posts = await Post.find({postedBy})
.populate('comments.postedBy', '_id name')
.populate('postedBy', '_id name')
.sort('-created')
.exec()

res.send(posts) 
})

module.exports = {getAllPosts, getUserPosts}