import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import loginRouter from './routes/login.routes.js'
import dashBoardRouter from './routes/dashboard.routes.js';
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: "*", 
    credentials: true, 
}))
app.use(express.json())
app.use("/api/v1" , loginRouter)
app.use('/api/v1', dashBoardRouter)


app.listen(process.env.PORT , () => {
    connectDB()
    console.log(`Server started at http://localhost:${process.env.PORT}`)
})