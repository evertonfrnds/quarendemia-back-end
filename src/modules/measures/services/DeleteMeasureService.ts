import { injectable, inject } from 'tsyringe'
import IMeasuresRepository from '../repositories/IMeasuresRepository'

interface IRequest {
  measure_id: string
}

@injectable()
class DeleteMeasureService {
  constructor(
    @inject('MeasuresRepository')
    private measuresRepository: IMeasuresRepository,
  ) {}

  public async execute({ measure_id }: IRequest): Promise<void> {
    const measure = await this.measuresRepository.delete(measure_id)

    return measure
  }
}

export default DeleteMeasureService
