import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

import ClientController from '../controllers/ClientsController'

const clientRoutes = Router()
const clientController = new ClientController()

clientRoutes.use(ensureAuthenticated)

clientRoutes.get('/', clientController.index)

clientRoutes.get('/:id', clientController.show)

clientRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      plan_id: Joi.string().required(),
      name: Joi.string().min(6).required(),
      email: Joi.string().required().email(),
    },
  }),
  clientController.create,
)

clientRoutes.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      plan_id: Joi.string().required(),
      name: Joi.string().min(6).required(),
      email: Joi.string().required().email(),
      is_active: Joi.boolean().required(),
    },
  }),
  clientController.update,
)

clientRoutes.delete('/:id', clientController.delete)

export default clientRoutes
