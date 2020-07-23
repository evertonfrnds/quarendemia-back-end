import Measure from '../infra/typeorm/entities/Measure'
import ICreateMeasureDTO from '../dtos/ICreateMeasureDTO'

export default interface IMeasuresRepository {
  findAllByClientId(client_id: string): Promise<Measure[]>
  findById(id: string): Promise<Measure | undefined>
  delete(client_id: string): Promise<void>
  create(data: ICreateMeasureDTO): Promise<Measure>
  save(measure: Measure): Promise<Measure>
}
