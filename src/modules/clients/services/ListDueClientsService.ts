import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IDueClientsRepository from '../repositories/IDueClientsRepository'

interface IRequest {
  user_id: string
  month: number
  year: number
}

@injectable()
class ListClientService {
  constructor(
    @inject('DueClientsRepository')
    private dueClientsRepository: IDueClientsRepository,
  ) {}

  public async execute({ user_id, month, year }: IRequest): Promise<Client[]> {
    const clients = await this.dueClientsRepository.findAll(
      user_id,
      month,
      year,
    )

    return clients
  }
}

export default ListClientService
