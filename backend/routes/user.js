import express from "express";
import {loginUser,ragisterUser,verifyOTP} from "../controllers/user.js";
import { validateOtp } from '../middleware/validation.js';

const router = express.Router()

router.post('/register',ragisterUser)
router.post('/login',loginUser)
router.post("/verify-otp",validateOtp,verifyOTP)

export default router