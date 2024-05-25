import express from 'express';
import userroute from './routes/user.js';
import taskroute from "./routes/task.js"
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';

config({
    path: "./data/config.env",
});

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use("/api/v1/user",userroute);
app.use("/api/v1/task",taskroute);

app.listen(process.env.PORT,(r)=>{
    console.log(` the port is running in ${process.env.NODE_ENV} mode`);
});

app.get("/",(req,res)=>{
    res.send("hi");
});
