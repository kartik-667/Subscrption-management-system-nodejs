import express from 'express'

const userRouter=express.Router()

userRouter.get("/",(req,res)=>{
    res.status(200).json({msg:"default user route hai "})
})

userRouter.get("/users",(req,res)=>{
    res.status(200).json({msg:"gets all users"})

})

userRouter.get("/:id",(req,res)=>{
    const targetId=req.params.id
    res.send("data send from here")
})



export default userRouter