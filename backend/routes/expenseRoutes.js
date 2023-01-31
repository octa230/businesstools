const express = require('express')
const{createExpense, listByuser, updateExpense, deleteExpense} = require('../controllers/ExpenseCtrl')
const {isAuth} = require('../helpers/isAuth')
const {token} = require('../helpers/isAuth')



const expenseRouter = express.Router()

expenseRouter.post('/create-expense', isAuth, createExpense)
expenseRouter.get('/myexpenses', isAuth, listByuser)
expenseRouter.put('/update-expense', isAuth, token, updateExpense)
expenseRouter.delete('/delete-expense', isAuth, deleteExpense)


module.exports = expenseRouter