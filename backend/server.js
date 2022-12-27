//import cors from "cors"
//import cookieParser from "cookieparser"
//import dotenv from 'dotenv';
//import bodyParser from "body-parser";
//import mongoose from 'mongoose'
//import userRouter from "./routes/userRoutes.js";

const cors = require('cors')
const cookieParser = require('cookieparser')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')


const port = 8000;
const app = express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/api/users/', userRouter)



mongoose.connect(process.env.mongodb_uri)
.then(()=>{
    console.log('connected to db')
})
.catch((err) =>{
    console.log(err.message)
})

app.use((err, req, res, next) => {
    if(err.name === 'UnauthorizedError'){
        res.status(401).json({"error": err.name + ":" + err.message})
    } else if (err){
        res.status(400).json({"error": err.name + ":" +  err.message})
        console.log(err)
    }
})

app.listen(port, ()=>{
    console.log(`app running on ${port}`)
})