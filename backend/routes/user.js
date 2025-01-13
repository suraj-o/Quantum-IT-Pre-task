import express from "express";
import {getAlluserList, loginUser,ragisterUser} from "../controllers/user.js";
import { authorizationVerify } from "../middleware/validation.js";

const router = express.Router()

router.post('/register',ragisterUser)
router.post('/login',loginUser)
router.get("/alluser",authorizationVerify,getAlluserList)

export default router