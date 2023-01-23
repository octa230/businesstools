const asyncHandler = require('express-async-handler')
const { get } = require('lodash')
const User = require('../models/userModel')
const Post = require('../models/postModel')


const feed = asyncHandler(async(req, res)=>{
 const posts = await Post.find()
 res.send(posts)
})

const createPost = asyncHandler(async(req, res)=> {
    const newPost = new Post({text, postedBy, createdAt} = req.body)
    const post = await newPost.save() 
    res.send(post)
})

const deletePost = asyncHandler(async(req, res) =>{
    const post = await Post.findByIdAndDelete(req.params.id)
    if(!post){
        res.status(404).send('Post Not Found')
    }else{
        res.send('Post deleted successfully')
    }

})

const addComment = asyncHandler(async(req, res)=> {
    const postID = req.params._id;
    const post = await Post.findById(postID) 

    const comment = {
        name: req.user.name,
        comment: req.body.comment
    }

    post.comments.push(comment);
    const TTcomments = post.reviews.reduce((a, c) => c.rating + a, 0) /
    post.reviews.length;

    const updatedPost = await post.save()
    res.status(201).send({
    message: 'Comment added Successfully',
    comment: updatedPost.comments[updatedPost.comments.length -1],
    TTcomments: post.comments.length 
    })
})

const getUserPosts = asyncHandler(async(req, res)=>{
let posts = await Post.find({postedBy: req.params.id})
.populate('comments.postedBy', '_id name')
.populate('postedBy', '_id name')
.sort('-created')
.exec()

res.send(posts) 
})

const myposts = asyncHandler(async(req, res)=> {
    const minePosts = await Post.findById({postedBy: req.params._id});
    res.send(minePosts)
})

module.exports = {feed, getUserPosts, createPost, myposts, deletePost}