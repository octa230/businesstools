const express = require('express')
const{createExpense, listByuser, updateExpense, deleteExpense} = require('../controllers/ExpenseCtrl')
const isAuth = require('../helpers/isAuth')
const generateToken = require('../helpers/generateToken')



const expenseRouter = express.Router()

expenseRouter.post('/create-expense', isAuth, createExpense)
expenseRouter.get('/myexpenses', isAuth, listByuser)
expenseRouter.put('/update-expense', isAuth, generateToken, updateExpense)
expenseRouter.delete('/delete-expense', isAuth, deleteExpense)


module.exports = expenseRouter