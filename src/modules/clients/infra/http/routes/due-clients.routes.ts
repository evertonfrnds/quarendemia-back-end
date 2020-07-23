import { Router } from 'express'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

import ClientPaymentController from '../controllers/ClientPaymentController'

const dueClientRoutes = Router()
const clientPaymentController = new ClientPaymentController()

dueClientRoutes.use(ensureAuthenticated)

dueClientRoutes.get('/:month/:year', clientPaymentController.index)

export default dueClientRoutes
