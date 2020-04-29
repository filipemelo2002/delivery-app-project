const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
  order_id: String,
  ordered_itens: Array,
  total: Number,
  has_address: Boolean,
  address: {
    type: String,
    default: ''
  },
  client_whatsapp: String,
  finish_time: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('orders', OrderSchema)
