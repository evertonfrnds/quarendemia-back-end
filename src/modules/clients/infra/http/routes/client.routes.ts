import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

import ClientController from '../controllers/ClientController'

const clientRoutes = Router()
const clientController = new ClientController()

clientRoutes.use(ensureAuthenticated)

clientRoutes.get('/', clientController.index)

clientRoutes.get('/:id', clientController.show)

clientRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).required(),
      email: Joi.string().required().email(),
      isActive: Joi.boolean().required(),
    },
  }),
  clientController.create,
)

clientRoutes.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).required(),
      email: Joi.string().required().email(),
    },
  }),
  clientController.update,
)

clientRoutes.delete('/:id', clientController.delete)

export default clientRoutes
