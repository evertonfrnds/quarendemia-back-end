import { Router } from 'express'

import ManagersController from '../controllers/ManagersController'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const managersRouter = Router()
const managersController = new ManagersController()

managersRouter.post('/', managersController.create)

managersRouter.use(ensureAuthenticated)

managersRouter.get('/', managersController.show)
managersRouter.put('/', managersController.update)

export default managersRouter
