const Category = require('../models/Category')
module.exports = {
  async index (req, res) {
    const category = await Category.find()
    return res.json(category)
  }

}
