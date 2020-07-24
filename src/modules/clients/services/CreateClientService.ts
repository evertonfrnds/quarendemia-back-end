import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IClientsRepository from '../repositories/IClientsRepository'

interface IRequest {
  user_id: string
  plan_id: string
  name: string
  email: string
}

@injectable()
class CreateClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({
    user_id,
    plan_id,
    name,
    email,
  }: IRequest): Promise<Client> {
    const client = await this.clientsRepository.create({
      user_id,
      name,
      email,
      plan_id,
      is_active: true,
    })

    return client
  }
}

export default CreateClientService
