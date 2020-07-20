import { Router } from 'express'

import usersRouter from '@modules/users/infra/http/routes/users.routes'
import managersRouter from '@modules/users/infra/http/routes/managers.routes'
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import passwordRouter from '@modules/users/infra/http/routes/password.routes'
import clientsRouter from '@modules/clients/infra/http/routes/clients.routes'
import plansRouter from '@modules/plans/infra/http/routes/plans.routes'
import meansuresRouter from '@modules/meansures/infra/http/routes/meansures.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/managers', managersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/password', passwordRouter)
routes.use('/clients', clientsRouter)
routes.use('/plans', plansRouter)
routes.use('/meansures', meansuresRouter)

export default routes
