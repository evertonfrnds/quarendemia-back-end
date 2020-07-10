import { getRepository, Repository } from 'typeorm'

import IClientRepository from '@modules/clients/repositories/IClientRepository'

import ICreateClientDTO from '@modules/clients/dtos/ICreateClientDTO'

import Client from '../entities/Client'

class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>

  constructor() {
    this.ormRepository = getRepository(Client)
  }

  public async findAllById(id: string): Promise<Client[]> {
    const client = await this.ormRepository.find({ where: { user_id: id } })
    return client
  }

  public async findById(id: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne(id)

    return client
  }

  public async delete(client_id: string): Promise<void> {
    this.ormRepository.delete(client_id)
  }

  public async create(clientData: ICreateClientDTO): Promise<Client> {
    const client = this.ormRepository.create(clientData)

    await this.ormRepository.save(client)

    return client
  }

  public async save(client: Client): Promise<Client> {
    return this.ormRepository.save(client)
  }
}

export default ClientRepository
