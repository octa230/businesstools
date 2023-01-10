const express = require('express')
const isAuth = require('../helpers/isAuth')




const{ 
    removeFollower,
    removeFollowing,
    addFollower,
    addFollowing,
} = require('../controllers/userCtrl')

const followRouter = express.Router()


followRouter.put('/unfollow/', isAuth, removeFollower)
followRouter.put('/follow', isAuth, addFollower)
followRouter.put('/removefollowing/', isAuth, removeFollowing)
followRouter.put('/addfollowing', addFollowing)

module.exports = followRouter