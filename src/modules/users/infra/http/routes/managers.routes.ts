import { Router } from 'express'

import SignUpService from '@modules/users/services/SignUpService'
import UsersRepository from '../../typeorm/repositories/UsersRepository'

const managersRouter = Router()

managersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body

  const usersRepository = new UsersRepository()
  const signUp = new SignUpService(usersRepository)

  const newUser = await signUp.execute({
    name,
    email,
    password,
  })

  delete newUser.password

  return response.json(newUser)
})

export default managersRouter
