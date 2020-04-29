const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
  title: String
})

module.exports = mongoose.model('category', CategorySchema)
