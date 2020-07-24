import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import PaymentController from '../controllers/PaymentController'

const paymentRouter = Router()
const paymentController = new PaymentController()

paymentRouter.use(ensureAuthenticated)

paymentRouter.get('/payment-total/:month/:year', paymentController.show)
paymentRouter.get('/:month/:year', paymentController.index)

paymentRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      client_id: Joi.string().required(),
      month: Joi.number().required(),
      year: Joi.number().required(),
    },
  }),
  paymentController.create,
)

paymentRouter.delete('/:id', paymentController.delete)

export default paymentRouter
