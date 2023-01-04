const asyncHandler = require('express-async-handler')
const Expense = require('../models/expenseModel')


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

const listExpenses = asyncHandler(async(req, res)=> {
    const firstDay = req.query.firstDay
    const lastDay = req.query.lastDay
    const expenses = await Expense.find({'$and': [{'inccuredOn': 
    {'$gte': firstDay, '$lte': lastDay}},
    {'recordedBy': req.auth._id}]}).sort('inccuredOn')
    .populate('recordedBy')

    if(expenses){
        res.send(expenses)
    }else{
        res.status(404).send({message: 'Unable to list expense'})
    }
})


module.exports = createExpense