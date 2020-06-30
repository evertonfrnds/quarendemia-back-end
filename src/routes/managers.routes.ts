import { Router } from 'express'

import ManagerSignUpService from '../services/ManagerSignUpService'

const managersRouter = Router()

managersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body

  const signUpManager = new ManagerSignUpService()

  const manager = await signUpManager.execute({
    name,
    email,
    password,
  })

  delete manager.password

  return response.json(manager)
})

export default managersRouter
