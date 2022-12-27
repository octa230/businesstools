import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';


const SignIn =async(req, res)=>{
    let user = await User.findOne({"email": req.body.email})
    if(!user)
        return res.status("401").json({error: "user not found"})
    if(!user.hasAuth(req.body.password)){
        return res.status("401").send({error:"email and passoword"})
    }
    
    const token = jwt.sign({_id: user._id}, process.env.JWTSECRET)
    res.cookie('t', token, {expire: new Date( + 9999)})
}
const signout =(req, res)=>{}
const requireSignIn =()=>{}
const hasAuth =(req, res)=>{}


export{SignIn, signout, requireSignIn, hasAuth}