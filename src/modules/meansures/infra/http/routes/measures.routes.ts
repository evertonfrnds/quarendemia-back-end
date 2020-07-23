import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

import MeasuresController from '../controllers/MeasuresController'

const measuresRouter = Router()
const measuresController = new MeasuresController()

measuresRouter.use(ensureAuthenticated)

measuresRouter.get('/', measuresController.index)

measuresRouter.get('/:id', measuresController.show)

measuresRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      client_id: Joi.string().required(),
      height: Joi.number().required(),
      weight: Joi.number().required(),
      neck: Joi.number(),
      torax_top: Joi.number(),
      torax_bottom: Joi.number(),
      bust: Joi.number(),
      waist: Joi.number(),
      abdomen: Joi.number(),
      hip: Joi.number(),
      thigh_left: Joi.number(),
      thigh_right: Joi.number(),
      calf_left: Joi.number(),
      calf_right: Joi.number(),
      arm_left: Joi.number(),
      arm_right: Joi.number(),
      forearm_left: Joi.number(),
      forearm_right: Joi.number(),
    },
  }),
  measuresController.create,
)

measuresRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      client_id: Joi.string().required(),
      height: Joi.number().required(),
      weight: Joi.number().required(),
      neck: Joi.number(),
      torax_top: Joi.number(),
      torax_bottom: Joi.number(),
      bust: Joi.number(),
      waist: Joi.number(),
      abdomen: Joi.number(),
      hip: Joi.number(),
      thigh_left: Joi.number(),
      thigh_right: Joi.number(),
      calf_left: Joi.number(),
      calf_right: Joi.number(),
      arm_left: Joi.number(),
      arm_right: Joi.number(),
      forearm_left: Joi.number(),
      forearm_right: Joi.number(),
    },
  }),
  measuresController.update,
)

measuresRouter.delete('/:id', measuresController.delete)

export default measuresRouter
