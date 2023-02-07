const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Post = require('../models/postModel')


const feed = asyncHandler(async(req, res)=> {
 const posts = await Post.find()
 res.send(posts)
})

const createPost = asyncHandler(async(req, res)=> {
    
    const newPost = new Post({text, postedBy, createdAt, user} = req.body)
    const post = await newPost.save() 
    res.send(post)
})

const deletePost = asyncHandler(async(req, res)=> {
    const postID = req.params._id
    const post = await Post.findByIdAndDelete(postID)
    if(post){
        await post.remove()
        return
    }else{
        res.send({message: 'post Deleted Successfully'})
    }

})

const addComment = asyncHandler(async(req, res)=> {
    const postID = req.params._id;
    const post = await Post.findById(postID) 

    const comment = {   
        postedBy: req.body.postedBy, 
        comment: req.body.comment,
        name: req.body.name
    }

    post.comments.push(comment);
    /* const TTcomments = post.reviews.reduce((a, c) => c.rating + a, 0) /
    post.reviews.length; */

    const updatedPost = await post.save()
    res.status(201).send({
    message: 'Comment added Successfully',
    TTcomment: updatedPost.comments[updatedPost.comments.length -1],
    
    })
})

const getUserPosts = asyncHandler(async(req, res)=>{
let posts = await Post.find({postedBy: req.params._id})
.populate('comments.postedBy', '_id name')
.populate('postedBy', '_id name')
.sort('-created')
.exec()

res.send(posts) 
})

const getPost = asyncHandler(async(req, res)=> {
    const postID  = req.params.id
    const post = await Post.findById(postID);
    if(post){
        res.send(post)
    }else{
        res.status(404).send({message: 'unabale to find post'})
    }
})


module.exports = {getPost, feed, getUserPosts, addComment, createPost,deletePost}