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
    const clients = await this.clientRepository.delete(client_id)

    return clients
  }
}

export default DeleteClientService
