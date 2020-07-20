import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

import MeansuresController from '../controllers/MeansuresController'

const meansuresRouter = Router()
const meansuresController = new MeansuresController()

meansuresRouter.use(ensureAuthenticated)

meansuresRouter.get('/', meansuresController.index)

meansuresRouter.get('/:id', meansuresController.show)

meansuresRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    },
  }),
  meansuresController.create,
)

meansuresRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    },
  }),
  meansuresController.update,
)

meansuresRouter.delete('/:id', meansuresController.delete)

export default meansuresRouter
