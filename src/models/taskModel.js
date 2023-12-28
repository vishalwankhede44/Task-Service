const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        required:true
    },
    taskDescription:{
        type:String,
    },
    dueDate:{
        type:Date
    },
    createdOn:{
        type:Date
    }
});

const Task = mongoose.model('Task',taskSchema,'tasks');
module.exports = Task;

