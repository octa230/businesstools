import express from "express";
import cors from "cors"
import cookieParser from "cookieparser"
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import mongoose from 'mongoose'
import userRouter from "./routes/userRoutes.js";


const port = 5000;
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

app.listen(port, ()=>{
    console.log(`app running on ${port}`)
})