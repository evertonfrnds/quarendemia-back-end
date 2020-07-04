import { Router } from 'express'

import ensureIsAdmin from '@modules/users/infra/http/middlewares/ensureIsAdmin'

import UsersController from '../controllers/UsersController'

const usersRouter = Router()
const usersController = new UsersController()

usersRouter.use(ensureIsAdmin)

usersRouter.get('/', usersController.show)

usersRouter.post('/', usersController.create)

usersRouter.put('/:id', usersController.update)

usersRouter.delete('/:id', usersController.delete)

export default usersRouter
