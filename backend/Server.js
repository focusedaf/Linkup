import express from "express";
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import cors from 'cors'
import userRouter from "./routes/userRoute.js";
import { configDotenv } from "dotenv";

 
// import {wss} from "./webSocketHandler.js";
const app = express()
const port = process.env.PORT || 4000
connectDB();

//middlewares
app.use(cors());
app.use(express.json())
app.use(configDotenv)

//api endpoints
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("API WORKING")
})

//global catches => middlewares to catch errors
// wss(app)
app.listen(port, ()=>(console.log('Server started on PORT '+port)))