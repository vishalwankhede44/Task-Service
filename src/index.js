const express = require('express')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoutes')
const app = express()
const {database} = require('./config/database')
const cors = require('cors')

app.use(cors())

const PORT = process.env.PORT || 8080;

mongoose.connect(database.url)

app.use(express.json());

app.use('/tasks',taskRoutes)

app.get('/',(req,res)=>{
    console.log('task service is up and running');
    res.send('Done')
})

app.listen(PORT,()=>{
    console.log(`Task service is running on http://localhost:${PORT}`);
})