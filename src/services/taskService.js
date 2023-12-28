const Task = require('../models/taskModel')

const createTask = async (taskData) => {
    const {taskName,taskDescription,dueDate} = taskData
    const newTask = new Task({taskName,taskDescription,dueDate,createdOn:Date.now()});
    const savedTask = await newTask.save();
    return savedTask
}

const getAllTasks = async () => {
    const tasks = await Task.find()
    console.log(tasks)
    return tasks
}

const getTaskById = async (taskId) => {
    return await Task.findById(taskId);
}

const updateTaskById = async (taskId,updatedTaskData) => {
    try{
        return await Task.findByIdAndUpdate(taskId,updatedTaskData,{new:true});
    }catch(error){
        console.log(error)
        return error.message
    }
}

const deleteTaskById = async (taskId) => {
    try{
        return await Task.findByIdAndDelete(taskId);
    }catch(error){

    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById
};