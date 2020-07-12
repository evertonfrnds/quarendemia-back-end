import { getRepository, Repository } from 'typeorm'

import IPlansRepository from '@modules/plans/repositories/IPlansRepository'

import ICreatePlanDTO from '@modules/plans/dtos/ICreatePlanDTO'

import Plan from '../entities/Plan'

class PlansRepository implements IPlansRepository {
  private ormRepository: Repository<Plan>

  constructor() {
    this.ormRepository = getRepository(Plan)
  }

<<<<<<< HEAD
  public async findAll(): Promise<Plan[]> {
    const plan = await this.ormRepository.find()

=======
  public async findAllById(id: string): Promise<Plan[]> {
    const plan = await this.ormRepository.find({ where: { user_id: id } })
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
    return plan
  }

  public async findById(id: string): Promise<Plan | undefined> {
    const plan = await this.ormRepository.findOne(id)

    return plan
  }

  public async delete(plan_id: string): Promise<void> {
    this.ormRepository.delete(plan_id)
  }

  public async create(planData: ICreatePlanDTO): Promise<Plan> {
    const plan = this.ormRepository.create(planData)

    await this.ormRepository.save(plan)

    return plan
  }

  public async save(plan: Plan): Promise<Plan> {
    return this.ormRepository.save(plan)
  }
}

export default PlansRepository
