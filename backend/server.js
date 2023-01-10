
const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')
const productRouter = require('./routes/productRoutes')
const followRouter = require('./routes/followRoutes')
const expenseRouter = require('./routes/expenseRoutes')


dotenv.config()
const app = express()



app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api/users/', userRouter)
app.use('/api/feed/', postRouter)
app.use('/api/products/', productRouter)
app.use('/api/follow/',followRouter )
app.use('/api/expenses/', expenseRouter)



mongoose.connect(process.env.mongodb_uri)
.then(()=> {
    console.log('connected to db')
})
.catch((err)=> {
    console.log(err.message)
})

const CURRENT_WORKING_DIRECTORY = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIRECTORY, 'dist')))

app.use((err, req, res, next) => {
    if(err.name === 'UnauthorizedError'){
        res.status(401).json({"error": err.name + ":" + err.message})
    } else if (err){
        res.status(400).json({"error": err.name + ":" +  err.message})
        console.log(err)
    }
})

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`app running on ${port}`)
})