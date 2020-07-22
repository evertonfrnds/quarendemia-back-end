import Meansure from '@modules/meansures/infra/typeorm/entities/Meansure'
import { injectable, inject } from 'tsyringe'
import IMeansuresRepository from '../repositories/IMeansuresRepository'

interface IRequest {
  id: string
}
@injectable()
class ListMeansuresService {
  constructor(
    @inject('MeansuresRepository')
    private meansuresRepository: IMeansuresRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Meansure[]> {
    const meansures = await this.meansuresRepository.findAllById(id)

    return meansures
  }
}

export default ListMeansuresService
