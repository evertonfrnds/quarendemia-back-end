import { getRepository, Repository } from 'typeorm'

import IClientsRepository from '@modules/clients/repositories/IClientsRepository'

import ICreateClientDTO from '@modules/clients/dtos/ICreateClientDTO'

import Client from '../entities/Client'

class ClientsRepository implements IClientsRepository {
  private ormRepository: Repository<Client>

  constructor() {
    this.ormRepository = getRepository(Client)
  }

  public async findAll(): Promise<Client[]> {
    const client = await this.ormRepository.find()

    return client
  }

  public async findById(id: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne(id)

    return client
  }

  public async create(clientData: ICreateClientDTO): Promise<Client> {
    const client = this.ormRepository.create(clientData)

    await this.ormRepository.save(client)

    return client
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id)

    // await this.ormRepository.save(client)
  }

  public async save(client: Client): Promise<Client> {
    return this.ormRepository.save(client)
  }
}

export default ClientsRepository
