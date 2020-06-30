import { Router } from 'express'

import { getRepository } from 'typeorm'

import CreateUserService from '@modules/users/services/CreateUserService'
import UpdateUserService from '@modules/users/services/UpdateUserService'
import DeleteUserService from '@modules/users/services/DeleteUserService'

import ensureIsAdmin from '@modules/users/infra/http/middlewares/ensureIsAdmin'
import User from '@modules/users/infra/typeorm/entities/User'
import { container } from 'tsyringe'

const usersRouter = Router()

usersRouter.use(ensureIsAdmin)

usersRouter.get('/', async (request, response) => {
  const usersGetRepository = getRepository(User)
  const users = await usersGetRepository.find({
    select: ['id', 'name', 'email', 'type', 'isActive', 'created_at'],
  })

  return response.json(users)
})

usersRouter.post('/', async (request, response) => {
  const { name, email, type, password } = request.body

  const createUser = container.resolve(CreateUserService)

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

  const updateUser = container.resolve(UpdateUserService)

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

  const deleteUser = container.resolve(DeleteUserService)

  await deleteUser.execute({
    user_id: id,
  })

  return response.status(204).send()
})

export default usersRouter
