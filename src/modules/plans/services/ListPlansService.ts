import Plan from '@modules/plans/infra/typeorm/entities/Plan'
import { injectable, inject } from 'tsyringe'
import IPlansRepository from '../repositories/IPlansRepository'

interface IRequest {
  user_id: string
}

@injectable()
class ListPlansService {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Plan[]> {
    const plans = await this.plansRepository.findAllByUserId(user_id)

    return plans
  }
}

export default ListPlansService
