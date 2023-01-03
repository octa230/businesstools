const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    text: String,
    createdAt: {type: Date, default: Date.now},
    postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
},
{
    timestamps: true
}
)


const postModel = new mongoose.Schema({

    text:{
        type: String,
        required: [true, 'Add text to Make post ']
    },
    photo:{
        data: Buffer,
        contentType: String
    },
    postedBy:{
        type: mongoose.Schema.ObjectId, 
        ref: 'User'
     },
     createdAt:{
        type: Date,
        default: Date.now
     },
     comments:[postSchema]
}) 

const Post = mongoose.model('Post', postModel)
module.exports = Post