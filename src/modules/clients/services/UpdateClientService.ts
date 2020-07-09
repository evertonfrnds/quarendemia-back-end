import AppError from '@shared/errors/AppError'

import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IClientsRepository from '../repositories/IClientsRepository'

interface IRequest {
  user_id: string
  name: string
  telefone: string
}

@injectable()
class UpdateClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({ user_id, name, telefone }: IRequest): Promise<Client> {
    const client = await this.clientsRepository.findById(user_id)

    if (!client) {
      throw new AppError('Cliente não encontrado.')
    }

    client.name = name
    client.telefone = telefone

    await this.clientsRepository.save(client)

    return client
  }
}

export default UpdateClientsService
