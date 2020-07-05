import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureIsAdmin from '@modules/users/infra/http/middlewares/ensureIsAdmin'

import UsersController from '../controllers/UsersController'

const usersRouter = Router()
const usersController = new UsersController()

usersRouter.use(ensureIsAdmin)

usersRouter.get('/', usersController.show)

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).required(),
      email: Joi.string().email().required(),
      type: Joi.string().required(),
      password: Joi.string().min(6).required(),
    },
  }),
  usersController.create,
)

usersRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).required(),
      email: Joi.string().email().required(),
      type: Joi.string().required(),
      isActive: Joi.boolean().required(),
      password: Joi.string().min(6),
    },
  }),
  usersController.update,
)

usersRouter.delete('/:id', usersController.delete)

export default usersRouter
