import express from "express";
import { user } from "../models/user.js";
import { isAuthenticate } from "../middleware/auth.js";
import { getalluser,register,login,getdetails,logout } from "../controllers/user.js"

const router = express.Router();

router.get("/all",getalluser);
router.post("/register",register);
router.post("/login",login);
router.get("/me",isAuthenticate,getdetails);
router.get("/logout",logout);

export default router;