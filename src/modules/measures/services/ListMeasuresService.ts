import Measure from '@modules/measures/infra/typeorm/entities/Measure'
import { injectable, inject } from 'tsyringe'
import IMeasuresRepository from '../repositories/IMeasuresRepository'

interface IRequest {
  id: string
}
@injectable()
class ListMeasuresService {
  constructor(
    @inject('MeasuresRepository')
    private measuresRepository: IMeasuresRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Measure[]> {
    const measures = await this.measuresRepository.findAllByClient_id(id)

    return measures
  }
}

export default ListMeasuresService
