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
  }

}
