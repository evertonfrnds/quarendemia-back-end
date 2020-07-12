import AppError from '@shared/errors/AppError'

<<<<<<< HEAD
import { inject, injectable } from 'tsyringe'
import IClientsRepository from '../repositories/IClientsRepository'

interface IRequest {
  user_id: string
=======
import { injectable, inject } from 'tsyringe'
import IClientRepository from '../repositories/IClientRepository'

interface IRequest {
  client_id: string
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
}

@injectable()
class DeleteClientService {
  constructor(
<<<<<<< HEAD
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<void> {
    const client = await this.clientsRepository.findById(user_id)

    if (!client) {
      throw new AppError('Cliente não encontrado.')
    }

    await this.clientsRepository.delete(user_id)
=======
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}

  public async execute({ client_id }: IRequest): Promise<void> {
    const client = await this.clientRepository.findById(client_id)

    if (!client) {
      throw new AppError('Cliente não existe')
    }

    client.isActive = false

    await this.clientRepository.save(client)
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
  }
}

export default DeleteClientService
