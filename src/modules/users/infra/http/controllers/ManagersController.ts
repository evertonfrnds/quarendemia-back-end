import { Request, Response } from 'express'

import { container } from 'tsyringe'

import SignUpService from '@modules/users/services/SignUpService'

export default class ManagersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    const signUp = container.resolve(SignUpService)

    const newUser = await signUp.execute({
      name,
      email,
      password,
    })

    delete newUser.password

    return response.json(newUser)
  }
}
