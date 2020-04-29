const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken')
module.exports = async (req, res, next) => {
  const { access_token } = req.headers

  if (!access_token) return res.status(401).json({ message: 'access not permited' })

  try {
    const { _id } = await jwt.verify(access_token, 'rfBDemjiLSZyEjC')
    const admin = await Admin.findOne({
      _id
    })
    if (admin) {
      req.refresh_token = await jwt.sign({ _id: admin._id }, 'rfBDemjiLSZyEjC', { expiresIn: '1h' })
      next()
    }
  } catch (err) {
    res.status(401).json({ message: 'access not permited' })
  }
}
