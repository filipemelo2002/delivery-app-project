const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken')
module.exports = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) return res.status(401).json({ message: 'access not permited' })

  const parts = authorization.split(' ')

  if (parts.length === 2) {
    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) return res.status(401).json({ message: 'invalid token' })

    try {
      const { _id } = await jwt.verify(token, 'rfBDemjiLSZyEjC')

      const admin = await Admin.findOne({
        _id
      })
      if (admin) {
        const refresh_token = await jwt.sign({ _id: admin._id }, 'rfBDemjiLSZyEjC', { expiresIn: '1h' })
        res.set('Refresh-Token', refresh_token)
        next()
      }
    } catch (err) {
      res.status(401).json({ message: 'token expired' })
    }
  } else {
    return res.status(401).json({ message: 'token error' })
  }
}
