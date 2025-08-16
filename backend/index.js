import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/connectDB.js'
import cookieParser from 'cookie-parser'
dotenv.config()
 
const port=process.env.PORT
const app=express() 
//middleware
app.use(express.json()) 
app.use(cookieParser())  

app.get("/",(req,res)=>{
     res.send("Hello from server LMS")
})

app.listen(port,()=>{
     console.log("server started");
     connectDb()
     
})