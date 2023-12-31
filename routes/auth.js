import { Router } from "express";
import Users from "../models/Users.js";
import { loginUser, logoutUser, registerUser } from "../controllers/authController.js";

const router= Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)

export default router;