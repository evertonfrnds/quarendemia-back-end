import { Router } from 'express'

import usersRouter from '@modules/users/infra/http/routes/users.routes'
import managersRouter from '@modules/users/infra/http/routes/managers.routes'
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import passwordRouter from '@modules/users/infra/http/routes/password.routes'
<<<<<<< HEAD
import clientsRouter from '@modules/clients/infra/http/routes/clients.routes'
import plansRouter from '@modules/plans/infra/http/routes/plans.routes'
=======
import planRouter from '@modules/plans/infra/http/routes/plans.routes'
import clientRouter from '@modules/clients/infra/http/routes/client.routes'
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/managers', managersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/password', passwordRouter)
<<<<<<< HEAD
routes.use('/clients', clientsRouter)
routes.use('/plans', plansRouter)
=======
routes.use('/plans', planRouter)
routes.use('/clients', clientRouter)
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175

export default routes
