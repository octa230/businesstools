const express = require('express')
const isAuth = require('../helpers/isAuth')

const {getAllPosts, getUserPosts} = require('../controllers/postsCtrl')




const postRouter = express.Router();


postRouter.get('/posts', isAuth, getAllPosts)
postRouter.get('/posts/:userId', isAuth, getUserPosts)


module.exports = postRouter