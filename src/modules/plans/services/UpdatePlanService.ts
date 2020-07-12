import AppError from '@shared/errors/AppError'

import Plan from '@modules/plans/infra/typeorm/entities/Plan'
import { injectable, inject } from 'tsyringe'
import IPlansRepository from '../repositories/IPlansRepository'

interface IRequest {
  plan_id: string
  name: string
  description: string
  value: number
}

@injectable()
class UpdatePlanService {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository, // eslint-disable-next-line prettier/prettier
  ) { }

  public async execute({
    plan_id,
    name,
    description,
    value,
  }: IRequest): Promise<Plan> {
    const plan = await this.plansRepository.findById(plan_id)

    if (!plan) {
      throw new AppError('Plano não encontrado.')
    }

    plan.name = name
    plan.description = description
    plan.value = value

    await this.plansRepository.save(plan)

    return plan
  }
}

export default UpdatePlanService
