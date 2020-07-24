import { injectable, inject } from 'tsyringe'
import AppError from '@shared/errors/AppError'
import IPlansRepository from '../repositories/IPlansRepository'

interface IRequest {
  id: string
}

@injectable()
class DeletePlanService {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const plan = await this.plansRepository.findById(id)

    if (!plan) {
      throw new AppError('Plano não encontrado')
    }

    await this.plansRepository.delete(id)
  }
}

export default DeletePlanService
