const express = require('express')

const followRouter = express.Router()


followRouter.put('/follow/', isAuth)
.addFollower()
.removeFollower()
followRouter.put('/unfollow/', isAuth)
.removeFollowing()
.addFollowing()