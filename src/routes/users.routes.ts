import { Router } from 'express'

import { getRepository } from 'typeorm'

import CreateUserService from '../services/CreateUserService'
import UpdateUserService from '../services/UpdateUserService'
import DeleteUserService from '../services/DeleteUserService'

import ensureIsAdmin from '../middlewares/ensureIsAdmin'
import User from '../models/User'

const usersRouter = Router()

usersRouter.use(ensureIsAdmin)

usersRouter.get('/', async (request, response) => {
  const usersRepository = getRepository(User)
  const users = await usersRepository.find({
    select: ['id', 'name', 'email', 'type', 'isActive', 'created_at'],
  })

  return response.json(users)
})

usersRouter.post('/', async (request, response) => {
  const { name, email, type, password } = request.body

  const createUser = new CreateUserService()

  const user = await createUser.execute({
    name,
    email,
    type,
    password,
  })

  delete user.password

  return response.json(user)
})

usersRouter.put('/:id', async (request, response) => {
  const { name, email, type, isActive, password } = request.body
  const { id } = request.params

  const updateUser = new UpdateUserService()

  const user = await updateUser.execute({
    user_id: id,
    name,
    email,
    type,
    isActive,
    password,
  })

  delete user.password

  return response.json(user)
})

usersRouter.delete('/:id', async (request, response) => {
  const { id } = request.params

  const deleteUser = new DeleteUserService()

  await deleteUser.execute({
    user_id: id,
  })

  return response.status(204).send()
})

export default usersRouter
