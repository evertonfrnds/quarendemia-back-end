import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ManagersController from '../controllers/ManagersController'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const managersRouter = Router()
const managersController = new ManagersController()

managersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6),
    },
  }),
  managersController.create,
)

managersRouter.use(ensureAuthenticated)

managersRouter.get('/', managersController.show)
managersRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string().min(6),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
    },
  }),
  managersController.update,
)

export default managersRouter
