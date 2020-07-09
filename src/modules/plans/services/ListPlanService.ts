import Plan from '@modules/plans/infra/typeorm/entities/Plan'
import { injectable, inject } from 'tsyringe'
import IPlansRepositories from '../repositories/IPlansRepositories'

interface IRequest {
  id: string
}

@injectable()
class ListUsersService {
  constructor(
    @inject('PlansRepositories')
    private plansRepositories: IPlansRepositories, // eslint-disable-next-line prettier/prettier
  ) { }

  public async execute({ id }: IRequest): Promise<Plan[]> {
    const plans = await this.plansRepositories.findAllById(id)

    return plans
  }
}

export default ListUsersService
