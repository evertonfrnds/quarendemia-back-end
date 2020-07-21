import AppError from '@shared/errors/AppError'

import Meansure from '@modules/meansures/infra/typeorm/entities/Meansure'
import { injectable, inject } from 'tsyringe'
import IMeansuresRepository from '../repositories/IMeansuresRepository'

interface IRequest {
  plan_id: string
  name: string
  description: string
  value: number
}

@injectable()
class UpdateMeansuresService {
  constructor(
    @inject('MeansuresRepository')
    private meansuresRepository: IMeansuresRepository, // eslint-disable-next-line prettier/prettier
  ) {}

  public async execute({
    plan_id,
    name,
    description,
    value,
  }: IRequest): Promise<Meansure> {
    const plan = await this.meansuresRepository.findById(plan_id)

    if (!plan) {
      throw new AppError('Medida não encontrada.')
    }

    plan.name = name
    plan.description = description
    plan.value = value

    await this.meansuresRepository.save(plan)

    return plan
  }
}

export default UpdateMeansuresService
