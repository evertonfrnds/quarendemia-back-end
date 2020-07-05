import { Request, Response } from 'express'

import { container } from 'tsyringe'

import SignUpManagerService from '@modules/users/services/SignUpManagerService'
import UpdateManagerProfileService from '@modules/users/services/UpdateManagerProfileService'
import ShowManagerProfileService from '@modules/users/services/ShowManagerProfileService'

export default class ManagersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id

    const showManagerProfile = container.resolve(ShowManagerProfileService)

    const user = await showManagerProfile.execute({
      user_id,
    })

    delete user.password

    return response.json(user)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    const signUpManager = container.resolve(SignUpManagerService)

    const newUser = await signUpManager.execute({
      name,
      email,
      password,
    })

    delete newUser.password

    return response.json(newUser)
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id
    const { name, email, old_password, password } = request.body

    const updateManagerProfile = container.resolve(UpdateManagerProfileService)

    const user = await updateManagerProfile.execute({
      user_id,
      name,
      email,
      old_password,
      password,
    })

    delete user.password

    return response.json(user)
  }
}
