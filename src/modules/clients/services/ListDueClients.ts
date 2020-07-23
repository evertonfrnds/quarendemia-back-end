import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IDueClientRepository from '../repositories/IDueClients'

interface IRequest {
  user_id: string
  month: number
  year: number
}

@injectable()
class ListClientService {
  constructor(
    @inject('DueClientRepository')
    private dueClientRepository: IDueClientRepository,
  ) {}

  public async execute({ user_id, month, year }: IRequest): Promise<Client[]> {
    const clients = await this.dueClientRepository.findAll(user_id, month, year)

    return clients
  }
}

export default ListClientService
