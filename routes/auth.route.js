import express from 'express'
import { signin, signup } from '../controllers/auth.controller.js'

const authRouter=express.Router()

authRouter.get("/",(req,res)=>{
    res.status(200).json({msg:"default auth route hai "})
})

authRouter.post("/signup",signup)

authRouter.post("/signin",signin)

export default authRouter