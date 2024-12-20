import mongoose, { Schema } from "mongoose";

const schema = new Schema(
    {
        phone:{
            type:Number,
            require:[true,"please enter phone number"]
        },
        OTP:{
            type:Number,
            require:[true,"please enter OTP"]
        },
        expiresAt:{
            type:Date,
            default:Date.now()
        }
    },{
        timestamps:true
    }
)


export const OTP = mongoose.model("OTP",schema)