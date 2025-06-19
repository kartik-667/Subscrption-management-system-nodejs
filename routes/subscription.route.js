import express from 'express'

const subsRouter=express.Router()

subsRouter.get("/",(req,res)=>{
    res.status(200).json({msg:"default subs route hai ye "})
})



export default subsRouter