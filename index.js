
import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import subsRouter from './routes/subscription.route.js'
import connectDB from './config/db.config.js'
import cookieParser from 'cookie-parser'

const JWT_SECRET=process.env.JWT_SECRET

dotenv.config()
const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.get("/",(req,res)=>{
    res.send("home page: SUBSCRIPTION TRACKER API")
})

app.use("/api/v1/auth",authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/subscriptions',subsRouter)


app.listen(process.env.PORT,async ()=>{
    console.log("listening on given port");
    await connectDB()
    
})