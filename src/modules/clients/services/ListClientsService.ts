import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IClientsRepository from '../repositories/IClientsRepository'

@injectable()
class ListClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(): Promise<Client[]> {
    const clients = await this.clientsRepository.findAll()

    return clients
  }
}

export default ListClientsService
