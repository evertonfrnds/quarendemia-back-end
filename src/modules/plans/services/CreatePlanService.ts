import Plan from '@modules/plans/infra/typeorm/entities/Plan'
import { injectable, inject } from 'tsyringe'
import IPlansRepository from '../repositories/IPlansRepositories'

interface IRequest {
  id_user: string
  name: string
  description: string
  value: number
}

@injectable()
class CreatePlanService {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository,
  ) {}

  public async execute({
    id_user,
    name,
    description,
    value,
  }: IRequest): Promise<Plan> {
    const plans = await this.plansRepository.create({
      id_user,
      name,
      description,
      value,
    })

    return plans
  }
}

export default CreatePlanService
