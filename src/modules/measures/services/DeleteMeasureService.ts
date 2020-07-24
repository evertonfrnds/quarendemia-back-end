import { injectable, inject } from 'tsyringe'
import AppError from '@shared/errors/AppError'
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
    const measure = await this.measuresRepository.findById(id)

    if (!measure) {
      throw new AppError('Medida não encontrada')
    }

    await this.measuresRepository.delete(id)
  }
}

export default DeleteMeasureService
