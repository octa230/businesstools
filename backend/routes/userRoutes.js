const express = require("express");
const {create, read, remove, update, userById, list} = require ("../controllers/userCtrl");
const { hasAuth, signout, SignIn } = require("../controllers/authCtrl.js");

const UserRouter = express.Router()

UserRouter.post('/register/', create)
UserRouter.get('/listusers/', list)

UserRouter.route('/api/users/user:id')
    .get(SignIn, read)
    .put(SignIn, hasAuth, update)
    .delete(SignIn, hasAuth, remove)

UserRouter.param('userId', userById);

exports.default = UserRouter;