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
})
