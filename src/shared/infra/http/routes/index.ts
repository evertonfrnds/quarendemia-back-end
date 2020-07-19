import { Router } from 'express'

import usersRouter from '@modules/users/infra/http/routes/users.routes'
import managersRouter from '@modules/users/infra/http/routes/managers.routes'
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import passwordRouter from '@modules/users/infra/http/routes/password.routes'
import planRouter from '@modules/plans/infra/http/routes/plans.routes'
import clientRouter from '@modules/clients/infra/http/routes/client.routes'
import paymentRouter from '@modules/payment/infra/http/routes/payment.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/managers', managersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/password', passwordRouter)
routes.use('/plans', planRouter)
routes.use('/clients', clientRouter)
routes.use('/payments', paymentRouter)

export default routes
