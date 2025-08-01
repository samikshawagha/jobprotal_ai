import express from "express";
import dotenv from "dotenv";
import connectdb from "./db/dbconnect.js";
import userrouter from './router/jobsrouters.js';
import jobrouter from './router/jobsrouters.js';
import jobapplictionrouter from './router/jobsapplicationrouters.js';
import cors from 'cors';
const app = express();
dotenv.config();//load env variables
connectdb(); 
//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/',(req,res)=>
    {
    res.status(200).send("server is running fine");
})
app.get('/api/home',(req,res)=>{
    res.status(200).send("Home page route checking");
})
//ROUTES
app.use('/api',userrouter)
app.use('/api',jobrouter)
app.use('/api',jobapplictionrouter)
let port=process.env.port || 5051;
app.listen(port, () =>
     {
    console.log(`Server running on http://localhost:${port}`);
});