import mongoose from "mongoose";
import { config } from "dotenv";

config({
    path: "./data/config.env",
});

export const usedata =()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"api_todo",
    }).then((c)=>{
        console.log(`database is connected to ${c.connection.host}`);
    }).catch((e)=>{
        console.log(e);
        process.exit(1);
    
    });
}