import Meansure from '@modules/meansures/infra/typeorm/entities/Meansure'
import { injectable, inject } from 'tsyringe'
import IMeansuresRepository from '../repositories/IMeansuresRepository'
// Lista oo histórico de Medidas
@injectable()
class ListMeansuresService {
  constructor(
    @inject('MeansuresRepository')
    private meansuresRepository: IMeansuresRepository,
  ) {}

  public async execute(): Promise<Meansure[]> {
    const meansures = await this.meansuresRepository.findAll()

    return meansures
  }
}

export default ListMeansuresService
