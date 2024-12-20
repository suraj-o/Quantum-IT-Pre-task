import jwt from 'jsonwebtoken';
import { generateOtp} from "../utils/constant.js";
import 'dotenv/config'
import { User } from '../db/schema/user.js';
import { OTP } from '../db/schema/otp.js';

export const ragisterUser=async (req, res) => {
    try {
        const { email, phone, name } = req.body;
        if (!phone || !name) {
            return res.status(400).json({ message: 'Phone and name are required.' });
        }

        const user = await User.findOne({phone})
        if (user) {
            return res.status(400).json({ message: 'User already exists with this phone number.' });
        }

        await User.create({name,phone,email})

        // Generate OTP
        const New_OTP = generateOtp();
        await OTP.create(
            {
                phone,
                OTP:New_OTP,
                expiresAt:Date.now()+ +(process.env.OTP_EXPIRATION_TIME)
            }
        );

        res.status(201).json({ message: 'User registered successfully.', OTP:New_OTP });
    } catch (error) {
        console.log(error.messa)
    }
}


export const loginUser=async (req, res) => {
    try {
        const { phone, name } = req.body;
        if (!phone || !name) {
            return res.status(400).json({ message: 'Phone and name are required.' });
        }

        const user = await User.findOne({phone})
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        if (user.name !== name) {
            return res.status(400).json({ message: 'Invalid name.' });
        }

        // Generate OTP
        const New_OTP = generateOtp();
        await OTP.create(
            {
                phone,
                OTP:New_OTP,
                expiresAt:Date.now()+ +(process.env.OTP_EXPIRATION_TIME)
            }
        );

        res.status(200).json({ message: 'OTP sent successfully.', OTP:New_OTP });
    } catch (error) {
        console.log(error.message)
    }
}

export const verifyOTP=(req, res) => {
    const { phone } = req.body;

    // Generate JWT
    const token = jwt.sign({ phone }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).cookie("_Auth",token).json({ message: 'OTP verified successfully.', token });
}