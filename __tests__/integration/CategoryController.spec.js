const request = require('supertest')
const app = require('../../src/app')
const { token } = require('./config')
describe('Categories', () => {
  it('Should create a new category', async () => {
    const res = await request(app)
      .post('/categories')
      .send({ title: 'Bebidas' })
      .set('authorization', 'Bearer ' + token)
    expect(res.statusCode).toBe(200)
  })

  it('Should create a new category', async () => {
    const res = await request(app)
      .put('/categories/5eac5523e1349f0e9089bddf')
      .send({ title: 'Hamburguers' })
      .set('authorization', 'Bearer ' + token)
    expect(res.statusCode).toBe(200)
  })
})
