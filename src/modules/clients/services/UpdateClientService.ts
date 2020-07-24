import AppError from '@shared/errors/AppError'

import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IClientsRepository from '../repositories/IClientsRepository'

interface IRequest {
  client_id: string
  plan_id: string
  name: string
  email: string
}

@injectable()
class UpdateClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({
    client_id,
    plan_id,
    name,
    email,
  }: IRequest): Promise<Client> {
    const client = await this.clientsRepository.findById(client_id)

    if (!client) {
      throw new AppError('Cliente não encontrado.')
    }

    client.name = name
    client.email = email
    client.plan_id = plan_id
    client.plan.id = plan_id

    await this.clientsRepository.save(client)

    return client
  }
}

export default UpdateClientService
