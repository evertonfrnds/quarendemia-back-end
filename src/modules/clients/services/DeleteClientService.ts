import AppError from '@shared/errors/AppError'

import { injectable, inject } from 'tsyringe'
import IClientRepository from '../repositories/IClientRepository'

interface IRequest {
  client_id: string
}

@injectable()
class DeleteClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}

  public async execute({ client_id }: IRequest): Promise<void> {
    const client = await this.clientRepository.findById(client_id)

    if (!client) {
      throw new AppError('Cliente não existe')
    }

    client.is_active = false

    await this.clientRepository.save(client)
  }
}

export default DeleteClientService
