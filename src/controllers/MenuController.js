const MenuOption = require('../models/MenuOption')

module.exports = {

  async index (req, res) {
    const query = req.query.category
    let itens = []
    if (query) {
      try {
        itens = await MenuOption.find({ category: query }).populate('category')
      } catch (err) {
        itens = []
      }
    } else {
      itens = await MenuOption.find().populate('category')
    }

    return res.json(itens)
  },
  async create (req, res) {
    const { title, description, img_url, price, category } = req.body

    const item = await MenuOption.create({
      title,
      description,
      img_url,
      price,
      category
    })

    return res.json(item)
  },

  async update (req, res) {
    const { id: _id } = req.params
    const { title, description, img_url, price } = req.body
    await MenuOption.findByIdAndUpdate({
      _id
    }, {
      _id, title, description, img_url, price
    })

    return res.status(201).send()
  },
  async delete (req, res) {
    const { id: _id } = req.params
    await MenuOption.findOneAndDelete({ _id })

    return res.status(201).send()
  }
}
