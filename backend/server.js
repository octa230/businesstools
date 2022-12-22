import express from "express";
import mongoose from 'mongoose'
import userRouter from "./routes/userRoutes.js";


const app = express()
app.dotenv.config()



app.use('/', userRouter)



mongoose.connect(process.env.mongodb_uri, ()=>{
    console.log('successfully connected to DB')
})

app.listen(port, ()=>{
    console.log(`app running on ${port}`)
})