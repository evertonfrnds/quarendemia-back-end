import { injectable, inject } from 'tsyringe'
import IMeansuresRepository from '../repositories/IMeansuresRepository'

interface IRequest {
  meansure_id: string
}

@injectable()
class DeleteMeansureService {
  constructor(
    @inject('MeansuresRepository')
    private meansuresRepository: IMeansuresRepository,
  ) {}

  public async execute({ meansure_id }: IRequest): Promise<void> {
    const meansure = await this.meansuresRepository.delete(meansure_id)

    return meansure
  }
}

export default DeleteMeansureService
