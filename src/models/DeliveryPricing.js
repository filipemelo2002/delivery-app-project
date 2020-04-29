const mongoose = require('mongoose')

const DeliveryPrincingSchema = mongoose.Schema({
  region: String,
  price: Number
})

module.exports = mongoose.model('delivery_pricing', DeliveryPrincingSchema)
