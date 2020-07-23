import { injectable, inject } from 'tsyringe'
import IMeasuresRepository from '../repositories/IMeasuresRepository'

interface IRequest {
  id: string
}

@injectable()
class DeleteMeasureService {
  constructor(
    @inject('MeasuresRepository')
    private measuresRepository: IMeasuresRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const measures = await this.measuresRepository.delete(id)

    return measures
  }
}

export default DeleteMeasureService
