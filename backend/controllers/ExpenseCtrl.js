const asyncHandler = require('express-async-handler')
const Expense = require('../models/expenseModel')
const extend = require('just-extend')
const { default: mongoose } = require('mongoose')


const createExpense = asyncHandler(async(req, res)=> {
req.body.recordedBy = req.auth._id
const expense = new Expense(req.body)
if(expense){
    await expense.save()
    res.send({message: 'expense recorded'})
} else {
    res.status(404).send({message: 'unable to record expense, try again'})
}
})

const listByuser = asyncHandler(async(req, res)=> {
    const firstDay = req.query.firstDay
    const lastDay = req.query.lastDay

    const expenses = await Expense.find({'$and': [{'inccuredOn': 
    {'$gte': firstDay, '$lte': lastDay}},
    {'recordedBy': req.auth._id}]}).sort('inccuredOn')
    .populate('recordedBy', '_id name')

    if(expenses){
        res.send(expenses)
    }else{
        res.status(404).send({message: 'Unable to list expense'})
    }
})


const updateExpense = asyncHandler(async(req, res)=> {
    const expense = req.expense
    expense = extend(expense, req.body)
    expense.updated = Date.now()
    if(expense){
        await expense.save()
    }else {
        res.status(404).send({message: 'expense updated successfully'})
    }

})

const deleteExpense = asyncHandler(async(req, res)=>{
    const expense = req.expense
    if(expense){
        await expense.remove()
    }else {
        res.status(404).send({message: 'failed to delete expense'})
    }
})

const monthlyExpense = asyncHandler(async(req, res)=> {
    const date = new Date(), y = date.getFullYear(), m = date.getMonth() 
    const firstDay = new Date(y, m, 1)
    const lastDay = new Date(y, m + 1, 0)
    const today = new Date()
    today.setUTCHours(0, 0, 0, 0)
    const tomorrow = new Date()
    tomorrow.setUTCHours(0, 0, 0, 0)
    tomorrow.setDate(tomorrow.getDate() +1)
    const yesterday = new Date()
    yesterday.setUTCHours(0, 0, 0, 0)
    yesterday.setDate(yesterday.getDate() -1)

    const currentPreview = await Expense.aggregate([
        {$facet: {month: [
            {
                $match:{inccuredOn:{'$gte': firstDay, '$lte': lastDay},
                recordedBy: mongoose.Types.ObjectId(req.auth,_id)}},
                {$group: {_id: 'currentMonth', totalSpent: {$sum: '$amount'}}}
        ], 
        today:[
            {
                $match: {inccuredOn: {$gte: today, $lt: tomorrow},
                recordedBy: mongoose.Types.ObjectId(req.auth._id) }},
            { $group: {_id: "today", totalSpent: {$sum: "$amount"}} },
        ],
        yesterday: [
            {$match: {inccuredOn:{$gte: yesterday, $lt: today},
            recordedBy: mongoose.Types.ObjectId(req.auth._id)
        }},
        {$group: {_id: "yesterday", totalSpent: {$sum: "amount"}}}
        ],
    }}
    ])
    const expensePreview = {
        month: currentPreview[0].month[0], 
        today: currentPreview[0].today[0],
        yesterday: currentPreview[0].yesterday[0] 
    }
    if(expensePreview){
        res.send(expensePreview)
    }
})

module.exports = {createExpense, listByuser, updateExpense, deleteExpense}