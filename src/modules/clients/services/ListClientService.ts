import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IClientRepository from '../repositories/IClientRepository'

interface IRequest {
  user_id: string
}

@injectable()
class ListClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Client[]> {
    const clients = await this.clientRepository.findAllById(user_id)

    return clients
  }
}

export default ListClientService
