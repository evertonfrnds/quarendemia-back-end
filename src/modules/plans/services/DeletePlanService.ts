import AppError from '@shared/errors/AppError'

import { inject, injectable } from 'tsyringe'
import IPlansRepository from '../repositories/IPlansRepository'

interface IRequest {
  plan_id: string
}

@injectable()
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
