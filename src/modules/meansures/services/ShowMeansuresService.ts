import AppError from '@shared/errors/AppError'

import Meansure from '@modules/meansures/infra/typeorm/entities/Meansure'
import { injectable, inject } from 'tsyringe'
import IMeansuressRepository from '../repositories/IMeansuresRepository'

interface IRequest {
  id: string
}

@injectable()
class ShowMeansuresService {
  constructor(
    @inject('MeansuressRepository')
    private meansuresRepository: IMeansuressRepository, // eslint-disable-next-line prettier/prettier
  ) {}

  public async execute({ id }: IRequest): Promise<Meansure> {
    const meansures = await this.meansuresRepository.findById(id)

    if (!meansures) {
      throw new AppError('Medidas não encontradas')
    }

    return meansures
  }
}

export default ShowMeansuresService
