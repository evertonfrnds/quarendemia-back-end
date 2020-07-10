import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateClientService from '@modules/clients/services/CreateClientService'
// import ListPlanService from '@modules/clients/services/ListPlanService'
// import UpdatePlanService from '@modules/clients/services/UpdatePlanService'
// import DeletePlanService from '@modules/clients/services/DeletePlanService'

export default class ClientController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const listPlans = container.resolve(ListPlanService)

    const plans = await listPlans.execute({ id })

    return response.json(plans)
  }

  public async show(request: Request, response: Response): Promise<Response> {
    return response.json({ message: 'olá' })
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { name, email } = request.body
    const createClient = container.resolve(CreateClientService)

    const client = await createClient.execute({
      user_id: id,
      name,
      email,
    })

    return response.json(classToClass(client))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, description, value } = request.body
    const { id } = request.params

    const updatePlan = container.resolve(UpdatePlanService)

    const plan = await updatePlan.execute({
      plan_id: id,
      name,
      description,
      value,
    })

    return response.json(classToClass(plan))
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deletePlan = container.resolve(DeletePlanService)

    await deletePlan.execute({
      plan_id: id,
    })

    return response.status(204).send()
  }
}
