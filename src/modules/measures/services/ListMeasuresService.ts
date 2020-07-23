import Measure from '@modules/measures/infra/typeorm/entities/Measure'
import { injectable, inject } from 'tsyringe'
import IMeasuresRepository from '../repositories/IMeasuresRepository'

interface IRequest {
  client_id: string | undefined
}

@injectable()
class ListMeasuresService {
  constructor(
    @inject('MeasuresRepository')
    private measuresRepository: IMeasuresRepository,
  ) {}

  public async execute({ client_id }: IRequest): Promise<Measure[]> {
    const measures = await this.measuresRepository.findAllByClientId(client_id)

    return measures
  }
}

export default ListMeasuresService
