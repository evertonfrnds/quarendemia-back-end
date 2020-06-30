import { Router } from 'express'

import SignUpService from '@modules/users/services/SignUpService'
import { container } from 'tsyringe'

const managersRouter = Router()

managersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body

  const signUp = container.resolve(SignUpService)

  const newUser = await signUp.execute({
    name,
    email,
    password,
  })

  delete newUser.password

  return response.json(newUser)
})

export default managersRouter
