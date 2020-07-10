import Plan from '@modules/plans/infra/typeorm/entities/Plan'
import { injectable, inject } from 'tsyringe'
import IPlansRepository from '../repositories/IPlansRepository'

interface IRequest {
  user_id: string
  name: string
  description: string
  value: number
}

@injectable()
class CreatePlanService {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository, // eslint-disable-next-line prettier/prettier
  ) { }

  public async execute({
    user_id,
    name,
    description,
    value,
  }: IRequest): Promise<Plan> {
    const plans = await this.plansRepository.create({
      user_id,
      name,
      description,
      value,
    })

    return plans
  }
}

export default CreatePlanService
