
import express from 'express'

const router=express.Router();
import {applyjob, getapplicationsoflogineduser} from '../controller/jobsapplicationcontroller.js';


router.post('/apply/:jobid/:userid',applyjob);
router.get('/apply/:userid',getapplicationsoflogineduser);
router.get('/apply/:userid',applyjob);



export default router
