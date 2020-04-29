const Delivery = require('../models/DeliveryPricing')
module.exports = {

  async index (req, res) {
    const data = await Delivery.find()

    return res.json(data)
  },

  async update (req, res) {
    const { id } = req.params
    const { region, price } = req.body

    await Delivery.findOneAndUpdate({
      _id: id
    }, { region, price })

    return res.status(201).send()
  }
}
