import Plan from '@modules/plans/infra/typeorm/entities/Plan'
import { injectable, inject } from 'tsyringe'
import IPlansRepository from '../repositories/IPlansRepository'

interface IRequest {
<<<<<<< HEAD
=======
  user_id: string
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
  name: string
  description: string
  value: number
}

@injectable()
class CreatePlanService {
  constructor(
    @inject('PlansRepository')
<<<<<<< HEAD
    private plansRepository: IPlansRepository,
  ) {}

  public async execute({ name, description, value }: IRequest): Promise<Plan> {
    const plan = await this.plansRepository.create({
=======
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
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
      name,
      description,
      value,
    })

<<<<<<< HEAD
    return plan
=======
    return plans
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
  }
}

export default CreatePlanService
