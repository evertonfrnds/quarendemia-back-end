import Meansure from '@modules/meansures/infra/typeorm/entities/Meansure'
import { injectable, inject } from 'tsyringe'
import IMeansuresRepository from '../repositories/IMeansuresRepository'

interface IRequest {
  meansure_id: string
}

@injectable()
class ListMeansureService {
  constructor(
    @inject('PlansRepository')
    private meansuresRepository: IMeansuresRepository, // eslint-disable-next-line prettier/prettier
  ) {}

  public async execute({ meansure_id }: IRequest): Promise<Meansure[]> {
    const meansures = await this.meansuresRepository.findAllById(meansure_id)

    return meansures
  }
}

export default ListMeansureService
