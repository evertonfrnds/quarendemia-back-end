import AppError from '@shared/errors/AppError'

import Plan from '@modules/plans/infra/typeorm/entities/Plan'
import { injectable, inject } from 'tsyringe'
import IPlansRepository from '../repositories/IPlansRepository'

interface IRequest {
  id: string
}

@injectable()
class ShowPlanService {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Plan> {
    const plan = await this.plansRepository.findById(id)

    if (!plan) {
      throw new AppError('Plano não encontrado')
    }

    return plan
  }
}

export default ShowPlanService
