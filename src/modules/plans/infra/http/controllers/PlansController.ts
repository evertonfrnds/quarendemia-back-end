import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ListPlansService from '@modules/plans/services/ListPlansService'
import ShowPlanService from '@modules/plans/services/ShowPlanService'
import CreatePlanService from '@modules/plans/services/CreatePlanService'
import UpdatePlanService from '@modules/plans/services/UpdatePlanService'
import DeletePlanService from '@modules/plans/services/DeletePlanService'

export default class PlansController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const listPlans = container.resolve(ListPlansService)

    const plans = await listPlans.execute({ user_id: id })

    return response.json(plans)
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const showPlan = container.resolve(ShowPlanService)

    const plan = await showPlan.execute({ id })

    return response.json(plan)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { name, description, value } = request.body
    const createPlan = container.resolve(CreatePlanService)

    const plan = await createPlan.execute({
      user_id: id,
      name,
      description,
      value,
    })

    return response.json(classToClass(plan))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, description, value } = request.body
    const { id } = request.params

    const updatePlan = container.resolve(UpdatePlanService)

    const plan = await updatePlan.execute({
      id,
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
      id,
    })

    return response.status(204).send()
  }
}
