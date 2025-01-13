import express from "express";
import userRouter from "./routes/user.js";
import cors from "cors"
import { authorizationVerify } from "./middleware/validation.js";
import { connectDB } from "./db/db.js";
import { ErrorMiddleware } from "./middleware/errormiddleware.js";
import morgan from "morgan";

const app = express();;

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"))

app.use(cors({
    origin:"*",
    methods:["GET", "POST"],
    allowedHeaders:['Content-Type', 'Authorization']
}))


app.get("/",authorizationVerify,(req,res,)=>{
    res.status(201).json({
        success:true,
        message:"you loged in successfully"
    })
});
app.use("/user",userRouter);
app.use(ErrorMiddleware)


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
