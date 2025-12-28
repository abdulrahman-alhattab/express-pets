// require mongoose
const mongoose = require('mongoose')
//create schema
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 0,
    required: true
  },
  breed: String
})

// initialize the mongoose model
const pet = mongoose.model('pet', petSchema)
//export the model
module.exports = pet
