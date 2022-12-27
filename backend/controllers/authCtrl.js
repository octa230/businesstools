//import User from '../models/userModel.js';
//import jwt from 'jsonwebtoken';
//import { expressjwt, ExpressJwtRequest } from "express-jwt";

const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
//const jwt = require('express-jwt')

const SignIn =async(req, res)=>{
    try{

    let user = await User.findOne({"email": req.body.email})
    if(!user)
        return res.status("401").json({error: "user not found"})
    if(!user.hasAuth(req.body.password)){
        return res.status("401").send({error:"email and passoword"})
    }
    
    const token = jwt.sign({_id: user._id}, process.env.JWTSECRET)
    res.cookie('t', token, {expire: new Date( + 9999)})
    return res.json({
        token,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email
        }
    })

    } catch(err){
        res.status('401').json({error: "could\'nt sign in"})
    }
}    
const signout =(req, res)=>{
    res.clearCookie('t')
    res.status(200).json({
        message: "signed out"
    })
}
const requireSignIn = jwt.verify({
    secret: process.env.JWTSECRET,
    userProperty: 'auth'
})
const hasAuth =(req, res, next)=>{
    const authorized = req.profile && req.auth
    && req.profile._id == req.auth._id

    if(!(authorized)){
        return res.status('403').json({
            error: "User Not Authorised"
        })
    }
    next()
}


module.exports = {SignIn, signout, requireSignIn, hasAuth}