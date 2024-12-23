import mongoose from "mongoose"

export const connectDB=async()=>{
    try {
        const connection = (await mongoose.connect("mongodb://root:asigner@localhost:27017/")).connection
        console.log("db connected to",connection.host)
    } catch (error) {
        console.log("got error while conneting db")
    }
}