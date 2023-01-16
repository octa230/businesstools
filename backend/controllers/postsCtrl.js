const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')


const feed = asyncHandler(async()=>{
 const posts = await Post.find()
 res.send(posts)
})

const createPost = asyncHandler(async(req, res)=> {
    const newPost = new Post({
        text: req.body.text,
        postedBy: req.body.postedBy,
        createdAt: req.body.createdAt,
    })
    const post = await newPost.save() 
    res.send({post})
})


const getUserPosts = asyncHandler(async()=>{
let posts = await Post.find({postedBy})
.populate('comments.postedBy', '_id name')
.populate('postedBy', '_id name')
.sort('-created')
.exec()

res.send(posts) 
})

module.exports = {feed, getUserPosts, createPost}