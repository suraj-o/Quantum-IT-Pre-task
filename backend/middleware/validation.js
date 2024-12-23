import jwt from "jsonwebtoken"
import { OTP } from "../db/schema/otp.js";
import "dotenv/config"
export const validateOtp=async(req, res, next)=>{
    try {
        const { phone, otp } = req.body;
    if (!phone || !otp) {
        return res.status(400).json({ message: 'Phone and OTP are required.' });
    }

    const otpData = await OTP.findOne({phone});

    if (!otpData || otpData.OTP !== Number(otp) || otpData.expiresAt < new Date(Date.now())) {
        return res.status(400).json({ message: 'Invalid or expired OTP.' });
    }

    await OTP.deleteOne({phone,OTP:otp})

    next();

    } catch (error) {
        console.log(error.message)
    }
}


export const authorizationVerify = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    console.log(authHeader)
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    const token = authHeader.split(' ')[1];
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      req.user = user;
      next();
    });
  };
