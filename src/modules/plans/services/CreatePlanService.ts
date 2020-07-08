import Plan from '@modules/plans/infra/typeorm/entities/Plan'
import { injectable, inject } from 'tsyringe'
import IPlansRepository from '../repositories/IPlansRepository'

interface IRequest {
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

  public async execute({ name, description, value }: IRequest): Promise<Plan> {
    const plan = await this.plansRepository.create({
      name,
      description,
      value,
    })

    return plan
  }
}

export default CreatePlanService
