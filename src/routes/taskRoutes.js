const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

router.post('/',taskController.craeteTask)

router.get('/', taskController.getAllTasks)

router.get('/:taskId',taskController.getTaskById)

router.put('/:taskId',taskController.updateTaskById)

router.delete('/:taskId',taskController.deleteTaskById)

module.exports = router