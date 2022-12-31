
/* const isAuth = require('../helpers/isAuth')
const isAdmin = require('../helpers/isAdmin') */
const generateToken = require('../helpers/generateToken')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler');
const { findOne } = require('../models/userModel');



//create new user
const createUser = asyncHandler(async (req, res) => {

        
   hashedPassword = bcrypt.hash(req.body.password, 10, (err, hashedPassword) =>{
        hashedPassword
    })

const newUser = new User({
  
   name: req.body.name, 
    email: req.body.email, 
    position: req.body.position, 
    role: req.body.role, 
    company: req.body.company, 
    location: req.body.location, 
    phone: req.body.phone,
    password: bcrypt.hashSync(req.body.password)     
    
    })
    const user = await newUser.save();
    res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user)
})
});


    

//get all users

const listUsers = asyncHandler (async(req, res) => {
 const users = await User.find({})
 res.send(users)
})

const deleteUser = asyncHandler(async(req, res)=> {
   const user = await User.findById(req.params.id);
   if(user){
    if(user.email === "admin@floralstory.com"){
        res.status(400).send({message: "Can\'t delete root user"});
        return;
    }
    await user.remove();
    res.send({message: "User Deleted"})
   } else {
    res.status(404).send({ message: "user not found"})
   }
})


//read & user profile 

const readProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.body._id);
    if(user){
        user.name = req.body.name || user.name,
        user.email = req.body.name || user.name,
        user.role = req.body.role || user.role,
        user.position = req.body.position || user.position,
        user.company = req.body.company || user.company,
        user.location = req.body.location || user.location,
        user.phone = req.body.phone || user.phone

        if(req.user.password){
            user.password = await bcrypt.hash(req.body.password, 10)
        }
    }
   
})


//get single user

const getSingleuser = asyncHandler( async(req, res)=> {
    const user = await User.findById(req.params._id);
    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.role = Boolean(req.body.role);
        const updatedUser = await user.save();
        res.send({message: "user Updated", user: updatedUser })
    } else {
        res.status(404).send({message: "user not found"})
    }
})


const update = async(req, res, next ) => {

 

}


const SignIn = asyncHandler(async(req, res)=> {
    const user = await User.findOne({email: req.body.email})
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send(user)
        }
    }
})


module.exports = {createUser, readProfile, deleteUser, update, getSingleuser, listUsers, SignIn}
