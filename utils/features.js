import jwt from "jsonwebtoken";

export const sendcookies =(User,res,statuscode=200,message)=>{
    const token = jwt.sign({ _id: User._id }, process.env.JWT_SECRET);

    res.status(statuscode).cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 15 * 60 * 1000),
        sameSite:process.env.NOde_ENV==="Development"?"lax":"none",
        secure:process.env.NOde_ENV==="Development"?false:true
    }).json({
        success: true,
        message: message,
    });
}