const express = require('express')
const {isAuth} = require('../helpers/isAuth')

const {feed, getUserPosts, createPost, myposts, deletePost} = require('../controllers/postsCtrl')




const postRouter = express.Router();


postRouter.get('/posts', feed)
postRouter.get('/userposts', isAuth, getUserPosts)
postRouter.get('/myPosts', isAuth, myposts)
postRouter.get('/posts/:userId', isAuth, getUserPosts)
postRouter.post('/posts/new', createPost)
postRouter.post('/posts/:_Id/comment')
postRouter.delete('/posts/delete/:_id', deletePost)



module.exports = postRouter