import express from "express";
import connectDB from "./config/mongodb.js";


const app = express()
const port = process.env.PORT || 4000
connectDB();

app.listen(port, ()=>(console.log('Server started on PORT '+port)))