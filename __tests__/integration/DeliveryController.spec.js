const app = require('../../src/app')
const request = require('supertest')
const { token } = require('./config')
describe('POST endpoints', () => {
  it('Create a new Region', async () => {
    const res = await request(app).post('/sessions').send({ user: 'admin123', password: 'admin123' })

    const token = res.body.access_token
    const update = await request(app).post('/delivery')
      .send({
        region: 'Jardim Jordão',
        price: 10
      })
      .set(
        'authorization', `Bearer ${token}`
      )

    expect(update.statusCode).toBe(200)
    console.log(token)
  })

  const ids = [{ _id: '5ea9b19c27b376187860f2a5', region: 'Jardim Jordão', price: 10, __v: 0 }, { _id: '5ea9b1c623f8861de080cf8d', region: 'Jardim Jordão', price: 10, __v: 0 }, { _id: '5ea9b1d12ee0bc372814d522', region: 'Jardim Jordão', price: 10, __v: 0 }]
  ids.forEach(element => {
    it('Should delete a region', async () => {
      const res = await request(app).delete('/delivery/' + element._id).set(
        'authorization', 'Bearer ' + token
      )
      expect(res.statusCode).toBe(201)
    })
  })

  it('Should list all regions', async () => {
    const res = await request(app).get('/delivery')
    expect(res.statusCode).toBe(200)
    console.log(res.body)
  })
})
