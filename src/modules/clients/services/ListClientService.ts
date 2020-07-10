import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IClientRepository from '../repositories/IClientRepository'

interface IRequest {
  client_id: string
}

@injectable()
class ListClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}

  public async execute({ client_id }: IRequest): Promise<Client[]> {
    const clients = await this.clientRepository.findAllById(client_id)

    return clients
  }
}

export default ListClientService
