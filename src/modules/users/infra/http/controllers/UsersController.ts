import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ShowUserService from '@modules/users/services/ShowUserService'
import ListUsersService from '@modules/users/services/ListUsersService'
import CreateUserService from '@modules/users/services/CreateUserService'
import UpdateUserService from '@modules/users/services/UpdateUserService'
import DeleteUserService from '@modules/users/services/DeleteUserService'

export default class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const showUserService = container.resolve(ShowUserService)

    const user = await showUserService.execute({ id })

    return response.json(classToClass(user))
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersService)

    const users = await listUsers.execute()

    return response.json(users)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, type, password } = request.body

    const createUser = container.resolve(CreateUserService)

    const user = await createUser.execute({
      name,
      email,
      type,
      password,
    })

    return response.json(classToClass(user))
  }

  public async update(request: Request, response: Response): Promise<Response> {
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

    return response.json(classToClass(user))
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteUser = container.resolve(DeleteUserService)

    await deleteUser.execute({
      user_id: id,
    })

    return response.status(204).send()
  }
}
