import express from "express";
import {deletejob, getalljobs, getjobbyid, postjob, updatejob} from '../controller/jobscontroller.js'
import { deleteModel } from "mongoose";
const routers=express.Router();

//routes
routers.post('/jobs/:adminid',postjob);
routers.get('/jobs',getalljobs);
routers.get('/jobs/:id',getjobbyid)
routers.put('/jobs/:id/:adminid',updatejob)
routers.put('/jobs/:id/:adminid',deletejob)
export default routers