const mongoose = require('mongoose')

const expenseModel = new mongoose.Scheme({

    title:{type: String, required: true, trim: true},
    image:{type: String, required: true},
    otherimages:[String],
    category:{type: String, required: true, trim: true},
    amount:{type: Number, required: true, min: 0},
    inccuredOn: {type: Date, default: Date.now},
    notes: {type: String, trim: true},
    recordedBy: {type: mongoose.ObjectId, ref: 'User'},
    updated: Date,
    createdAt: {type: Date, default: Date.now}
})


const Expense = mongoose.Model('Expense', expenseModel)
module.exports = Expense