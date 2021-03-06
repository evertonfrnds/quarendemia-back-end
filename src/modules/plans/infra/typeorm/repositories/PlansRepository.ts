import { getRepository, Repository } from 'typeorm'

import IPlansRepository from '@modules/plans/repositories/IPlansRepository'

import ICreatePlanDTO from '@modules/plans/dtos/ICreatePlanDTO'

import Plan from '../entities/Plan'

class PlansRepository implements IPlansRepository {
  private ormRepository: Repository<Plan>

  constructor() {
    this.ormRepository = getRepository(Plan)
  }

  public async findAllByUserId(user_id: string): Promise<Plan[]> {
    const plan = await this.ormRepository.find({ where: { user_id } })
    return plan
  }

  public async findById(id: string): Promise<Plan | undefined> {
    const plan = await this.ormRepository.findOne(id, {
      select: ['id', 'name', 'description', 'value'],
    })

    return plan
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id)
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
