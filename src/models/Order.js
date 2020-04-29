const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
  order_id: String,
  ordered_itens: Array,
  total: Number,
  has_address: Boolean,
  address: String,
  client_whatsapp: String
})

module.exports = mongoose.model('orders', OrderSchema)
