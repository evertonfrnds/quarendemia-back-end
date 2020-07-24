import { Router } from 'express'

import usersRouter from '@modules/users/infra/http/routes/users.routes'
import managersRouter from '@modules/users/infra/http/routes/managers.routes'
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import passwordRouter from '@modules/users/infra/http/routes/password.routes'
import planRouter from '@modules/plans/infra/http/routes/plans.routes'
import clientsRouter from '@modules/clients/infra/http/routes/clients.routes'
import dueClientRouter from '@modules/clients/infra/http/routes/due-clients.routes'
import paymentsRouter from '@modules/payment/infra/http/routes/payments.routes'
import measuresRouter from '@modules/measures/infra/http/routes/measures.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/managers', managersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/password', passwordRouter)
routes.use('/plans', planRouter)
routes.use('/clients', clientsRouter)
routes.use('/payments', paymentsRouter)
routes.use('/measures', measuresRouter)
routes.use('/due-clients', dueClientRouter)

export default routes
