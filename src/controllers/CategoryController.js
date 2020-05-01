const Category = require('../models/Category')
module.exports = {
  async index (req, res) {
    const category = await Category.find()
    return res.json(category)
  },

  async create (req, res) {
    const { title } = req.body

    const category = await Category.create({ title })

    return res.json(category)
  },
  async update (req, res) {
    const { id: _id } = req.params
    const { title } = req.body
    await Category.findOneAndUpdate({
      _id
    }, {
      title
    })

    return res.status(201).send()
  },
  async remove (req, res) {
    const { id: _id } = req.params
    await Category.findOneAndDelete({ _id })

    return res.status(201).send()
  }

}
