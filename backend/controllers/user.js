import jwt from 'jsonwebtoken';
import { User } from '../db/schema/user.js';
import bcrypt from "bcrypt"
import 'dotenv/config'
import { ErrorHandler } from '../middleware/errormiddleware.js';

export const ragisterUser=async (req, res,next) => {
    try {
        const { email,name,username,password,dob } = req.body;

        if (!email || !name || !username || !password || !dob) 
            return next(new ErrorHandler('fill all require things',400))

        const user = await User.findOne({email});
        if (user) return next(new ErrorHandler("user already exist",400))
        
        const hashPassword = await bcrypt.hash(password,10)
        await User.create(
            {
                email,
                name,
                username,
                password:hashPassword,
                Date_Of_Birth: dob
            }
        )

        const authToken = jwt.sign({email}, process.env.JWT_SECRET)
        res.status(201).json(
            { 
                success:true,
                message: 'User registered successfully.', 
                authToken,
            }
        );

    } catch (error) {
        console.log(error)
    }
}


export const loginUser=async (req, res,next) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) return next(new ErrorHandler('fill all require things',400))

        const user = await User.findOne({email}).select("+password")
        if (!user)  return next(new ErrorHandler('User not found.',404))

        const isPassMatched = await bcrypt.compare(password,user.password);
        console.log(isPassMatched)
        if(!isPassMatched) return next(new ErrorHandler('incorrect password.',403))

        const authToken = jwt.sign({email}, process.env.JWT_SECRET)
        res.status(201).json(
        { 
            success:true,
            message: 'User login successfully.', 
            authToken,
        }
        );
    } catch (error) {
        console.log(error.message)
    }
}


export const getAlluserList=async(req,res,next)=>{
    try {
        console.log(54)
        const allUser = await User.find()
        console.log(4)
        res.status(200).json({
            success:true,
            message:"all user fected",
            data:allUser
        })
    } catch (error) {
        
    }
}