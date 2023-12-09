import express from "express";
import mongoose from "mongoose";
import doenv from 'dotenv';
import morgan from "morgan";
import authRouter from "./routes/auth.js"
import cookieParser from "cookie-parser";

const app = express()
doenv.config()

const port = process.env.PORT || 8888

mongoose.connect(process.env.MOGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Mongodb connected'))

app.use(express.json())
app.use(cookieParser())
app.use(morgan('common'))

app.use('/auth',authRouter) 
 
app.listen(port, () => console.log('Server Started on',port))