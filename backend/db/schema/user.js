import mongoose, { Schema } from "mongoose";

const schema = new Schema(
    {
        name:{
            type:String,
            require:[true,"please enter name"],
        },
        phone:{
            type:Number,
            require:[true,"please enter phone number"]
        },
        email:String
    },{
        timestamps:true
    }
)


export const User = mongoose.model("User",schema)