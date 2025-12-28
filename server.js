//dot env

const dotenv = require('dotenv')
dotenv.config()
//mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connecteed',()=>{
  console.log('connected to DB')
})
//express
const express = require('express')
const app = express()

//middleWare

const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.json())

app.listen (3000,()=>{
  console.log(something)
})
