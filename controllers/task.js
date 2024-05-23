import {task} from "../models/task.js"

export const newTask=async (req,res,next)=>{
    try{
    const {title,description}=req.body;

    await task.create({
        title,description,
        user : req.User,
    });

    res.status(200).json({
        success:true,
        message:"task added succesfully",
    })
}
    catch(error){
        next(error);
    }
};

export const getTask=async (req,res)=>{
    try{
    const userid= req.User._id;
    const tasks=await task.find({user : userid});

    res.status(200).json({
        success:true,
        message:"this is yur task id",
        tasks,
    });

}
catch(error)
{
    next(error);
}
};

export const updateTask= async(req,res)=>{
    try{
    const Task = await task.findById(req.params.id);
    if(!Task) return res.status(404).json({success:false,message:"no task",});
    Task.isCompleted=!Task.isCompleted;
    await Task.save();

    res.status(200).json({
        success:true,
        message:"task updated successfully",
    });
}
catch(error)
{
    next(error);
}
};

export const deleteTask=async (req,res)=>{
    try{
    const Task =task.findById(req.params.id);
    if(!task) return res.status(404).json({success:false,message:"no task",});
    await task.deleteOne();
    res.status(200).json({
        success:true,
        message:"task deleted successfully",
    });
}
catch(error)
{
    next(error);

}
}