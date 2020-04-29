const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
module.exports = {

  async create (req, res) {
    const { user, password } = req.body

    if (!user || !password) return res.status(400).json({ message: 'missing parameters' })

    const admin = await Admin.findOne({
      user
    }).lean()

    if (!admin) return res.status(401).json({ message: 'user not found' })

    const verifyPass = bcrypt.compareSync(password, admin.password_hash)

    if (!verifyPass) return res.status(401).json({ message: 'wrong password' })

    const access_token = await jwt.sign({ _id: admin._id }, 'rfBDemjiLSZyEjC', { expiresIn: '1h' })
    admin.password_hash = undefined
    admin.access_token = access_token
    return res.json(admin)
  }
}
