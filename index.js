
import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import subsRouter from './routes/subscription.route.js'
const app=express()

dotenv.config()

app.get("/",(req,res)=>{
    res.send("home page: SUBSCRIPTION TRACKER API")
})

app.use("/api/v1/auth",authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/subscriptions',subsRouter)


app.listen(process.env.PORT,()=>{
    console.log("listening on given port");
    
})