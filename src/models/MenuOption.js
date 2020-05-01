const mongoose = require('mongoose')
const { Schema } = mongoose
const MenuOptionSchema = mongoose.Schema({
  title: String,
  img_url: String,
  description: String,
  price: Number,
  category: [{ type: Schema.Types.ObjectId, ref: 'category' }]
})

module.exports = mongoose.model('menuoption', MenuOptionSchema)
