import express from 'express'

const authRouter=express.Router()

authRouter.get("/",(req,res)=>{
    res.status(200).json({msg:"default auth route hai "})
})



export default authRouter