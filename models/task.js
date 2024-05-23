import { usedata } from "../data/database.js";
import mongoose from "mongoose";
usedata();

const apischema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});


export const task=mongoose.model("task",apischema);

