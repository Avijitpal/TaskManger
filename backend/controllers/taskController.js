const task = require('../models/taskModel')

const createTask = async(req,res)=>{
    try{ 
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

const getTasks = async(req,res)=>{
    try{
       const tasks = await Task.find();
       res.status(200).json(tasks);
    }catch(error){
       res.status(500).json({mesage:error.mesage})
    }
}

const getTask = async(req,res) =>{
  try{
   const taks = await Task.findById(req.params.id);
   if(!task){
    return res.status(404).json({message:'taks not found'})
   }
  }catch(error){ 
    res.status(500).json({message:error.message})
  }
}

const updateTask = async(req,res) =>{
    try{ 
     const task = await Task.findByIdAndUpdate(req.params.id,req.body,{
        new :true,
        runValidators:true
     })
     if(!task){
        return res.status(404).json({message:'Task not found'})
     }
     res.status(200).json(task)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

const deleteTask = async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            res.status(200).json({messge:'task not found'})
        }
        res.status(200).json({message:'Task deleted successfully'})
    }catch(error){
        res.status(500).json({meesage:error.meesage})
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}