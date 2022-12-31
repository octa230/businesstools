const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserModel = new mongoose.Schema(
{
    name:{
        type: String,
        trim: true,
        required: 'Name is required', 
    },
    company:{
        type: String,
        required: 'Company is required'
    },
    location:{
        type: String,
    },
    role:{
        type: Boolean,
        default: false,
        required: true,
    },
    position:{
        type: String,
        required: [true, 'please add your position']
    },
    email:{
        type: String,
        trim: true,
        required:[true, 'Please add Email'],
        unique: [true, 'email already exists'],
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    phone:{
        type: String,
        required: [true, 'Please add contact']
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updated: Date,

    password:{
        type: String,
        required: [true, 'please add password']
    },
},
{
    timestamps: true
}

)

const User = mongoose.model('User', UserModel)
module.exports = User