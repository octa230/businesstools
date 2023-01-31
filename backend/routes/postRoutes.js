const express = require('express')
const {isAuth} = require('../helpers/isAuth')

const {
    feed, 
    post,
    getUserPosts, 
    addComment, createPost, 
    deletePost
} = require('../controllers/postsCtrl')




const postRouter = express.Router();


postRouter.get('/posts', feed)
postRouter.get('/userposts', isAuth, getUserPosts)
postRouter.get('/posts/:userId', isAuth, getUserPosts)
postRouter.post('/posts/new', isAuth, createPost)
postRouter.post('/posts/:_id/comment', addComment)
postRouter.delete('/posts/delete/:_id', deletePost)
postRouter.get('/post/:_id', post)



module.exports = postRouter