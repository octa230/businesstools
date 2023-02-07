const mongoose = require('mongoose')

 
const commentSchema = new mongoose.Schema({
    comment: {type: String},
    createdAt: {type: Date, default: Date.now},
    postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
    name: {type: String}
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
    user:{
        type: String,
        required: true
    },
    photo:{
        data: Buffer,
        contentType: String
    },
    postedBy: { type: mongoose.Schema.ObjectId, required: true, ref: 'User'},
    createdAt:{
        type: Date,
        default: Date.now,
        get:(createdAt)=>{
            return createdAt.toDateString()
        }
     },
     comments:[commentSchema]
}) 

const Post = mongoose.model('Post', postModel)
module.exports = Post