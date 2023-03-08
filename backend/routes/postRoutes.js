const express = require('express')
const {isAuth} = require('../helpers/isAuth')

const {
    feed, 
    getPost,
    getUserPosts, 
    addComment, createPost, 
    deletePost,
} = require('../controllers/postsCtrl')




const postRouter = express.Router();


postRouter.get('/posts/', feed)
postRouter.get('/userposts', isAuth, getUserPosts)
postRouter.get('/posts/:userId', getUserPosts)
postRouter.post('/posts/new', createPost)
postRouter.post('/post/:id/comment', addComment)
postRouter.delete('/delete/post/:id', deletePost)
postRouter.get('/post/:Id', getPost)



module.exports = postRouter