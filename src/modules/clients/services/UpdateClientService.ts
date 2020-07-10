import AppError from '@shared/errors/AppError'

import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IClientRepository from '../repositories/IClientRepository'

interface IRequest {
  client_id: string
  name: string
  email: string
}

@injectable()
class UpdateClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}

  public async execute({ client_id, name, email }: IRequest): Promise<Client> {
    const client = await this.clientRepository.findById(client_id)

    if (!client) {
      throw new AppError('Plano não encontrado.')
    }

    client.name = name
    client.email = email

    await this.clientRepository.save(client)

    return client
  }
}

export default UpdateClientService
