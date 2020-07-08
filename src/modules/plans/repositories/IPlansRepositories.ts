import Plan from '../infra/typeorm/entities/Plan'
import ICreatePlanDTO from '../dtos/ICreatePlanDTO'

export default interface IPlansRepository {
  findAll(): Promise<Plan[]>
  findById(id: string): Promise<Plan | undefined>
  delete(plan_id: string): Promise<void>
  create(data: ICreatePlanDTO): Promise<Plan>
  save(plan: Plan): Promise<Plan>
}
