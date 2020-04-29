const crypto = require('crypto')
const Order = require('../models/Order')
module.exports = {
  async index (req, res) {
    const order = await Order.find()

    return res.json(order)
  },
  async create (req, res) {
    const data = req.body
    const order_id = crypto.randomBytes(3).toString('HEX')

    data.order_id = order_id

    const order = await Order.create(data)

    return res.json(order)
  },
  async update (req, res) {
    const { finish_time } = req.body
    const { id } = req.params

    await Order.findByIdAndUpdate({
      _id: id
    }, {
      finish_time
    })

    return res.status(201).send()
  }
}
