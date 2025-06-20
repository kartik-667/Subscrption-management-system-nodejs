import mongoose from 'mongoose'

const subscriptionSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true, 
        minLength:2,
        maxLength:40
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:String,
        enum:['active','cancelled','expired'],
        default:"active"

    },
    paymentMethod:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
        min:0,
        max:1000,
    },
    startDate:{
        type:Date,
        required:true
    },
    currency:{
        type:String,
        trim:true,
        enum:['USD','EUR','GBP','INR'],
        default:'INR'
    },
    frequency:{
        type:String,
        enum:['daily','weekly','monthly','yearly'],
    },
    category:{
        type:String,
        enum:['streaming','music','video','games','software','other','sports','news','social','education','health','finance','other'],
        required:true
    },
    startDate:{
        type:Date,
        required:true

    },
    renewalDate:{
        type:Date,
        required:true
    },
    

},{timestamps:true})



//this will run before data is saved to the database
subscriptionSchema.pre('save',(next)=>{
    if(!this.renewalDate){
        const renewalPeriods={
            daily:1,
            monthly:30,
            yearly:365,
            weekly:7
        }

        this.renewalDate=new Date(this.startDate)
        this.renewalDate.setDate(this.renewalDate.getDate()+renewalPeriods[this.frequency])
        
    }

    if(this.renewalDate < new Date()){
        this.status='expired'
    }

    next()

})

export default Subscription=mongoose.model('Subscription',subscriptionSchema)