const mongoose = require('mongoose')
const {Schema} = require('mongoose')
 
const commentSchema = new mongoose.Schema({
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
    postedBy: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
    },
    createdAt:{
        type: Date,
        default: Date.now
     },
     comments:[commentSchema]
}) 

const Post = mongoose.model('Post', postModel)
module.exports = Post