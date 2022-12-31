const express = require("express");
const {createUser, readProfile, deleteUser, update, getSingleuser, SignIn, listUsers} = require ("../controllers/userCtrl");
//const {SignIn, signout} = require('../controllers/authCtrl');
const { isAuth } = require("../helpers/isAuth");
const { isAdmin } = require("../helpers/isAdmin");
const User = require("../models/userModel");


const UserRouter = express.Router()

UserRouter.post('/register/', createUser)
UserRouter.get('/listusers/', listUsers)
UserRouter.delete('/delete user/', isAuth, isAdmin, deleteUser);
UserRouter.get('/api/users/:id/', isAuth, getSingleuser)
UserRouter.put('/profile/', isAuth, readProfile)
UserRouter.post('/signin', SignIn)

module.exports = UserRouter;