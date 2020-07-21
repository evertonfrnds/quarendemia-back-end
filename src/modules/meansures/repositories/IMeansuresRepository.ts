import Meansure from '../infra/typeorm/entities/Meansure'
import ICreateMeansureDTO from '../dtos/ICreateMeansureDTO'

export default interface IMeansuresRepository {
  // findAll(id: string): Promise<Meansure[]>
  // findById(id: string): Promise<Meansure | undefined>
  delete(client_id: string): Promise<void> // verificar
  create(data: ICreateMeansureDTO): Promise<Meansure>
  // save(meansure: Meansure): Promise<Meansure>
}
