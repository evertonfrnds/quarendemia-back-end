import { injectable, inject } from 'tsyringe'
import IPlansRepositories from '../repositories/IPlansRepositories'

interface IRequest {
  plan_id: string
}

@injectable()
class DeletePlanService {
  constructor(
    @inject('PlansRepositories')
    private plansRepositories: IPlansRepositories, // eslint-disable-next-line prettier/prettier
  ) { }

  public async execute({ plan_id }: IRequest): Promise<void> {
    const plans = await this.plansRepositories.delete(plan_id)

    return plans
  }
}

export default DeletePlanService
