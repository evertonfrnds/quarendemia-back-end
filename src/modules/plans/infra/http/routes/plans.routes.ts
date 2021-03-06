import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

import PlansController from '../controllers/PlansController'

const plansRouter = Router()
const plansController = new PlansController()

plansRouter.use(ensureAuthenticated)

plansRouter.get('/', plansController.index)

plansRouter.get('/:id', plansController.show)

plansRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
      value: Joi.number().required(),
    },
  }),
  plansController.create,
)

plansRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
      value: Joi.number().required(),
    },
  }),
  plansController.update,
)

plansRouter.delete('/:id', plansController.delete)

export default plansRouter
