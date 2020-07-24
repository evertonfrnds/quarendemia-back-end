import AppError from '@shared/errors/AppError'

import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IClientsRepository from '../repositories/IClientsRepository'

interface IRequest {
  client_id: string
}

@injectable()
class ShowClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({ client_id }: IRequest): Promise<Client> {
    const client = await this.clientsRepository.findById(client_id)

    if (!client) {
      throw new AppError('Cliente não encontrado')
    }

    return client
  }
}

export default ShowClientService
