import mongoose, { Schema } from "mongoose";

const schema = new Schema(
    {
        name:{
            type:String,
            require:[true,"please provide name"],
        },
        username:{
            type:String,
            require:[true,"please provide username"],
        },
        email:{
            type:String,
            require:[true,"please provide phone number"]
        },
        password:{
            type:String,
            select:false,
            require:[true, "please provide password"]
        },
        Date_Of_Birth:{
            type:Date,
            require:[true,"please provide the date-of-birth"]
        }

    },{
        timestamps:true
    }
)


export const User = mongoose.model("User",schema)