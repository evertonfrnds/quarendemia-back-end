import Plan from '@modules/plans/infra/typeorm/entities/Plan'
import { injectable, inject } from 'tsyringe'
import IPlansRepository from '../repositories/IPlansRepositories'

@injectable()
class ListUsersService {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository,
  ) {}

  public async execute(): Promise<Plan[]> {
    const plans = await this.plansRepository.findAll()

    return plans
  }
}

export default ListUsersService
