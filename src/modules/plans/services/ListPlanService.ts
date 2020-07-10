import Plan from '@modules/plans/infra/typeorm/entities/Plan'
import { injectable, inject } from 'tsyringe'
import IPlansRepository from '../repositories/IPlansRepository'

interface IRequest {
  id: string
}

@injectable()
class ListUsersService {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository, // eslint-disable-next-line prettier/prettier
  ) { }

  public async execute({ id }: IRequest): Promise<Plan[]> {
    const plans = await this.plansRepository.findAllById(id)

    return plans
  }
}

export default ListUsersService
