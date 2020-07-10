import { injectable, inject } from 'tsyringe'
import IPlansRepository from '../repositories/IPlansRepository'

interface IRequest {
  plan_id: string
}

@injectable()
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
