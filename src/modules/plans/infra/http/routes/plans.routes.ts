import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

import PlansController from '../controllers/PlansController'

const plansRouter = Router()
const usersController = new PlansController()

plansRouter.use(ensureAuthenticated)

plansRouter.get('/', usersController.index)

plansRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    },
  }),
  usersController.create,
)

plansRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    },
  }),
  usersController.update,
)

plansRouter.delete('/:id', usersController.delete)

export default plansRouter
