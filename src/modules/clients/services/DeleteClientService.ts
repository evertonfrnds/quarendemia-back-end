import AppError from '@shared/errors/AppError'

import { inject, injectable } from 'tsyringe'
import IClientsRepository from '../repositories/IClientsRepository'

interface IRequest {
  user_id: string
}

@injectable()
class DeleteClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<void> {
    const client = await this.clientsRepository.findById(user_id)

    if (!client) {
      throw new AppError('Cliente não encontrado.')
    }

    await this.clientsRepository.delete(user_id)
  }
}

export default DeleteClientService
