const express = require('express')
const cors = require('cors')
require('dotenv').config()
const path=require('path');

const app = express()
PORT = process.env.PORT
const conn = require('./conn')
app.use(express.json())
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, '../frontend/build');
app.use(express.static(buildPath));
app.use(cors({
    "origin": "*", // Allow all origins
}))

const tripRoutes = require('./routes/trip.routes')

app.use('/trip', tripRoutes) // http://localhost:3001/trip --> POST/GET/GET by ID
app.use((req,res)=>{
    res.status(404).send('<h1>Page not found<h1>')
})

app.get('/hello', (req,res)=>{
    res.send('Hello World!')
})

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})