const express = require('express')
const isAuth = require('../helpers/isAuth')

const {feed, getUserPosts, createPost} = require('../controllers/postsCtrl')




const postRouter = express.Router();


postRouter.get('/posts', isAuth, feed)
postRouter.get('/posts/:userId', isAuth, getUserPosts)
postRouter.post('/posts/new', createPost)


module.exports = postRouter