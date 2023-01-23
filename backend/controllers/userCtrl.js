

const {generateToken} = require('../helpers/isAuth')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler');




//create new user
const createUser = asyncHandler(async (req, res)=> {

const newUser = new User({
    
    name: req.body.name, 
    email: req.body.email, 
    position: req.body.position, 
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
    location: user.location,
    company: user.company,
    position: user.position,
    createdAt: user.createdAt,
    phone: user.phone,
    token: generateToken(user)
})
});


    

//get all users

const listUsers = asyncHandler (async(req, res)=> {
 const users = await User.find({})
 res.send(users)
})

const deleteUser = asyncHandler(async(req, res)=> {
   const user = await User.findById(req.params._id);
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

const readProfile = asyncHandler(async(req, res)=> {
    const profileId = req.params._id;
    const user = await User.findById(profileId);
    if(user){
        res.send(user)
    }else{
        res.status(404).send({message: 'profile unavailable' })
    }
   
})


//get single user

const getSingleuser = asyncHandler( async(req, res)=> {
    const user = await User.findById(req.params._id)
    .populate('following', '_id name')
    .populate('followers', '_id name')

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



const SignIn = asyncHandler(async(req, res)=> {
    const user = await User.findOne({email: req.body.email})
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                id: user._id,
                name: user.name,
                email: user.email,
                location: user.location,
                company: user.company,
                phone: user.phone,
                position: user.position,
                createdAt: user.createdAt,  
                token: generateToken(user)
            })
            return
        }
    }
    res.status(401).send({ message: "Invalid email or password" });

})


const addFollowing = asyncHandler(async(req, res, next )=> {
const user = await User.findByIdAndUpdate
(req.body._id, {$push: {following: req.body.followId}})
 if(user){
    res.send(user)
 } else {
    res.status(400).send({message: 'could\'nt add followers'})
 }
})


const addFollower = asyncHandler(async(req, res)=> {
    const result = await User.findByIdAndUpdate
    (req.body.followId, {$push: {followers: req.body._id}}, {new: true})
    .populate('following', '_id name')
    .populate('followers', '_id name')
    if(result){
        result.password = undefined
        res.send(result)
    } else {
        res.status(400).send({message: 'could\'t retrive followers'})
    }
})

const removeFollowing = asyncHandler(async(req, res)=> {
    const user = await User.findByIdAndUpdate(req.body._id,
        {$push: {following: req.body.unfollowId}}
    ) 
    if(user){
        res.send(user)
    } else {
        res.status(404).send({message: 'could\'t remove following'})
    }

})

const removeFollower = asyncHandler(async(req, res)=> {
const user = await User.findByIdAndUpdate(req.body.unfollowId,
    {$pull: {followers: req.body._id}},
    {new: true}
    )
    .populate('following', '_id name')
    .populate('following', '_id name')

    if(user){
        password = undefined,
        res.send(user)
    } else {
        res.status(404).send({ message: 'couldn\'t remove user'})
    }
})

module.exports = {
    createUser, readProfile, 
    deleteUser, addFollowing, 
    getSingleuser, listUsers, 
    SignIn, addFollower,
    removeFollowing, removeFollower
}
