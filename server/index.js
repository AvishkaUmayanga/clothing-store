import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import cookieParser from "cookie-parser";
import 'dotenv/config'
import {router as adminRoutes} from './routes/adminRoutes.js'
import { router as userRoutes } from "./routes/userRoutes.js"
const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://clothing-store-ecru.vercel.app');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(express.json({ limit: '50mb' }))
app.use(cookieParser())

const PORT = process.env.PORT
const URL = process.env.MONGODB_URL

mongoose.connect(URL).then(()=>{
    console.log('Connected')
}).catch((err)=> console.log('DB error', err))

app.listen(PORT, ()=>{
    console.log(`app is running port ${PORT}`)
})

app.use(adminRoutes)
app.use(userRoutes)