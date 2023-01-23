const express = require("express");
const {
    createUser, 
    readProfile, 
    deleteUser, 
    getSingleuser, 
    SignIn, 
    listUsers
} = require ("../controllers/userCtrl");

const  {isAuth } = require("../helpers/isAuth");
const { isAdmin } = require("../helpers/isAuth");
const User = require("../models/userModel");


const UserRouter = express.Router()

UserRouter.post('/register', createUser)
UserRouter.get('/listusers/', listUsers)
UserRouter.delete('/deleteuser', isAuth, isAdmin, deleteUser);
UserRouter.get('/:_id', getSingleuser)
UserRouter.put('/profile', readProfile)
UserRouter.post('/signin', SignIn)



module.exports = UserRouter;