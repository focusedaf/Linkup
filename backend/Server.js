import express from "express";
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import cors from 'cors'
import userRouter from "./routes/userRoute.js";


const app = express()
const port = process.env.PORT || 4000
connectDB();

//middlewares
app.use(cors());
app.use(express.json())

//api endpoints
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.listen(port, ()=>(console.log('Server started on PORT '+port)))