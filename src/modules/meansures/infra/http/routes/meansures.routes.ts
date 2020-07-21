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
      client_id: Joi.string().required(),
      height: Joi.number().required(),
      weight: Joi.number().required(),
      neck: Joi.number().required(),
      torax_sup: Joi.number().required(),
      torax_inf: Joi.number().required(),
      bust: Joi.number().required(),
      waist: Joi.number().required(),
      abdomen: Joi.number().required(),
      qualdril: Joi.number().required(),
      thigh_left: Joi.number().required(),
      thigh_right: Joi.number().required(),
      calf_left: Joi.number().required(),
      calf_right: Joi.number().required(),
      arm_left: Joi.number().required(),
      arm_right: Joi.number().required(),
      forearm_left: Joi.number().required(),
      forearm_right: Joi.number().required(),
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
