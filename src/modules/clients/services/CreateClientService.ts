import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
import IClientsRepository from '../repositories/IClientsRepository'

interface IRequest {
  name: string
  telefone: string
}

@injectable()
class CreateClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({ name, telefone }: IRequest): Promise<Client> {
    const client = await this.clientsRepository.create({
      name,
      telefone,
    })

    return client
  }
}

export default CreateClientService
