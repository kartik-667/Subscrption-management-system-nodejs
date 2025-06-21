import User from '../models/user.model.js'


export const getAllUsers=async(req,res)=>{
    try {
        const users=await User.find().select("-password") //return array of users
        res.status(200).json({users})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const  getUserbyID=async (req,res)=>{
    const userid=req.params.id
    try {
        const user=await User.findOne({_id:userid}).select("-password")
        if(!user){
            return res.status(404).json({error:"user not found"})
        }

        return res.status(201).json(user)
        
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}
