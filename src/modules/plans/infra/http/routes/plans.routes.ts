import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

import PlansController from '../controllers/PlansController'

const plansRouter = Router()
<<<<<<< HEAD
const usersController = new PlansController()

plansRouter.use(ensureAuthenticated)

plansRouter.get('/', usersController.index)
=======
const plansController = new PlansController()

plansRouter.use(ensureAuthenticated)

plansRouter.get('/', plansController.index)
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175

plansRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    },
  }),
<<<<<<< HEAD
  usersController.create,
=======
  plansController.create,
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
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
<<<<<<< HEAD
  usersController.update,
)

plansRouter.delete('/:id', usersController.delete)
=======
  plansController.update,
)

plansRouter.delete('/:id', plansController.delete)
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175

export default plansRouter
