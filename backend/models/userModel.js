const mongoose = require('mongoose')

const UserModel = new mongoose.Schema({
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
        type: String,
        default: 'employee',
    },
    position:{
        type: String,
        required: [true, 'please add your position']
    },
    email:{
        type: String,
        trim: true,
        required:[true, 'Please add Email'],
        unique: 'email already exists',
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

    hashed_password:{
        type: String,
        required: [true, 'Please add password']
    },
    salt: String

})

UserModel
    .virtual('password')
    .set((password) => {
        this.password = password
        this.salt = this.makeSalt()
        this.hashed_password = this.encryptPassword(password)         
    }) 
    .get(()=> {return this._password})

UserModel.methods = {
    authenticate:(plainText)=> {
        return this.encryptPassword(plainText) === this.hashed_password
    },

    encryptPassword:(password)=>{
        if(!password) return ''
        try {
            return crypto
            .createHmac('sha1', this.salt)
            .update(password)
            .digest('hex')
        } catch (err){
            return ''
        }
    },
    makeSalt:()=> {
        return Math.round((new Date).valueOf() * Math.random()) + ''
    },
}

UserModel.path('hashed_password').validate((v)=>{
    if(this.password && this._password.length < 6){
        this.invalidate('password', 'password must be atleast 7 characters.')
    }
    if(this.isNew && !this._password){
        this.invalidate('password', 'password is required')
    }
}, null)





exports.default = mongoose.model('User', UserModel)