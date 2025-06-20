import mongoose from 'mongoose'


const connectDB=async ()=>{
    try {
        const res=await mongoose.connect(process.env.MONGO_URI)
        if(res) console.log("DB connected");
        
        
        
    } catch (error) {
        console.log("some error occured -> ",error);
        
        
    }
}

export default connectDB