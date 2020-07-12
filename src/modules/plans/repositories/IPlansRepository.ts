import Plan from '../infra/typeorm/entities/Plan'
import ICreatePlanDTO from '../dtos/ICreatePlanDTO'

<<<<<<< HEAD
export default interface IUsersRepository {
  findAll(): Promise<Plan[]>
  findById(id: string): Promise<Plan | undefined>
  create(data: ICreatePlanDTO): Promise<Plan>
  delete(plan_id: string): Promise<void>
=======
export default interface IPlansRepository {
  findAllById(id: string): Promise<Plan[]>
  findById(id: string): Promise<Plan | undefined>
  delete(plan_id: string): Promise<void>
  create(data: ICreatePlanDTO): Promise<Plan>
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
  save(plan: Plan): Promise<Plan>
}
