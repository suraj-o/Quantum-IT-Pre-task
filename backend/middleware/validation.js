import { OTP } from "../db/schema/otp.js";
import { otps } from "../utils/constant.js";

export const validateOtp=async(req, res, next)=>{
    try {
        const { phone, otp } = req.body;
    if (!phone || !otp) {
        return res.status(400).json({ message: 'Phone and OTP are required.' });
    }

    const otpData = await OTP.findOne({phone});

    if (!otpData || otpData.OTP !== otp || otpData.expiresAt < Date.now()) {
        return res.status(400).json({ message: 'Invalid or expired OTP.' });
    }

    // OTP is valid, proceed
    delete otps[phone];
    next();
    } catch (error) {
        console.log(error.message)
    }
}