import { Router } from 'express'

import ManagersController from '../controllers/ManagersController'

const managersRouter = Router()
const managersController = new ManagersController()

managersRouter.post('/', managersController.create)

export default managersRouter
