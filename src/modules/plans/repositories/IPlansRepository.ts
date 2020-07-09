import Plan from '../infra/typeorm/entities/Plan'
import ICreatePlanDTO from '../dtos/ICreatePlanDTO'

export default interface IUsersRepository {
  findAll(): Promise<Plan[]>
  findById(id: string): Promise<Plan | undefined>
  create(data: ICreatePlanDTO): Promise<Plan>
  delete(plan_id: string): Promise<void>
  save(plan: Plan): Promise<Plan>
}
