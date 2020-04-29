const Delivery = require('../models/DeliveryPricing')
module.exports = {

  async index (req, res) {
    const data = await Delivery.find()

    return res.json(data)
  },
  async create (req, res) {
    const { region, price } = req.body

    const delivery = await Delivery.create({
      region, price
    })

    return res.json(delivery)
  },
  async update (req, res) {
    const { id } = req.params
    const { region, price } = req.body

    await Delivery.findOneAndUpdate({
      _id: id
    }, { region, price })

    return res.status(201).send()
  },
  async remove (req, res) {
    const { id } = req.params

    await Delivery.findOneAndDelete({
      _id: id
    })

    return res.status(201).send()
  }
}
