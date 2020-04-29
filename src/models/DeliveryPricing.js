const mongoose = require('mongoose')

const DeliveryPrincingSchema = mongoose.Schema({
  region: String,
  prince: Number
})

module.exports = mongoose.model('delivery_pricing', DeliveryPrincingSchema)
