import User from '../models/userModel.js'
import extend from 'lodash'
import getErrMsg from '../helpers/dbErrorHandlers.js'




exports.create = async (req, res) => {
    const user = new User(req.body)
    try{
        await user.save()
        return res.status(200).json({
            message: "successfully signed up"
        })
    } catch (err){
        return res.status(400).json({
            error: errHandler.getErrMsg(err)
        }) 
    }

}

exports.list = async(req, res) => {
    try{
        let users = await User.find().select('name email updated created')
        res.json(users) 
    } catch (err) {
        return res.status(400).json({
            err: errHandler.getErrMsg(err)
        })
    }

}

exports.remove = async(req, res) => {
    try {
        let user = req.profile
        let deletedUser = await user.remove()
        deletedUser.hashed_password = undefined
        res.json(deletedUser)
    } catch (err) {
        return res.status('400').json({
            error: errHandler.getErrMsg(err)
        })
    }
}

exports.read = async(req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}


exports.userById = async(req, res) => {
    let user = await User.findById(id)
    try{
        if(!user)
        return res.status('400').json({
            error: 'User not Found'
        })
    req.profile = user
    next()
    } catch(err) {
        return res.status('400').json({
            error: 'couldn\'t retrive user'
        })
    }
}

exports.update = async(req, res, next ) => {

    try{
        let user = req.profile
        user = extend(user, req.body)
        user.updated = Date.now()
        await user.save()
        user.hashed_password = undefined
        user.salt = undefined
        res.json(user) 
    } catch {
        return res.status(400).json({
            error: errHandler.getErrMsg(err)
        })
    }

}



//module.exports ={create, remove, read, update, userById, list}
