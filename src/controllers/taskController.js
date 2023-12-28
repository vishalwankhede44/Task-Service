
const { createTask, getAllTasks,getTaskById, updateTaskById, deleteTaskById } = require("../services/taskService")

const taskController = {
    craeteTask : async (req,res) =>{
        try{
            const savedTask = await createTask(req.body);
            res.status(201).json(savedTask)
        }catch(error){
            console.error(error)
            res.status(500).json({error:'Internal Server Error'})
        }
    },         
    getAllTasks: async (req,res) => {
        try{
            const response = await getAllTasks();
            res.status(200).json(response);
        }catch{
            console.log(error);
            res.status(500).json({error:'Internal Server Error'})
        }
    },
    getTaskById: async (req,res) => {
        try{
            const taskId = req.params.taskId;
            const task = await getTaskById(taskId)
            if(!task){
                return res.status(404).json({error:'Task Not Found'})
            }
            return res.status(200).json(task);
        }catch{
            // console.log(error);
            res.status(404).json({error:'Task Not Found'})
        }
    },
    updateTaskById: async (req,res) => {
        try{
            const taskId = req.params.taskId;
            const updatedTaskBody = {
                                ...req.body,
                                updatedOn: Date.now()
                            }
            console.log(updatedTaskBody)
            const task = await updateTaskById(taskId,updatedTaskBody)
            return res.status(200).json(task);
        }catch{
            // console.log(error);
            res.status(404).json({error:'Task Not Found'})
        }
    },
    deleteTaskById: async (req,res) => {
        try{
            const taskId = req.params.taskId;
            const task = await deleteTaskById(taskId)
            return res.status(200).json(task)
        }catch(error){
            res.status(500).json({error:'Internal Server Error'})
        }
    }
}

module.exports = taskController