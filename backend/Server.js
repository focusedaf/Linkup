import express from "express";
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import cors from 'cors'


const app = express()
const port = process.env.PORT || 4000
connectDB();
app.use(cors());

app.listen(port, ()=>(console.log('Server started on PORT '+port)))