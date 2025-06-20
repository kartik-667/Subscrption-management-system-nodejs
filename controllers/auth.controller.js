import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

export const signup=async(req,res)=>{
    const {name,email,password}=req.body

    try {
        const existingUser=await User.findOne({email})

        if(existingUser){
            return res.status(400).json({msg:"User already exists"})
        }

        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)



        const newUser=await User.create({
            name,
            email,
            password:hashedPassword
        })


        const token=jwt.sign({userId:newUser._id},process.env.JWT_SECRET)
        res.cookie("token",token)


        

        return res.status(201).json({
            msg:"user created successfully",
            user:newUser,
            token

        })

        
    } catch (error) {
        res.status(500).json({msg:error.message})
        console.log(error.message);
        
        
    }

}

export const signin=async(req,res)=>{
    const {email,password}=req.body

    try {
        if(!email || !password){
            return res.status(400).json({msg:"email and password are required"})
        }

        const user=await User.findOne({email})

        if(!user){
            return res.status(401).json({msg:"Invalid credentials"})
        }

        const isPasscorrect=await bcrypt.compare(password,user.password)

        if(isPasscorrect){
            //means success
            const token=jwt.sign({userId:user._id},process.env.JWT_SECRET)
            res.cookie("token",token)
            
            // const tmp=req.cookies.token
            // console.log(tmp); //this is how to get cookie saved in browser
            

            return res.status(200).json({
                msg:"login successful",
                user,
                token
            })



        }


        
    } catch (error) {
        res.status(500).json({msg:error.message})
        console.log(error.message);
    }

}