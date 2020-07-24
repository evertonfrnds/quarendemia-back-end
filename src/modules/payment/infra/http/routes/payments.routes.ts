import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import PaymentsController from '../controllers/PaymentsController'

const paymentRouter = Router()
const paymentsController = new PaymentsController()

paymentRouter.use(ensureAuthenticated)

paymentRouter.get('/payment-total/:month/:year', paymentsController.show)
paymentRouter.get('/:month/:year', paymentsController.index)

paymentRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      client_id: Joi.string().required(),
      month: Joi.number().required(),
      year: Joi.number().required(),
    },
  }),
  paymentsController.create,
)

paymentRouter.delete('/:id', paymentsController.delete)

export default paymentRouter
