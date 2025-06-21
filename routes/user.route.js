import express from 'express'
import User from '../models/user.model.js'
import { getAllUsers, getUserbyID } from '../controllers/user.controller.js'
const userRouter=express.Router()
import { authorise } from '../middleware/authorise.js'

userRouter.get("/",(req,res)=>{
    res.status(200).json({msg:"default user route hai "})
})

userRouter.get("/users",getAllUsers)

userRouter.get("/:id",authorise,getUserbyID)



export default userRouter