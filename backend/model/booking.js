const mongoose=require("mongoose")

const BookingSchema=mongoose.Schema({
    eventDate:{
        type:Date,
        required:true,
        unique:true
    },
    eventType:{
        type:String,
        required:true
    },
    clientName:{
        type:String,
        required:true

    },
    guests:{
        type:Number,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    package:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }


},{timestamps:true})

module.exports=mongoose.model("Booking",BookingSchema)