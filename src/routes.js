const { Router } = require('express')

const routes = Router()

const SessionsController = require('./controllers/SessionsController')
const AdminController = require('./controllers/AdminController')
const MenuController = require('./controllers/MenuController')
const DeliveryController = require('./controllers/DeliveryController')
const OrderController = require('./controllers/OrderController')

const middleware = require('./middlewares/auth')
const { Joi, Segments, celebrate } = require('celebrate')

routes.get('/', (req, res) => {
  return res.json({ message: 'Testing' })
})

routes.post('/sessions', SessionsController.create)
routes.post('/admins', AdminController.create)
routes.put('/admins', middleware, AdminController.update)

routes.get('/menu/item', MenuController.index)
routes.post('/menu/item', middleware, celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    img_url: Joi.string().required(),
    price: Joi.number().required()
  })
}), MenuController.create)

routes.put('/menu/item/:id', middleware, celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    img_url: Joi.string().required(),
    price: Joi.number().required()
  })
}), MenuController.update)

routes.delete('/menu/item/:id', middleware, celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  })
}), MenuController.delete)

routes.get('/delivery', DeliveryController.index)
routes.post('/delivery', middleware, celebrate({
  [Segments.BODY]: Joi.object().keys({
    region: Joi.string().required(),
    price: Joi.number().required()
  })
}), DeliveryController.create)

routes.put('/delivery/:id', middleware, celebrate({
  [Segments.BODY]: Joi.object().keys({
    region: Joi.string().required(),
    price: Joi.number().required()
  })
}), DeliveryController.update)

routes.delete('/delivery/:id', middleware, celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  })
}), DeliveryController.remove)

routes.get('/orders', middleware, OrderController.index)
routes.post('/orders', celebrate({
  [Segments.BODY]: Joi.object().keys({
    ordered_itens: Joi.array().required(),
    total: Joi.number().required(),
    has_address: Joi.boolean().required(),
    client_whatsapp: Joi.string().required(),
    address: Joi.string(),
    finish_time: Joi.string()
  })
}), OrderController.create)
module.exports = routes
