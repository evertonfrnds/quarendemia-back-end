import AppError from '@shared/errors/AppError'

import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IClientsRepository from '../repositories/IClientsRepository'

interface IRequest {
  id: string
  plan_id: string
  name: string
  email: string
  is_active: boolean
}

@injectable()
class UpdateClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({
    id,
    plan_id,
    name,
    email,
    is_active,
  }: IRequest): Promise<Client> {
    const client = await this.clientsRepository.findById(id)

    if (!client) {
      throw new AppError('Cliente não encontrado.')
    }

    if (client.email !== email) {
      const checkClientsExists = await this.clientsRepository.findByEmail(email)

      if (checkClientsExists && checkClientsExists.user_id === client.user_id) {
        throw new AppError(
          'O usuário já possui um cliente com o e-mail selecionado.',
        )
      }
    }

    client.name = name
    client.email = email
    client.plan_id = plan_id
    client.plan.id = plan_id
    client.is_active = is_active

    await this.clientsRepository.save(client)

    return client
  }
}

export default UpdateClientService
