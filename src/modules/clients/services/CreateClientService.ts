import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IClientRepository from '../repositories/IClientRepository'

interface IRequest {
  user_id: string
  plan_id: string
  name: string
  email: string
}

@injectable()
class CreateClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}

  public async execute({
    user_id,
    plan_id,
    name,
    email,
  }: IRequest): Promise<Client> {
    const client = await this.clientRepository.create({
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
