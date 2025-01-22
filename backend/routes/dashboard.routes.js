import express from 'express';
import { getAllUser, getuserDataByName, updateUser } from '../controller/dashboard.controller.js';

const router = express.Router()


router.get('/getall', getAllUser)
router.get("/getbyname/:name" , getuserDataByName)
router.put("/update" , updateUser)

export default router;
