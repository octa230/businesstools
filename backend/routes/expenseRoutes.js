const express = require('exress')
const{createExpense} = require('../controllers/ExpenseCtrl')


const expenseRouter = express.Router()

expenseRouter.post('/create-expense', createExpense)