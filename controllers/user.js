import { user } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { sendcookies } from "../utils/features.js";

export const getalluser = async (req, res) => {};

export const register = async (req, res) => {
    try{
    console.log(req.body);
    const { name, email, password } = req.body;
    let User = await user.findOne({ email });

    if (User) {
        return res.status(404).json({ error: "user already exist" });
    }
    const hashedpass = await bcrypt.hash(password, 10);
User = await user.create({ name, email, password: hashedpass });
    
    sendcookies(User,res,201,"registered successfully");
}
catch(error)
{
    next(error);
}
};

export const login = async (req, res) => {
    const {email,password} = req.body;
    let User = await user.findOne({ email }).select("+password");
    
    if(!User)
        {
            return res.status(400).json({
                message:"user not found",
            });
        }
    
        const isMatch = await bcrypt.compare(password,User.password);
    
    if(!isMatch)
        {
            return res.status(400).json({
                message:"Incorrect Password",
            });
        }
    sendcookies(User,res,202,`login successful welcome ${User.name}`);
};
export const getdetails = async (req, res) => {


    res.status(201).json({
        success: true,
        user:req.User,
    })
};

export const logout = (req,res)=>{

    const {token}= req.cookies;
    if(!token)
        {
            return res.status(404).json({
                message:"login first",
            })
        }
    res.status(200)
    .cookie("token","",{expires : new Date (Date.now()),   sameSite:process.env.NOde_ENV==="Development"?"lax":"none",
    secure:process.env.NOde_ENV==="Development"?false:true})
    .json({
        success:true,
    })
};
