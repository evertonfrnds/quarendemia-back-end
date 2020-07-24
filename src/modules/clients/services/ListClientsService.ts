import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IClientsRepository from '../repositories/IClientsRepository'

interface IRequest {
  user_id: string
}

@injectable()
class ListClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Client[]> {
    const clients = await this.clientsRepository.findAllById(user_id)

    return clients
  }
}

export default ListClientService
