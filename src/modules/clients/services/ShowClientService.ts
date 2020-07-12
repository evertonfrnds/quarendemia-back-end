import AppError from '@shared/errors/AppError'

import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IClientRepository from '../repositories/IClientRepository'

interface IRequest {
  client_id: string
}

@injectable()
class ShowClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}

  public async execute({ client_id }: IRequest): Promise<Client> {
    const client = await this.clientRepository.findById(client_id)

    if (!client) {
      throw new AppError('Cliente não encontrado')
    }

    return client
  }
}

export default ShowClientService
