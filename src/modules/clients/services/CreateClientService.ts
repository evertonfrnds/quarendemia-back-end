import Client from '@modules/clients/infra/typeorm/entities/Client'
import { injectable, inject } from 'tsyringe'
<<<<<<< HEAD
import IClientsRepository from '../repositories/IClientsRepository'

interface IRequest {
  name: string
  telefone: string
=======
import IClientRepository from '../repositories/IClientRepository'

interface IRequest {
  user_id: string
  plan_id: string
  name: string
  email: string
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
}

@injectable()
class CreateClientService {
  constructor(
<<<<<<< HEAD
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({ name, telefone }: IRequest): Promise<Client> {
    const client = await this.clientsRepository.create({
      name,
      telefone,
=======
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
      isActive: true,
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
    })

    return client
  }
}

export default CreateClientService
