import { Router } from 'express'

import usersRouter from '@modules/users/infra/http/routes/users.routes'
import managersRouter from '@modules/users/infra/http/routes/managers.routes'
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/managers', managersRouter)
routes.use('/sessions', sessionsRouter)

export default routes
