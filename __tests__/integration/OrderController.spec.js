const request = require('supertest')
const app = require('../../src/app')

describe('Ordering', () => {
  it('Should request a new Order', async () => {
    const res = await request(app).post('/orders').send({
      ordered_itens: [{ title: 'Pizza Portuguesa', qtd: 1 }, { title: 'Pizza Calabreza', qtd: 2 }],
      total: 55.0,
      has_address: true,
      address: '98, Rua Vila Nova, Jardim Jordão',
      client_whatsapp: '+5581999374806'
    })

    expect(res.statusCode).toBe(200)
  })

  it('Should return all orders', async () => {
    const res = await request(app).get('/orders').set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWE4YzNjYzExYjRjNTBiM2NhNWQxNzAiLCJpYXQiOjE1ODgxODQxMDYsImV4cCI6MTU4ODE4NzcwNn0.qfgI_ILk_q3md-1rDoZFiYfWKee1obAfBYTteXcTW9U')

    expect(res.statusCode).toBe(200)
  })
})
