import { uuid } from 'uuidv4'

import IPlansRepository from '@modules/plans/repositories/IPlansRepository'

import ICreatePlansDTO from '@modules/plans/dtos/ICreatePlanDTO'

import Plan from '../../infra/typeorm/entities/Plan'

class FakePlansRepository implements IPlansRepository {
  private plans: Plan[] = []

  public async findAllByUserId(user_id: string): Promise<Plan[]> {
    const plans = this.plans.filter(plan => plan.user_id === user_id)

    return plans
  }

  public async findById(id: string): Promise<Plan | undefined> {
    const findPlan = this.plans.find(plan => plan.id === id)

    return findPlan
  }

  public async create(planData: ICreatePlansDTO): Promise<Plan> {
    const plan = new Plan()

    Object.assign(plan, { id: uuid() }, planData)

    this.plans.push(plan)

    return plan
  }

  public async delete(id: string): Promise<void> {
    const findIndex = this.plans.findIndex(findPlan => findPlan.id === id)

    this.plans.splice(findIndex, 1)
  }

  public async save(plan: Plan): Promise<Plan> {
    const findIndex = this.plans.findIndex(findPlan => findPlan.id === plan.id)

    this.plans[findIndex] = plan

    return plan
  }
}

export default FakePlansRepository
