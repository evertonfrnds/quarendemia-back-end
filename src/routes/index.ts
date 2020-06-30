import { Router } from 'express'

import usersRouter from './users.routes'
import managersRouter from './managers.routes'
import sessionsRouter from './sessions.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/managers', managersRouter)
routes.use('/sessions', sessionsRouter)

export default routes
