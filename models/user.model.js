import mongoose from 'mongoose'


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minLength:2,
        maxLength:40
        
    },
    email:{
        type:String,
        required:true,
        trim:true,
        maxLength:40
    },
    password:{
        type:String,
        required:true,
        minLength:3
    }
    
},{timestamps:true})

const User=mongoose.model("User",userSchema)
export default  User