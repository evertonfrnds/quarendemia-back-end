import AppError from '@shared/errors/AppError'

import { injectable, inject } from 'tsyringe'
import IClientsRepository from '../repositories/IClientsRepository'

interface IRequest {
  id: string
}

@injectable()
class DeleteClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const client = await this.clientsRepository.findById(id)

    if (!client) {
      throw new AppError('Cliente não encontrado')
    }

    client.is_active = false

    await this.clientsRepository.save(client)
  }
}

export default DeleteClientService
