import { Request, Response } from 'express'
import { container } from 'tsyringe'
// import { classToClass } from 'class-transformer'

import ListPlanService from '@modules/plans/services/ListPlanService'
// import CreatePlanService from '@modules/plans/services/CreatePlanService'
// import UpdatePlanService from '@modules/plans/services/UpdatePlanService'
// import DeletePlanService from '@modules/plans/services/DeletePlanService'

export default class PlansController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPlans = container.resolve(ListPlanService)

    const plans = await listPlans.execute()

    return response.json(plans)
  }

  //   public async create(request: Request, response: Response): Promise<Response> {
  //     const { name, email, type, password } = request.body

  //     const createUser = container.resolve(CreateUserService)

  //     const user = await createUser.execute({
  //       name,
  //       email,
  //       type,
  //       password,
  //     })

  //     return response.json(classToClass(user))
  //   }

  //   public async update(request: Request, response: Response): Promise<Response> {
  //     const { name, email, type, isActive, password } = request.body
  //     const { id } = request.params

  //     const updateUser = container.resolve(UpdateUserService)

  //     const user = await updateUser.execute({
  //       user_id: id,
  //       name,
  //       email,
  //       type,
  //       isActive,
  //       password,
  //     })

  //     return response.json(classToClass(user))
  //   }

  //   public async delete(request: Request, response: Response): Promise<Response> {
  //     const { id } = request.params

  //     const deleteUser = container.resolve(DeleteUserService)

  //     await deleteUser.execute({
  //       user_id: id,
  //     })

  //     return response.status(204).send()
  //   }
}
