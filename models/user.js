import { usedata } from "../data/database.js";
import mongoose from "mongoose";
usedata();

const apischema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },email:{
        type :String,
        unique:true,
        required:true,
    },password:{
        type:String,
        select:false,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});


export const user=mongoose.model("user",apischema);

