<<<<<<< HEAD
import AppError from '@shared/errors/AppError'

import { inject, injectable } from 'tsyringe'
=======
import { injectable, inject } from 'tsyringe'
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
import IPlansRepository from '../repositories/IPlansRepository'

interface IRequest {
  plan_id: string
}

@injectable()
<<<<<<< HEAD
class DeleteService {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository,
  ) {}

  public async execute({ plan_id }: IRequest): Promise<void> {
    const plan = await this.plansRepository.findById(plan_id)

    if (!plan) {
      throw new AppError('Plano não encontrado.')
    }

    await this.plansRepository.delete(plan_id)
  }
}

export default DeleteService
=======
class DeletePlanService {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository, // eslint-disable-next-line prettier/prettier
  ) { }

  public async execute({ plan_id }: IRequest): Promise<void> {
    const plans = await this.plansRepository.delete(plan_id)

    return plans
  }
}

export default DeletePlanService
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
