import express from 'express'
import { loginUser } from '../controller/login.controller.js'

const router = express.Router()

router.post("/login" , loginUser)

export default router