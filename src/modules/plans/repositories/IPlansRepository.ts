import Plan from '../infra/typeorm/entities/Plan'
import ICreatePlanDTO from '../dtos/ICreatePlanDTO'

export default interface IPlansRepository {
  findAllByUserId(user_id: string): Promise<Plan[]>
  findById(id: string): Promise<Plan | undefined>
  delete(id: string): Promise<void>
  create(data: ICreatePlanDTO): Promise<Plan>
  save(plan: Plan): Promise<Plan>
}
