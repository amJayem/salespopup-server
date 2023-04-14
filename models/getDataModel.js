const mongoose = require('mongoose')

// Mongoose Schema
const getDataSchema = new mongoose.Schema({
  shop: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  }
})

// Mongoose Model
module.exports = mongoose.model('spu', getDataSchema)
