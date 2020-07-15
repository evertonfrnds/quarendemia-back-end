import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

import ClientsController from '../controllers/ClientsController'

const clientsRouter = Router()
const clientsController = new ClientsController()

clientsRouter.use(ensureAuthenticated)

clientsRouter.get('/', clientsController.index)

clientsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).required(),
      telefone: Joi.string().required(),
    },
  }),
  clientsController.create,
)

clientsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).required(),
      telefone: Joi.string().required(),
    },
  }),
  clientsController.update,
)

clientsRouter.delete('/:id', clientsController.delete)

export default clientsRouter
